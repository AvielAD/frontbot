import {useState} from 'react';
import styles from './style.module.css';

import MessageBot from '../Bot';
import MessageVisitant from '../Visitant';

const Page = () => {
    
    const [message, setMessage] = useState(chat);


    return(
        <>
            <div className="overflow-auto h-100 w-100">
              {message.map((item, index)=>{
                  if(item.name == "bot"){
                    return(
                      <div key={index}>
                          <MessageBot data={item} />
                      </div>
                    )
                  }
                  return(
                      <div key={index}>
                          <MessageVisitant data={item}/>
                      </div>
                  )

              })}
            </div>
        </>
    )
}

export default Page;


const chat = [
    {
        id: '1',
        name: 'bot',
        message: 'hola soy el bot bienvenido'
    },
    {
        id:'2',
        name: 'visitante 1',
        message: 'hola bot requiero tu apoyo'
    },
    {
        id: '3',
        name: 'bot',
        message: 'claro comencemos analizando tus materias optativas'
    },
    {
        id: '4',
        name: 'visitante 1',
        message: 'claro tome estas optativas durante este año: optativa 1 optativa 2'
    },
    {
        id: '5',
        name: 'bot',
        message: 'claro comencemos analizando tus materias optativas'
    },
    {
        id: '6',
        name: 'visitante 1',
        message: 'claro tome estas optativas durante este año: optativa 1 optativa 2'
    },
    {
        id: '7',
        name: 'bot',
        message: 'claro comencemos analizando tus materias optativas'
    },
    {
        id: '8',
        name: 'visitante 1',
        message: 'claro tome estas optativas durante este año: optativa 1 optativa 2'
    },
    {
        id: '9',
        name: 'bot',
        message: 'claro comencemos analizando tus materias optativas'
    },
    {
        id: '10',
        name: 'visitante 1',
        message: 'claro tome estas optativas durante este año: optativa 1 optativa 2'
    },
]

