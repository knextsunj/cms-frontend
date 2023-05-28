import {Component} from 'react';
import axios from "axios";

class AddressType extends Component {

baseURL="http://localhost:9080/addresstype/save"

 constructor(props) {
    super(props);
    this.state = {name:''};
    this.state = {message:''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 }



 token = sessionStorage.getItem("jwt");

 config = {
  headers:{
    'Authorization' : this.token
  }
};

      handleChange(e) {
        this.setState({name:e.target.value})
    }

      handleSubmit = event => {
        console.log("name is:::: "+this.state.name);
        event.preventDefault();

        axios.post(this.baseURL, {name: this.state.name },this.config)
        .then(res=>{
          console.log(res);
          console.log(res.data);
          if(res.data==true) {
            alert("Address Type registered successfully");
          } 
        })
        .catch(err=> console.log(err))
     }

    render() {
    return(
          <>
          <h1>Add Address Type</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        <form onSubmit={this.handleSubmit}> 
           <label>Name:</label> 
           <input value={this.state.name} onChange={this.handleChange} type="text" />
           <p>You Entered: {this.state.name}</p>
           <button type="submit">Save</button>
        </form>    
        </>
    )
}
}
export default AddressType;