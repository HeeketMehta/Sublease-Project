import React, {useEffect, useState} from "react";
import {PageLayout} from "./PageLayout";
import "../App.css";
import axios from "axios";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";



function Signin() {


    const navigate = useNavigate();

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
 
    
    const handlePasswordChange = (event) => {
        event.preventDefault()
        setPassword(event.target.value);
    }

   

    const handleUserNameChange = (event) => {
        event.preventDefault()
        setUserName(event.target.value);
    }
    

    const HandleSubmit = async (event) =>{



        event.preventDefault()
        
        const userData = {UserName: username, Password: password}
        const res = await axios.post("/api/auth/signin", userData).then((response) => {
            const response_data = response.data.message
            const JWTtoken = response.data.jwt_token
            
            localStorage.setItem("JWTtoken", JWTtoken);

            
            console.log("RESPONSE FROM SIGNIN API IS --- " + JSON.stringify(response));
        

            console.log("The API Was hit successfully");
      

            navigate('/profile', {state: {username: username}});
        });


    }



    return (
        <div>
           <PageLayout>
            <center>
                <h1>Sign-In Page</h1>
    <Form onSubmit={HandleSubmit}>
        
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


        <button type='submit'>Submit</button>
    </Form>
    </center>
    </PageLayout>
    </div>
    );
}

export default Signin;