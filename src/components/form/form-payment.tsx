'use client'
import { Banknote, CreditCard, DollarSign, Landmark } from 'lucide-react'
import { useFormContext } from 'react-hook-form'
import { Card } from '../ui/card'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { FormTitle } from './form-title'

const dataPayment = [
  {
    icon: <CreditCard size={16} className="text-purple-500" />,
    label: 'Cartão de Crédito',
    name: 'credit',
  },
  {
    icon: <Landmark size={16} className="text-purple-500" />,
    label: 'Cartão de Débito',
    name: 'debit',
  },
  {
    icon: <Banknote size={16} className="text-purple-500" />,
    label: 'Dinheiro',
    name: 'money',
  },
]

export function FormPayment() {
  const { control } = useFormContext()
  return (
    <Card className="flex flex-col gap-8 bg-slate-50 p-10">
      <FormTitle
        title={'Pagamento'}
        description={
          'O pagamento é feito na entrega. Escolha a forma que deseja pagar'
        }
      >
        <DollarSign className="mt-0.5 text-purple-600" />
      </FormTitle>
      <FormField
        control={control}
        name="paymentMethod"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid grid-cols-3"
              >
                {dataPayment.map((item) => {
                  return (
                    <FormItem
                      key={item.name}
                      className="flex items-center space-x-3 space-y-0"
                    >
                      <FormControl>
                        <RadioGroupItem
                          value={item.name}
                          className="peer sr-only"
                        />
                      </FormControl>
                      <FormLabel className="flex w-full items-center justify-center gap-3 rounded-md border bg-slate-100 p-4 text-xs hover:bg-slate-200 peer-aria-checked:border-purple-500 peer-aria-selected:bg-purple-200">
                        {item.icon}
                        <span className="uppercase">{item.label}</span>
                      </FormLabel>
                    </FormItem>
                  )
                })}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </Card>
  )
}
