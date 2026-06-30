import React from 'react';
import {TipographyP} from '@/components/Typography';

export default function ChatBubble({ message, isUser }) {
  return (
    <div className={`chat-bubble ${isUser ? 'user' : 'assistant'}`}>
      <TypographyP>{message}</TypographyP>
    </div>
  );
}

export default function ChatBubble({ message, isUser, avatarURL }) {
  return (
    <div class="shrink-0">
    <img 
      src={avatarURL || defaultAvatar} 
      alt="Avatar" 
      class="w-8 h-8 rounded-full object-cover shadow-xs border border-gray-100"
    />
  </div>
    <div class="flex flex-col gap-4 p-4 max-w-md mx-auto bg-gray-50 rounded-2xl shadow-sm">
  {/* <!-- Mensagem Recebida (Esquerda) --> */}
  <div class="flex items-end gap-2 max-w-[80%]">
    <div class="bg-gray-200 text-gray-800 rounded-2xl rounded-bl-none px-4 py-2 text-sm shadow-xs">
        <TipographyP>{message}</TipographyP>
    </div>
  </div>

  {/* <!-- Mensagem Enviada (Direita) --> */}
  <div class="flex items-end gap-2 max-w-[80%] self-end">
    <div class="bg-blue-600 text-white rounded-2xl rounded-br-none px-4 py-2 text-sm shadow-xs">
      <TypographyP>{message}</TypographyP>
    </div>
  </div>

</div>
  );
}