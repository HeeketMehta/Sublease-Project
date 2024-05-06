import React, {useEffect, useState} from "react";
import "../App.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";


export const PageLayout = (props) => {



    

    const localStorage_data = localStorage.getItem("JWTtoken");
    const localStorage_data_username = localStorage.getItem("Username");
    const localStorage_data_email = localStorage.getItem("Email");





    const navigate = useNavigate();
    const SignoutClick = () => {
        console.log("In the logout function and removing JWT Token....");
        localStorage.removeItem("JWTtoken");
        navigate('/')
    }
    
    return (
        <div>
            <header>
            {/* <Navbar bg="dark" data-bs-theme="dark" style={{"background-color":"darkgrey"}}>
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home"><li>Home</li></Nav.Link>
                    <Nav.Link href="#features"><li>Features</li></Nav.Link>
                    <Nav.Link href="#pricing"><li>Pricing</li></Nav.Link>
                </Nav>
                </Container>
            </Navbar> */}
            <ul>
                <li><a class="active" href="/profile">Home</a></li>
                <li><a href="/explore">Explore</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
                

                {(localStorage_data === null) ? <></>:
                <div>
                
                <button onClick={SignoutClick} style={{"float":"right", "margin-top":"0.6%","margin-right":"0.6%"}}>Sign out</button>
                    
                </div>}
                
            </ul>
         
                    </header>
        
        
        <br />
        <br />          
        <div>

            {props.children}
        </div>
        </div>
    );
}

