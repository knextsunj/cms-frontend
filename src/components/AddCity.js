import Input from '@mui/material/Input';
import { useReducer } from "react";
import axios from "axios";

const reducer=(state,action)=>{
switch(action.type) {
    case "handleChange":
    return {
        ...state,
        [action.key]: action.payload,
    }    
    
}

}

const AddCity = (props) => {
    const baseURL = "http://localhost:8080/cms-0.1.0/city/save"

    const initialState = {id:0,name:'',deleted:'',countryId:'',countryName:''};

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e) => {
            dispatch({type:'handleChange',payload:e.target.value,key:'name'});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post(baseURL, { name: state.name, stateId: props.data.row.id, stateName: props.data.row.id },config)
            .then(res => {
                console.log(res);
                console.log(res.data);
                if(res.data===true) {
                    alert("city added successfully");
                  } 
            })
    }

    const token = sessionStorage.getItem("jwt");

    const config = {
         headers:{
           'Authorization' : token
         }
       }

       return (
        <div>
            <h1>Add City</h1>
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
            <label>Enter Name:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Input type="text" required={true} onChange={handleChange} />
                <br />
                <br />
                <br />
                <br />
                <br />
                <button type="submit">Save</button>
            </form>
        </div>
    );
       
    
}

export default AddCity;