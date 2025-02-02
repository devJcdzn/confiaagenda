import type React from "react"

interface GradientCardProps {
  children: React.ReactNode
  className?: string
}

export function GradientCard({ children, className = "" }: GradientCardProps) {
  return (
    <div
      className={`relative rounded-xl p-[1px] backdrop-blur-3xl ${className}`}
    >
      <div className="relative rounded-xl p-6">{children}</div>
    </div>
  )
}

