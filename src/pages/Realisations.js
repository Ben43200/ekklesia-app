import React from "react"
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import "./methodologie.scss"
import { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import axios from "axios";


export default function Realisations() {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  const apiCall = () => {
    axios.get('https://ekklesia-server.onrender.com/api').then((data) => {
      //this console.log will be in our frontend console
      console.log(data)
    })
  }
  return (
    // <div>
    <main>
      <h2>Nos Réalisations</h2>
   <p>Site de la paroisse de crest</p>
    <ContactForm />
<button onClick={apiCall}>Make API Call</button>
      </main>
  //  <ContactForm />

      // </div>
      )}