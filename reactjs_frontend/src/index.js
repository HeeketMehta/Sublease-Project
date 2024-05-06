import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import ProfilePage from './Components/ProfilePage';
import LandingPage from './Components/LandingPage';
import ListingPost from './Components/AddListing';
import Explore from './Components/ExploreListing';
import DisplayListing from './Components/ListingPage';


const root = ReactDOM.createRoot(document.getElementById('root'));





root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/add_listing" element={<ListingPost />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/display_listing" element={<DisplayListing />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
