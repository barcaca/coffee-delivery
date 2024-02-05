'use client'
import { MapPin } from 'lucide-react'
import { useFormContext } from 'react-hook-form'
import { Card } from '../ui/card'
import { FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { FormTitle } from './form-title'

export function FormAddress() {
  const { control } = useFormContext()
  return (
    <Card className="bg-slate-50 p-10 ">
      <FormTitle
        title={'Endereço de Entrega'}
        description={'Informe o endereço onde deseja receber seu pedido'}
      >
        <MapPin className="mt-0.5 text-yellow-600" />
      </FormTitle>
      <div className="grid grid-cols-[12.5rem_17.25rem_3.75rem] gap-x-4 gap-y-2">
        <FormField
          control={control}
          name="cep"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormControl>
                <Input placeholder="CEP" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="street"
          render={({ field }) => (
            <FormItem className="col-span-3 row-start-2">
              <FormControl>
                <Input placeholder="Rua" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="number"
          render={({ field }) => (
            <FormItem className="row-start-3">
              <FormControl>
                <Input placeholder="Número" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="complement"
          render={({ field }) => (
            <FormItem className="relative col-span-2 row-start-3">
              <FormControl>
                <Input placeholder="Complemento" {...field} />
              </FormControl>
              <span className="absolute bottom-1/2 right-2 translate-y-2 text-sm italic text-slate-400">
                Opctional
              </span>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="district"
          render={({ field }) => (
            <FormItem className="row-start-4">
              <FormControl>
                <Input placeholder="Bairro" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="city"
          render={({ field }) => (
            <FormItem className="row-start-4 flex-1 ">
              <FormControl>
                <Input placeholder="Cidade" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="uf"
          render={({ field }) => (
            <FormItem className="row-start-4">
              <FormControl>
                <Input placeholder="UF" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </Card>
  )
}
