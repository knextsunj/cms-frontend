import { Component, Fragment } from "react";
import "./css/header.css"

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
      <Fragment>     
      <h1 className="h2">Contact Management System</h1>
      </Fragment> 
      );  
    }
}

export default Header;