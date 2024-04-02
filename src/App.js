import { BrowserRouter, Route, Link } from "react-router-dom";

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/homescreen"
import Bookingscreen from "./screens/Bookingscreen";
import RegisterScreen from "./screens/Registerscreen"
import LoginScreen from "./screens/Loginscreen";
import ProfileScreen from "./screens/ProfileScreen";
import AdminScreen from "./screens/AdminScreen";
import LandingScreen from "./screens/LandingScreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/" exact component={LandingScreen} />
        <Route path="/home" exact component={Homescreen} />
        <Route
          path="/book/:roomid/:fromdate/:todate"
          exact
          component={Bookingscreen}
        />
        <Route path="/register" exact component={RegisterScreen} />
        <Route path="/login" exact component={LoginScreen} />
        <Route path="/profile" exact component={ProfileScreen} />
        <Route path="/bookings" exact component={ProfileScreen} />
        <Route path="/admin" exact component={AdminScreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
