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


function Explore() {


    const navigate = useNavigate();

    const [result, setResult] = useState(null);
    
    const [ListingData, setListingData] = useState([]);


    const localStorage_data_JWT = localStorage.getItem("JWTtoken");
    const localStorage_data_username = localStorage.getItem("Username");
    const localStorage_data_email = localStorage.getItem("Email");
    
    useEffect(()=>{


        async function fetchMyAPI() {
            console.log("CALLING THE API FROM EXPLORE LISTING.JS");
            const UserData = {username: localStorage_data_username}
            const res = await axios.get("/api/get_all_listings").then((response) => {
                const response_data_message = response.data.message;
                const response_data_listing = response.data.ListingData;
                setListingData(response_data_listing);
                console.log("After the API Call, in ExploreListing.js the response is ---- " + response_data_message)
            }).catch((err)=>{
                console.log(err.message);
            });
          }
      
        fetchMyAPI()

        

    }, [])



    const handleCardLinkClick = (listing_id) => {
        console.log("In the handleCardLinkClick, the listing id is --- " +listing_id);
        console.log("In the card link click fucntion...");
        navigate('/display_listing', {state: {id: listing_id}});

    }

    console.log("THE ListingData is as belows");
    console.log(ListingData);
    Object.values(ListingData).map(data => {
            Object.entries(data).map(([k,v],v1)=> {
                console.log("IN THE MAPP....");
            console.log("For key - " + k + " we have value = " + v);
            })
        })
   

    return (
       <div>
        <PageLayout>
        
            <h1>Explore Page</h1>
            {/* {ListingData && <h1>it has data {ListingData.map(data=><p>{data.listing_title}</p>)}.....</h1>} */}



            <div>
            {/* {
            Object.values(ListingData).map(data=>
                
                Object.entries(data).map(([k,v], idx)=>
                
                <h5>Key = {k}, Value = {v}</h5>)
            
            
        )   
            } */}


            {
                ListingData && 
                
                <div>
                    <div class="row" style={{"display": "flex", "padding-top":"2%"}}>
                    {ListingData.map(data=>
                    
                        <div class='col-4'> 
                        <Card style={{ width: '18rem' }} onClick={() => {handleCardLinkClick(data.listing_id)}}>
                                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                                <Card.Body>
                                    <Card.Title>{data.listing_title}</Card.Title>
                                    <Card.Text>
                                        {data.listing_description}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Rent - ${data.listing_rent_amount}</ListGroup.Item>
                                    <ListGroup.Item>No. Bathrooms - {data.listing_no_of_bathrooms}</ListGroup.Item>
                                    <ListGroup.Item>No. Bedrooms - {data.listing_no_of_bedrooms}</ListGroup.Item>
                                    <ListGroup.Item>User Name - {data.username}</ListGroup.Item>
                                    <ListGroup.Item>Listing ID (DELETE LATER) - {data.listing_id}</ListGroup.Item>
                                </ListGroup>
                                <Card.Body>

                                </Card.Body>
                        </Card>
                        </div>
                    
                        
                    )}
                    </div>
                </div>
            }
         </div>

         </PageLayout>
           
       </div>
    );
}

export default Explore;

