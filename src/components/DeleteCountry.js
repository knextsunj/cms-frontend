import { DataGrid } from '@mui/x-data-grid';
import Snackbar from '@mui/material/Snackbar';
import React, { useEffect, useState, Fragment } from "react";

function DeleteCountry(props) {

    const updateURL = "http://localhost:8080/cms-0.1.0/country/update"

    const fetchURL = "http://localhost:8080/cms-0.1.0/country/findAll"
    

    const [countryList, setCountryList] = useState([]);
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
                fetchCountries();
              setOpen(true);
            }
            else {
              alert('Something went wrong!');
            }
          })
          .catch(err => console.error(err))
        }
      }

   const fetchCountries = () =>{
    fetch(fetchURL , {
      headers: { 'Authorization' : token }
    })
    .then(response=>response.json())
    .then(data=>setCountryList(data))
    .catch(err=>console.error(err));
   }


    const columns = [{field: 'serialNo', headerName: 'Sl No', width: 200},
    {field: 'name', headerName: 'Name', width: 200},
    {field: 'delete',headerName:'Delete',sortable:'false',filterable:'false',renderCell:(row)=>
       {return( <button onClick={() => onDelClick(row)}>Delete</button> )} }
     ];




    useEffect(()=> {
        fetchCountries();
     
      },[]);

return(
    <Fragment>
      <div style={{ height: 500, width: '100%' }}> 
        <DataGrid rows={countryList} columns={columns} getRowId={row =>row.id}
        
        // initialState={{
        //   pagination: {
        //     paginationModel: {
        //       pageSize: 5,
        //     },
        //   },
        // }}   pageSizeOptions={[5]}
        />
      </div>
      <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={() => setOpen(false)}
          message="Country deleted"
        />

    
    </Fragment>
)

}

export default DeleteCountry;