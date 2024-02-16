import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
// import { Accordion } from '@mui/material';

import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Methodologie from "./pages/Methodologie";
import Mission from "./pages/Mission";
// import Error from "./pages/Error/Error";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Service from "./pages/Services";
import Realisations from "./pages/Realisations";
import ContactPage from "./pages/ContactPage";

import Error from "./pages/error/Error";
// import ScrollToTop from "react-scroll-to-top";
// import { Helmet } from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  // <React.StrictMode>
  <BrowserRouter>
  {/* <Router> */}
      <ScrollToTop />
{/* <ScrollTop /> */}
    {/* <Helmet>
      <title>Meteoben Développeur Web</title>
      <meta
        name="description"
        content="Développeur et créateur de site web en Vallée de la Drôme"
      />
    </Helmet> */}
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/methodologie" element={<Methodologie />} />
      <Route path="/mission" element={<Mission />} />
      <Route path="/services" element={<Service />} />
      <Route path="/realisations" element={<Realisations />} />
      <Route path="/contact" element={<ContactPage />} />

      <Route path="*" element={<Error />} />




      {/* <Route path="/examples" element={<Examples />} /> */}
      {/* <Route path="*" element={<Error />} /> */}

    </Routes>
    <Footer />

  {/* </Router> */}
  </BrowserRouter>

  // </React.StrictMode>
);
