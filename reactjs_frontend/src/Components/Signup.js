import React, {useEffect, useState} from "react";
import {PageLayout} from "./PageLayout";
import "../App.css";
import axios from "axios";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {Card, Container, Button} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


function Signup() {


    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [username, setUserName] = useState('');
    const [city, setCity] = useState('');
    const [statelocation, setStateLocation] = useState('');
    const [zipcode, setZipcode] = useState(0);
    const [streetaddress, setStreetAddress] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const handleEmailChange = (event) => {
        event.preventDefault()
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        event.preventDefault()
        setPassword(event.target.value);
    }

    const handleNameChange = (event) => {
        event.preventDefault()
        setName(event.target.value);
    }

    const handleUserNameChange = (event) => {
        event.preventDefault()
        setUserName(event.target.value);
    }
    const handleCityChange = (event) => {
        event.preventDefault()
        setCity(event.target.value);
    }
    const handleStateChange = (event) => {
        event.preventDefault()
        setStateLocation(event.target.value);
    }
    const handleZipcodeChange = (event) => {
        event.preventDefault()
        setZipcode(event.target.value);
    }
    const handleStreetAddressChange = (event) => {
        event.preventDefault()
        setStreetAddress(event.target.value);
    }


    const HandleSubmit = async (event) =>{



        event.preventDefault()
        console.log("The city is  -- "+ city);
        console.log("The state is  -- "+ statelocation);
        console.log("The name is  -- "+ name);
        const userData = {Name: name,UserName: username,Email: email, Password: password, City: city, State: statelocation, Zipcode: zipcode, Street: streetaddress}
        const res = await axios.post("/api/auth/signup", userData).then((response) => {
            const response_data = response.data.message
            const response_username = response.data.current_username
            const response_email = response.data.current_email
            const response_name = response.data.current_name
            const jwt = response.data.jwt_token;
            console.log("JWT Token is --- " + response.data.jwt_token);
            console.log("The API Was hit successfully");
            console.log("USERNAME IS --- " + response_username);

            localStorage.setItem("Username", response_username);
            localStorage.setItem("Email", response_email);
            localStorage.setItem("JWTtoken", jwt);
            navigate('/profile', {state: {username: response_username, email: response_email, name: response_name}});
        });


    }


    // City, State, Zipcode, Street 

    return (
        <div>
            <center>
            
                            <Form onSubmit={HandleSubmit} className="SignupForm">

                            
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintext" onChange={handleNameChange}>
                            <Form.Label column sm="2">
                                Name
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control placeholder="e.g. Jane Doe" className="forminput"/>
                            </Col>
                            </Form.Group>




                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" onChange={handleEmailChange}>
                            <Form.Label column sm="2">
                                Email
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control placeholder="email@example.com" />
                            </Col>
                            </Form.Group>



                            <Form.Group as={Row} className="mb-3" controlId="formPlaintext" onChange={handleUserNameChange}>
                            <Form.Label column sm="2">
                                Username
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control placeholder="e.g. Jane Doe" />
                            </Col>
                            </Form.Group>






                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword" onChange={handlePasswordChange}>
                            <Form.Label column sm="2">
                                Password
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="password" placeholder="Password" />
                            </Col>
                            </Form.Group>




                            <Form.Group as={Row} className="mb-3" controlId="formPlaintext" onChange={handleCityChange}>
                            <Form.Label column sm="2">
                                City
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="e.g. LA" />
                            </Col>
                            </Form.Group>


                            <Form.Group as={Row} className="mb-3" controlId="formPlaintext" onChange={handleStateChange}>
                            <Form.Label column sm="2">
                                State
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="e.g. California" />
                            </Col>
                            </Form.Group>




                            <Form.Group as={Row} className="mb-3" controlId="formPlaintext" onChange={handleZipcodeChange}>
                            <Form.Label column sm="2">
                                Zip Code
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="e.g. 92092" />
                            </Col>
                            </Form.Group>




                            <Form.Group as={Row} className="mb-3" controlId="formPlaintext" onChange={handleStreetAddressChange}>
                            <Form.Label column sm="2">
                                Street Address
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="e.g. 101 Sublease Project Drive" />
                            </Col>
                            </Form.Group>





                            <br />
                            <button type='submit' className="SubmitButton">Submit</button>
                            </Form>
            </center>
        </div>
        
           
   
    );
}

export default Signup;




