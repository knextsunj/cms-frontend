import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import React, { useEffect, useState, Fragment } from "react";
import { Button, Link } from "@mui/material";

function EditCountry(props) {

    const [open, setOpen] = useState(false);
    const [country, setCountry] = useState({ name: '',id:''});

    const link = "http://localhost:8080/cms-0.1.0/country/update"

    const handleClickOpen = () => {
        setCountry({name:props.data.row.name,id:props.data.row.id})
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }


    const handleSave = () =>{
        props.updateCountryData(country, link);
        handleClose();
    }

    const handleChange = (event) => {
        setCountry({...country, [event.target.name]: event.target.value});
      }
      
    

    return( 
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>Edit</Button>
            {/* <button onClick={handleClickOpen}>Edit</button> */}
            <Dialog open = {open} onClose = {handleClose}>
                <DialogTitle>Edit Country</DialogTitle>
            <DialogContent>
            Name: <input placeholder="Name" name="name" value={country.name} onChange={handleChange} /><br/>
            <br />
            </DialogContent>
            <DialogActions>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleClose}>Cancel</button>
            </DialogActions>
            </Dialog>
        </div>
    )
}

export default EditCountry;