import Input from '@mui/material/Input';
import { useState } from "react";
import axios from "axios";


const AddState = (props) => {

    const baseURL = "http://localhost:8080/cms-0.1.0/state/save"

    const [stateName, setStateName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(baseURL, { name: stateName, countryId: props.data.row.id, countryName: props.data.row.name },config)
            .then(res => {
                console.log(res);
                console.log(res.data);
                if(res.data===true) {
                    alert("state registered successfully");
                  } 
            })
    }

    const token = sessionStorage.getItem("jwt");

   const config = {
        headers:{
          'Authorization' : token
        }
      };
      

    const handleChange = (e) => {
        // if (isNaN(e.target.value)) {
        //     alert("Please don't enter numbers");
        // }
        // else {
            setStateName(e.target.value);
        // }
    }

    return (
        <div>
            <h1>Add State</h1>
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
            <br />
            <br />
            <form onSubmit={handleSubmit}>
            <label>Name:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Input type="text" required="true" onChange={handleChange} />
                <br />
                <br />
                <br />
                <br />
                <br />
                <button type="submit">Save</button>
            </form>
        </div>
    )

}


export default AddState;