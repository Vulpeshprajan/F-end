import React from 'react'
import Footer from "./partials/Footer";
import Header from "./partials/Headers";
import { Row, Container, Col } from "react-bootstrap";
import "./defaultLayout.style.css";

const Defaultlayout = ({ children }) => {
    return (
        <div className="default-layout">
    
                
                    <div className="left-bar" > I am from the left menu </div>
               
                    <div className="main" >
                        <Header />

                        {children}
                        <Footer />

                    </div>
              


           

        </div>


    )
}

export default Defaultlayout
