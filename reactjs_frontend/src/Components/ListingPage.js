import React, {useEffect, useState} from "react";
import {PageLayout} from "./PageLayout";
import "../App.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";


import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {useLocation} from 'react-router-dom';

function DisplayListing() {


    const navigate = useNavigate();
    const location = useLocation();

    const listing_id = location.state.id;
    console.log("In the ListingPage, the listing_id obtained is ---- " + listing_id);

    const [result, setResult] = useState(null);
    
    const [ListingData, setListingData] = useState([]);


    const localStorage_data_JWT = localStorage.getItem("JWTtoken");
    const localStorage_data_username = localStorage.getItem("Username");
    const localStorage_data_email = localStorage.getItem("Email");
    
    
    useEffect(()=>{


        async function fetchMyAPI() {
            console.log("CALLING THE API FROM EXPLORE LISTINGPage.JS");
            const ListingId = {ListingId: listing_id}
            const res = await axios.post("/api/get_listing_by_id", ListingId).then((response) => {
                const response_data_message = response.data.message;
                const response_data_listing = response.data.ListingData;
                setListingData(response_data_listing);
                console.log("After the API Call, in ListingPage.js the response is ---- " + response_data_message);
            }).catch((err)=>{
                console.log(err.message);
            });
          }
      
        fetchMyAPI()

        

    }, [])


    console.log("BELOW IS THE LISTING DATA IN LISTINGPAGE.JS");
    console.log(ListingData);
   

    return (
       <div>
        <PageLayout>
            <h1>THIS IS THE LISNTING PAGE, WHERE BASED ON THE ID OF THE LISTING, WE WILL GET ALL THE DATA AND DISPLAY IT...</h1>
            <div>
                {Object.entries(ListingData).map(([k,v], idx) => 
                    <h5>FOR KEY - {k}, we have value = {v}</h5>
                )}
            </div>
         </PageLayout>
           
       </div>
    );
}

export default DisplayListing;

