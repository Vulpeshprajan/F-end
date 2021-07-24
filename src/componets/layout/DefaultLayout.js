import React from 'react'
import Footer from "./partials/Footer";
import Header from "./partials/Headers";
import { Row, Container, Col } from "react-bootstrap";
import "./defaultLayout.style.css";
import SideBarNav from '../sidebar/SideBarNav';

const Defaultlayout = ({ children }) => {
    return (
        <div className="default-layout">
    
                
                    <div className="left-bar" >
                        <div className="logo"> Admin panel (Logo) </div>
                    <SideBarNav/>    
                    </div>
               
                    <div className="main" >
                        <Header />

                        {children}
                        <Footer />

                    </div>
              


           

        </div>


    )
}

export default Defaultlayout
