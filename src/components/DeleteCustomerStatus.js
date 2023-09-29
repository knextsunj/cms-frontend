import { DataGrid } from '@mui/x-data-grid';
import Snackbar from '@mui/material/Snackbar';
import React, { useEffect, useState, Fragment } from "react";

function DeleteCustomerStatus(props) {

    const updateURL = "http://localhost:8080/cms-0.1.0/customerstatus/update"

    const fetchURL = "http://localhost:8080/cms-0.1.0/customerstatus/findAll"
    

    const [customerStatusList, setCustomerStatusList] = useState([]);
    const [open, setOpen] = useState(false);
    
    const token = sessionStorage.getItem("jwt");

    const onDelClick = (row) => {
        if (window.confirm("Are you sure to delete?")) {
          fetch(updateURL,{method:  'PUT',
          headers:{'Content-Type':'application/json','Authorization' : token},
          body:JSON.stringify({id:row.id,deleted:'Y'})}
          )
          .then(response => {
            if (response.ok) {
                fetchCustomerStatus();
              setOpen(true);
            }
            else {
              alert('Something went wrong!');
            }
          })
          .catch(err => console.error(err))
        }
      }

   const fetchCustomerStatus = () =>{
    fetch(fetchURL , {
      method:'GET',
      headers: { 'Authorization' : token,'Content-Type':'application/json' }
    })
    .then(response=>response.json())
    .then(data=>setCustomerStatusList(data))
    .catch(err=>console.error(err));
   }


    const columns = [
    {field: 'name', headerName: 'Name', width: 200},
    {field: 'delete',headerName:'Delete',sortable:'false',filterable:'false',renderCell:(row)=>
       {return( <button onClick={() => onDelClick(row)}>Delete</button> )} }
     ];




    useEffect(()=> {
        fetchCustomerStatus();
     
      },[]);

return(
    <Fragment>
      <div style={{ height: 500, width: '100%' }}> 
        <DataGrid rows={customerStatusList} columns={columns} getRowId={row =>row.id}
        />
      </div>
      <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={() => setOpen(false)}
          message="Customer Status deleted"
        />

    
    </Fragment>
)

}

export default DeleteCustomerStatus;