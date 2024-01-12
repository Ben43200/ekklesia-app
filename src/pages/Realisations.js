import React from "react"
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import "./methodologie.scss"
import { useEffect } from "react";
import ContactForm from "../components/ContactForm";


export default function Realisations() {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <div>
    <main>
      <h2>Nos Réalisations</h2>
   <p>Site de la paroisse de crest</p>
      </main>
      <ContactForm />
      </div>
      )}