import styles from './style.module.css';
import { Field, Form, ErrorMessage, Formik } from 'formik';

const Page = () => {
    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
            >
                <Form autoComplete="off">
                    <div className="p-1">
                        <Field className="col-md-10 p-2 rounded-pill" name="sendmessage" type="text" placeholder="Escribe tu mensaje..." />
                        <button className="col-md-2 p-2 rounded-pill">Send</button>
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
    alert(values.sendmessage)
}


