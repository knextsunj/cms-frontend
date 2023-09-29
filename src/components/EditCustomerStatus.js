import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import React, { useEffect, useState, Fragment } from "react";
import { Button, Link } from "@mui/material";

function EditCustomerStatus(props) {

    const [open, setOpen] = useState(false);
    const [customerStatus, setCustomerStatus] = useState({ name: '',id:''});

    const link = "http://localhost:8080/cms-0.1.0/customerstatus/update"

    const handleClickOpen = () => {
        setCustomerStatus({name:props.data.row.name,id:props.data.row.id})
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }


    const handleSave = () =>{
        props.updateCustomeStatusData(customerStatus, link);
        handleClose();
    }

    const handleChange = (event) => {
        setCustomerStatus({...customerStatus, [event.target.name]: event.target.value});
      }
      
    

    return( 
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>Edit</Button>
            <Dialog open = {open} onClose = {handleClose}>
                <DialogTitle>Edit Customer Status</DialogTitle>
            <DialogContent>
            Name: <input placeholder="Name" name="name" value={customerStatus.name} onChange={handleChange} /><br/>
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

export default EditCustomerStatus;