import React, {useEffect, useState} from "react";
import {PageLayout} from "./PageLayout";
import "../App.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import DashboardComponent from './Dashboard';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function ListingPost() {


    const navigate = useNavigate();

    const [date, setDate] = useState(null);

    const [title, setTitle] = useState('');
    const [rent, setRent] = useState('');
    const [bedrooms, setBedrooms] = useState(0);
    const [bathrooms, setBathrooms] = useState(0);
    const [zipcode, setZipcode] = useState(0);
    const [streetaddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [StateListing, setStateListing] = useState('');
    const [Description, setDescription] = useState('');

    const [result, setResult] = useState(null);
    
    


    const localStorage_data_JWT = localStorage.getItem("JWTtoken");
    const localStorage_data_username = localStorage.getItem("Username");
    const localStorage_data_email = localStorage.getItem("Email");

   
 
    const handleTitle = (event) => {
        event.preventDefault()
        setTitle(event.target.value);
    }

    const handleRent = (event) => {
        event.preventDefault()
        setRent(event.target.value);
    }

    const handleBedrooms = (event) => {
        event.preventDefault()
        setBedrooms(event.target.value);
    }

    const handleBathrooms = (event) => {
        event.preventDefault()
        setBathrooms(event.target.value);
    }

    const handleStreetAddressChange = (event) => {
        event.preventDefault()
        setStreetAddress(event.target.value);
    }
    const handleCityChange = (event) => {
        event.preventDefault()
        setCity(event.target.value);
    }
    const handleStateChange = (event) => {
        event.preventDefault()
        setStateListing(event.target.value);
    }
    const handleZipcodeChange = (event) => {
        event.preventDefault()
        setZipcode(event.target.value);
    }
    const handleDescriptionChange = (event) => {
        event.preventDefault()
        setDescription(event.target.value);
    }



    const handleSubmitListing = async (e) => {
        e.preventDefault();
        console.log("In the handleSubmitListing function of Lisitng.js");

        console.log("The no. of bathrooms - "+ bathrooms);
        console.log("Description - "+ Description);
        
        
        const ListingData = {username: localStorage_data_username, title: title, rent: rent, bathrooms: bathrooms, bedrooms: bedrooms, City: city, State: StateListing, Zipcode: zipcode, Street: streetaddress, Description: Description}


        const res = await axios.post("/api/listingpost", ListingData).then((response) => {
            const response_data = response.data.message
            console.log("The answer from /api/listingpost API is --- "+ response_data);
            setResult(response_data);
            navigate('/profile')
        });


    };

    

    return (
       <div>
        <h1>ADD YOUR LISTING HERE....</h1>
        <div className="ListingContainer">
            <Form  onSubmit={handleSubmitListing} className="ListingForm">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridTitle" onChange={handleTitle}>
                    <Form.Label>Listing Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter the title" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridRent" onChange={handleRent}>
                    <Form.Label>Rent</Form.Label>
                    <Form.Control type="text" placeholder="Enter the price" />
                    </Form.Group>
                </Row>



                <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState" onChange={handleBedrooms}>
                    <Form.Label>No. of Bedrooms</Form.Label>
                    <Form.Select defaultValue="1">
                        <option>Choose...</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5+</option>
                   
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState" onChange={handleBathrooms}>
                    <Form.Label>No. of Bathrooms</Form.Label>
                    <Form.Select defaultValue="1">
                        <option>Choose...</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5+</option>
                   
                    </Form.Select>
                </Form.Group>


                </Row>

                <Row className="mb-3">

                <Form.Group as={Col} controlId="formGridCity"  onChange={handleStreetAddressChange}>
                    <Form.Label>Street Address</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Row>


                <Row className="mb-3">

                    <Form.Group as={Col} controlId="formGridCity"  onChange={handleCityChange}>
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState"  onChange={handleStateChange}>
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>California</option>
                        <option>New York</option>
                        <option>New Jersey</option>
                        <option>Texas</option>
                        <option>Colorado</option>

                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip"  onChange={handleZipcodeChange}>
                    <Form.Label>Zipcode</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Row>

                {/* <Row className="mb-3">
                <Form.Label>Availability Date</Form.Label>
                    <DatePicker selected={date} onChange={(date) => setDate(date)} />
                    <DemoItem label="Desktop variant">
                        <DesktopDatePicker defaultValue={dayjs('2022-04-17')} />
                    </DemoItem>
                </Row> */}

                <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3}  onChange={handleDescriptionChange}/>
                    {/* <Form.Control 
                    as="textarea" 
                    rows={3}
                    value={value}
                    onChange={e => {
                        setValue(e.target.value);
                    }
                /> */}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
                <h2>{result}</h2>

            </div>

       </div>
    );
}

export default ListingPost;

