import React from 'react'
import {Formik} from 'formik'
import './contactform.scss'

const ContactForm = props => {
    return <Formik
            initialValues={ {sender: '', email: '', content:''}}
            onSubmit={(values, {setSubmitting}) => {
                alert(JSON.stringify(values))
            }}
            >
            {({values, handleChange, handleSubmit}) => (
                <form  className="contactForm" onSubmit={handleSubmit}>
                    <input type='text' name='sender' onChange={handleChange} placeholder="Name" value={values.sender} />

                    <input type='email' name='email' onChange={handleChange} placeholder="Email" value={values.email} />
                    
                    <textarea name='content' onChange={handleChange} value={values.content}> </textarea>
                    <button type="submit">  Submit </button>
                </form>

            )}
        </Formik>
}

export default ContactForm;