import React, {useEffect, useState} from "react";
import {PageLayout} from "./Components/PageLayout";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Signup from "./Components/Signup";




function App() {
  const [data, setData] = useState(null);

  const callAPI = async() =>{
      console.log("in call api function");
      // const userData = {Name: 'Lewis', Email:'LewisHamilton@gmail.com'}
      const res = await axios.get("/api/try").then((response) => {
        const response_data = response.data.message
        console.log("Response from the Setup API Call --- " + response);
        setData(response_data);
      });
    }



  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div className="App">
      <PageLayout>
      <body>
        <h4>Signup Form is Below</h4>
        <Signup />
      </body>
    </PageLayout>
    </div>
  );
}

export default App;