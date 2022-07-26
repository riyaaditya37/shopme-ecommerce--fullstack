import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Message from "./Message";
import Contact_us from "./Contact_us";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";


const promise = loadStripe("pk_test_51L5WBnSBSvEudgo72RVRDcoQgy6XQjUA4F5n8K4w8u5IcNKHBNQC0oTzHiagg6jfMQYegel8cLkZ915AtOvjfpIE00XHk8E4eb");
  


function App() {
  const [{}, dispatch] = useStateValue();
  
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });
  }, []);

  return (
    // BEM
    <Router>
      <div className="app">
        
        <Routes>
        <Route path="/login" element={[<Header />, <Login />]} />
        <Route path="/contact_us" element={[<Header />, <Contact_us />]} />
        <Route path="/message" element={[<Header />, <Message />]} />
        <Route path="/orders" element={[<Header />, <Orders />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path="/payment" element={[<Header />,<Elements stripe={promise}><Payment /></Elements>] }
           />
          <Route path="/" element={[<Header />, <Home />]}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;


// http://localhost:5001/shopaholic-7be4c/us-central1/api