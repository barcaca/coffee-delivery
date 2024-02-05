'use client'

import { useCart } from '@/contexts/cart-context'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form } from '../ui/form'
import { FormAddress } from './form-address'
import { FormPayment } from './form-payment'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const orderFormSchema = z.object({
  cep: z
    .string({ required_error: 'Informe o CEP' })
    .min(2, { message: 'CEP deve conter ao menos 2 caracters' }),
  street: z
    .string({ required_error: 'Informe a Rua' })
    .min(2, { message: 'Rua deve conter ao menos 2 caracters' }),
  number: z
    .string({ required_error: 'Informe o número' })
    .min(1, { message: 'Número deve conter ao menos 1 caracters' }),
  complement: z.string().optional(),
  district: z
    .string({ required_error: 'Informe o Bairro' })
    .min(2, { message: 'Bairro deve conter ao menos 2 caracters' }),
  city: z
    .string({ required_error: 'Informe o Cidade' })
    .min(2, { message: 'Cidade deve conter ao menos 2 caracters' }),
  uf: z
    .string({ required_error: 'Informe o UF' })
    .min(2, { message: 'UF deve conter 2 caracters' }),
  paymentMethod: z.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return {
        message: 'Informe o metódo de pagamento',
      }
    },
  }),
})

export type OrderFormData = z.infer<typeof orderFormSchema>

export function FormOrder() {
  const { cleanCart, addUserData } = useCart()
  const form = useForm<OrderFormData>({
    resolver: zodResolver(orderFormSchema),
  })
  const { handleSubmit } = form
  const router = useRouter()

  function handleConfirmOrder(data: OrderFormData) {
    addUserData(data)
    router.push('/checkout/order-confirm')
    cleanCart()
  }
  return (
    <Form {...form}>
      <form
        id="completeFormOrder"
        method="post"
        onSubmit={handleSubmit(handleConfirmOrder)}
        className="flex flex-col gap-4"
      >
        <FormAddress />
        <FormPayment />
      </form>
    </Form>
  )
}
