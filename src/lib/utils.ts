import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// Cria um merge customizado avisando quais são os seus tokens de tamanho
const customTwMerge = extendTailwindMerge({
  extend: {
    theme: {
      // Avise o merge que esses nomes significam "tamanho de fonte" e não cores!
      fontSize: ["heading-2xl", "heading-xl", "heading-lg", "heading-md", "body-lg", "body-md", "body-sm"]
    },
    classGroups: {
      // Força o tailwind-merge a reconhecer o padrão 'text-heading-*' e 'text-body-*' como TAMANHO DE FONTE
      "font-size": [
        { 
          text: [
            "heading-2xl", 
            "heading-xl", 
            "heading-lg", 
            "heading-md", 
            "body-lg",
            "body-md", 
            "body-sm"
          ] 
        }
      ],
      "color": [
        {
          text: [
            "neutral-800"



          ]
        }
      ]
    }
  }
})

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs))
}

// import { twMerge } from "tailwind-merge"

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }