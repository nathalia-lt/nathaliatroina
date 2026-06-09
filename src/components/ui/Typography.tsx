import React from "react";

import { cn } from "@/lib/utils";

// Esse arquivo é um exemplo de como criar componentes de tipografia reutilizáveis usando Tailwind CSS.
// font-thin (100)
// font-light (300)
// font-normal (400)
// font-medium (500)
// font-semibold (600)
// font-bold (700)
// font-black (900)

export function TypographyH1({ children, className }: { children: React.ReactNode, className?: string }) {
  const baseClasses = "font-title scroll-m-20  font-bold text-neutral-700  text-heading-2xl tracking-tight  leading-none";
  return (
    <h1 className={cn(baseClasses, className)}>
      {children}
    </h1>
  )
}

export function TypographyH2({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <h2 className={cn("scroll-m-20 text-heading-xl font-title font-semibold text-neutral-700 tracking-tight first:mt-0", className)}>
      {children}
    </h2>
  )
}

export function TypographyH3({ className, children }: { children: React.ReactNode, className?: string }) {
  const baseClasses = "scroll-m-20 text-heading-lg font-title font-medium tracking-tight leading-none text-neutral-700";
  return (
    <h3 className={cn(baseClasses, className)}>
      {children}
    </h3>
  )
}


export function TypographyH4({ className, children }: { children: React.ReactNode, className?: string }) {
  const baseClasses = "scroll-m-20 text-heading-md font-title font-medium tracking-tight leading-none text-neutral-700";
  return (
    <h4 className={cn(baseClasses, className)}>
      {children}
    </h4>
  )
}


// tirar o tight do texto princpal e colocar um leading mais solto, tipo 1.5 ou 1.6, colocar 150% de line height (leading-relaxed)
export function TypographyP({ children, variant, className }: { children: React.ReactNode, variant?: "default" | "large", className?: string }) {

  const baseClasses = "font-body leading text-neutral-600 [&:not(:first-child)]:mt-6";

  const variantClasses = variant === 'large' ? 'text-body-lg' : 'text-body-sm';

  return (
    <p className={cn(baseClasses, variantClasses, className)}>
      {children}
    </p>
  )
}

export function TypographyBlockquote({ children, author }: { children: React.ReactNode, author?: string }) {
  return (
    <blockquote className=" max-w-[60%] text-neutral-600 mx-auto mt-6  border-l-2 dark:border-l-yellow-200 py-3 px-2xs italic dark:bg-green-900">
      &quot;{children}&quot;
      {author && <div className="text-right">{author}</div>}
    </blockquote>
  )
}

export function TypographyList({list, className }: {list: string[]}) {

  const baseClasses = "font-body  text-neutral-600 [&:not(:first-child)]:mt-6 my-6 ml-6 list-disc [&>li]:mt-1";

  return (
    <ul className={cn(baseClasses, className)}>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )

}

export function TypographyListDescription({list, className }: {list: string[]}) {

  const baseClasses = "font-body  text-neutral-600 [&:not(:first-child)]:mt-6 my-6 ml-6 list-disc [&>li]:mt-1";

  return (
    <ul className={cn(baseClasses, className)}>
      {list.map((item, index) => (
        <li key={index}>
          <span className="font-bold">{item.title}</span>
          <div>{item.description}</div>
        </li>
      ))}
    </ul>
  )

}


