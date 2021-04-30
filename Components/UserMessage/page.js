import {useState, useContext, useRef, useEffect, useCallback} from 'react'
import styles from './style.module.css';
import { Field, Form, ErrorMessage, Formik } from 'formik';
import SocketClient from '../../Utils/socket';
import {MessagesContext} from '../../Utils/Context/Messages';

const Page = () => {
    const { messages, setMessages} = useContext(MessagesContext)
    
    console.log('input messages: ',messages)
    
    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={ (values, actions)=>{
                    let clientMessage = {
                        'id': '2',
                        'name': 'Visitant',
                        'message': values.sendmessage
                    }
                    setMessages([...messages, clientMessage])
                    SocketClient.emit('message', {'name': 'Visitant', 'message': values.sendmessage})
                }}
            >
                <Form autoComplete="off">
                    <div className={`${styles.messageContainer}`}>
                        <Field className="col-9 col-md-10 p-2 rounded-pill" name="sendmessage" type="text" placeholder="Escribe tu mensaje..." />
                        <button type="submit" className="col-3 col-md-2 p-2 rounded-pill">Send</button>
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default Page;

const initialValues = {
    sendmessage: '',
}

const onSubmit = (values) => {

}


