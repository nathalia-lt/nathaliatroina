import React from 'react';
import {TypographyP} from '@/components/ui/Typography';
import { cn } from "@/lib/utils.js";

export default function ChatBubble({ message, isUser = false, name=null, avatarURL }) {

  return (
    <div className="flex flex-col gap-xs px-4 pt-2 pb-1">
      {/* <!-- Mensagem Recebida (Esquerda) --> */}
      {!isUser && (
      <div className="flex items-start flex-col gap-2xs max-w-[80%]">
        <div className="bg-neutral-400 text-neutral-800 rounded-2xl rounded-bl-none px-4 py-2 text-sm shadow-xs">
            <TypographyP>{message}</TypographyP>
        </div> 
        {name && (
        <div className="mb-sm">
          <TypographyP className="text-xs text-neutral-700">{name}</TypographyP>
        </div> 
        )}
      </div>
      )}
      

      {/* <!-- Mensagem Enviada (Direita) --> */}
      {isUser && (
        <div className="flex items-end flex-col gap-2xs max-w-[80%] self-end">
        <div className="bg-tertiary-700 text-neutral-700 rounded-2xl rounded-br-none px-4 py-2 text-sm shadow-xs">
          <TypographyP>{message}</TypographyP>
        </div>
        {name &&(
          <div className="mb-sm">
            <TypographyP className="text-xs text-neutral-700">{name}</TypographyP>  
          </div>
        )}
      </div>
      )}

    </div>  
  );
}

export function ChatGroup({chatItems, className}) {
  return (<div className={cn("mx-auto mt-lg bg-neutral-200 rounded-2xl shadow-sm py-lg", className)}>
    {
      chatItems.map((item, index) => (
        <ChatBubble
          key={index}
          message={item.message}
          name={item?.name}
          isUser={item?.isUser}
        />
      ))
    }
  </div>)
}