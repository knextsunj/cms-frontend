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

const UpdateSelectedState = (props) => {
    const baseURL = "http://localhost:8080/cms-0.1.0/state/update"

    const initialState = {id:0,name:'',deleted:'',countryId:'',countryName:''};

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e) => {
            dispatch({type:'handleChange',payload:e.target.value,key:'name'});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.put(baseURL, { id:props.data.row.id, name: state.name, countryId: props.countryIdData, countryName: props.countryNameData },config)
            .then(res => {
                console.log(res);
                console.log(res.data);
                if(res.data===true) {
                    alert("state updated successfully");
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
            <h1>Update Selected State</h1>
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
            <label>Current Name:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Input type="text" value = {props.data.row.name} disabled={true} />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <label>Enter New Name:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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

export default UpdateSelectedState;