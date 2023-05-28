import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import React, { useEffect, useState, Fragment } from "react";
import { Button, Link } from "@mui/material";

function EditAddressType(props) {

    const [open, setOpen] = useState(false);
    const [addressType, setAddressType] = useState({ name: '',id:''});

    const link = "http://localhost:9080/addresstype/update"

    const handleClickOpen = () => {
        setAddressType({name:props.data.row.name,id:props.data.row.id})
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }


    const handleSave = () =>{
        props.updateAddressTypeData(addressType, link);
        handleClose();
    }

    const handleChange = (event) => {
        setAddressType({...addressType, [event.target.name]: event.target.value});
      }
      
    

    return( 
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>Edit</Button>
            <Dialog open = {open} onClose = {handleClose}>
                <DialogTitle>Edit Address Type</DialogTitle>
            <DialogContent>
            Name: <input placeholder="Name" name="name" value={addressType.name} onChange={handleChange} /><br/>
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

export default EditAddressType;