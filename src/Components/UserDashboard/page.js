import {useState, useEffect, useContext, useRef} from 'react';
import styles from './style.module.css';
import MessageBot from '../Bot';
import MessageVisitant from '../Visitant';
import SocketClient from '../../Utils/socket';
import { MessagesContext } from '../../Utils/Context/Messages';


const Page = () => {
    const { messages, setMessages} = useContext(MessagesContext)
    const ref = useRef(null)

    const scrollToBottom = () =>{
        ref.current.scrollIntoView({ behavior: "smooth"})
    }

    useEffect(()=>{

        SocketClient.on('response', (message)=>{
            setMessages([...messages, message])
        })
        
        return ()=> SocketClient.off();

    }, [messages])

    useEffect(scrollToBottom, [messages])

    return(
        <>
            <div className="overflow-auto h-100 w-100" >
                {messages ? messages.map((item, index)=>{
                  if(item.name == "Bot"){
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

                }): ""}
                <div ref={ref}></div>
            </div>
        </>
    )
}
/**
 *  

 */
export default Page;


