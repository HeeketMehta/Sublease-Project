import React, {useEffect, useState} from "react";
import "../App.css";
import {PageLayout} from "./PageLayout";
import {useLocation, useNavigate} from "react-router-dom";




function LandingPage() {



    const navigate = useNavigate();

    const localStorage_data = localStorage.getItem("JWTtoken");

    const SignupOnClick = () => {
        navigate('/signup');
    }


    const SigninOnClick = () => {
        navigate('/signin');
    }





    return (
        <div>
            <PageLayout>

                {(localStorage_data === null) ? <div>
                    <button onClick={SignupOnClick}>Register</button>
                    <button onClick={SigninOnClick}>Log In</button>
                </div>: 
                <h2>Already Signed In..</h2>}
                
           </PageLayout>
        </div>
    );
}

export default LandingPage;