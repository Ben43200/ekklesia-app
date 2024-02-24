import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import { useEffect } from "react";


export default function ContactPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
return(
    <main>

<ContactForm />


        </main>
)





}