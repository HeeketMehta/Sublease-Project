import React, {useEffect, useState} from "react";
import "../App.css";
import {PageLayout} from "./PageLayout";
import axios from "axios";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {useLocation, useNavigate} from "react-router-dom";
import ListingPost from "./AddListing";
import DashboardComponent from "./Dashboard";
import { Button } from "react-bootstrap";




function ProfilePage() {



    const localStorage_data_JWT = localStorage.getItem("JWTtoken");
    const localStorage_data_username = localStorage.getItem("Username");
    const localStorage_data_email = localStorage.getItem("Email");

    
    const navigate = useNavigate();
    const location = useLocation();

    const HandleListingButton = () => {
        navigate('/add_listing');
    }

    // const username_var = location.state.username;

    return (
        <div>
            <PageLayout>

                {(localStorage_data_JWT==null) ? <h1>Not Signed In</h1> : 
                <div>
                {localStorage_data_username &&
                <div>
                <h1>Welcome {localStorage_data_username}</h1>
                
                    <DashboardComponent />    

                <Button onClick={HandleListingButton}>Add Listing</Button>
                    
                    
                </div>}
                </div>}
                
           </PageLayout>
        </div>
    );
}

export default ProfilePage;