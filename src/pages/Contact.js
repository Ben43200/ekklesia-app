
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.scss"
import { useEffect } from 'react';


export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
              "service_s6muiwa","react_contact_form", form.current, "BX3zRj2D7lUW5xwzS"
            )
            .then(
                (result) => {
                    alert('Merci pour votre message, il sera traité dans les plus brefs délais...');
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    useEffect(() => {
        window.scrollTo(0,0)
      },[])
    return (
     
            <main>

                <h1>Formulaire de contact</h1>
                <form className='cf' ref={form} onSubmit={sendEmail}>

                    <div className='half left cf'>
                        <input type='text' placeholder='Nom' name='user_name' />
                        <input type='text' placeholder='Prénom' name='first_name' />
                        <input type='email' placeholder='Adresse email' name='user_email' />
                    </div>
                    <div className='half right cf'>
                        <textarea name='message' type='text' placeholder='Parlez-nous de votre projet'></textarea>
                    </div>
                    <input type='submit' value='envoyer' id='input-submit' />
                </form>
            </main>
    );

}

export default Contact;