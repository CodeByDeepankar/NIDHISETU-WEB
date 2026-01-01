import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: 'white' | 'gray' | 'dark';
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, background = 'white', ...props }, ref) => {
    const backgrounds = {
      white: "bg-white",
      gray: "bg-slate-50",
      dark: "bg-slate-900 text-white",
    }

    return (
      <section
        ref={ref}
        className={cn(
          "py-16 md:py-24",
          backgrounds[background],
          className
        )}
        {...props}
      />
    )
  }
)
Section.displayName = "Section"

export { Section }
