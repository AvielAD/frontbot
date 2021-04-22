import styles from './style.module.css';
import { Field, Form, ErrorMessage, Formik } from 'formik';
import Socket from '../../Utils/socket';

const Page = () => {
    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
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
    Socket.emit('conectado', 'Hola desde el cliente');
    console.log('send message')
}


