import { DataGrid } from '@mui/x-data-grid';
import EditCountry from './EditCountry'; 
import React, { useEffect, useState, Fragment } from "react";
import { Button, Link } from "@mui/material";

function UpdateCountry(props) {

    const baseURL = "http://localhost:8080/cms-0.1.0/country/findAll"
    

    const [countryList, setCountryList] = useState([]);

    const token = sessionStorage.getItem("jwt");

   const updateCountryData = (country,link) =>{
    fetch(link,
        {
          method:'PUT',
          headers:{'Content-Type':'application/json','Authorization' : token},
          body:JSON.stringify(country)
        })
        .then(response=> {
           if(response.ok) {
            fetchCountries()
           } 
           else {
            alert("Something went wrong.")
           }
        })
        .catch(err=>console.error(err));
   }

   const fetchCountries = () =>{
    fetch(baseURL , {
      method:'GET',
      headers: { 'Authorization' : token,'Content-Type':'application/json' }
    })
    .then(response=>response.json())
    .then(data=>setCountryList(data))
    .catch(err=>console.error(err));
   }


    const columns = [{field: 'serialNo', headerName: 'Sl No', width: 200},
    {field: 'name', headerName: 'Name', width: 200},
    {field: 'edit',headerName:'Edit',sortable:'false',filterable:'false',
    renderCell:(row)=>{ return(
        <EditCountry  data={row} updateCountryData={updateCountryData} /> )
    // <Button variant="contained" color="primary">Edit</Button>)}
      }
    }
     ];




    useEffect(()=> {
        fetchCountries();
     
      },[]);

return(
    <Fragment>
      <div style={{ height: 500, width: '100%' }}> 
        <DataGrid rows={countryList} columns={columns} getRowId={row =>row.serialNo} 
        // initialState={{
        //   pagination: {
        //     paginationModel: {
        //       pageSize: 5,
        //     },
        //   },
        // }}   pageSizeOptions={[5]}
        />
      </div>


    
    </Fragment>
)

}

export default UpdateCountry;