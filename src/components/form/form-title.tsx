import { CardDescription, CardHeader, CardTitle } from '../ui/card'
interface FormTitleProps {
  title: string
  description: string
  children?: React.ReactNode
}
export function FormTitle({ title, description, children }: FormTitleProps) {
  return (
    <CardHeader className="flex flex-row gap-2 space-y-0 p-0">
      {children}
      <div className="flex flex-col gap-0.5 ">
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </div>
    </CardHeader>
  )
}
