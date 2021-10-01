import React, { Component } from "react";
import auth from "../services/authService"; //import obj
//import { logout } from "../services/authService"; //import function

class Logout extends React.Component {
  componentDidMount() {
    auth.logout();
    window.location = "/";
  }
  render() {
    return null;
  }
}

export default Logout;
