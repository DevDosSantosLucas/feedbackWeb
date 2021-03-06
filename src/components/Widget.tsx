import {ChatCircleDots} from 'phosphor-react'
import { useState } from 'react'
import {Popover} from '@headlessui/react'
import { WidgetForm } from './WidgetForm'
export function Widget(){
  const [isWidgetOpen,setIsWidgetOpen] = useState(false)
  function toggleWidgetVisibility(){
    setIsWidgetOpen(!isWidgetOpen)
  }
  return (
  <Popover className='absolute bottom-5 right-4 md:bottom-8 cd:right-8 flex flex-col items-end'>
    <Popover.Panel>
      <WidgetForm />
      </Popover.Panel>
    <Popover.Button 
    className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group' >
          <ChatCircleDots className='w-6 h-6'/>
          <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'> 
            <span className='pl-2'></span>
            Feedback
          </span>
    </Popover.Button>
  </Popover>
  )
}
/* overflow-hidden = qualquer conteudo de um elemento que sobreponha o tamanho maxde um elemento, o mesmo deixa invisivel  */
