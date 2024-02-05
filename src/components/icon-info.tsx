import { cn } from '@/lib/utils'
import { ComponentType, ReactNode } from 'react'

interface IconInfoProps {
  className: string
  children?: ReactNode
  textInfo?: string
  icon?: ComponentType<{ className?: string }>
}

export function IconInfo({
  children,
  icon: Icon,
  textInfo,
  className,
}: IconInfoProps) {
  return (
    <div className="flex items-center gap-3">
      {Icon && (
        <Icon className={cn('size-8 rounded-full p-2 text-white', className)} />
      )}
      <div className="flex flex-col">
        <p>{textInfo}</p>
        <span>{children}</span>
      </div>
    </div>
  )
}
