import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState, Fragment } from "react";

const ShowAllCustomerStatus = (props) => {

  const baseURL = "http://localhost:8080/cms-0.1.0/customerstatus/findAll"

  const [customerStatusList, setCustomerStatusList] = useState([]);


  useEffect(() => {
    fetchCustomerStatus();

  }, []);

  const token = sessionStorage.getItem("jwt"); 

  const fetchCustomerStatus = () =>{
    fetch(baseURL , {
      method:'GET',
      headers: { 'Authorization' : token,'Content-Type':'application/json' }
    })
    .then(response=>response.json())
    .then(data=>setCustomerStatusList(data))
    .catch(err=>console.error(err));
   }

   const columns = [
   {field: 'name', headerName: 'Name', width: 200},
  //  {field: '',headerName:'',sortable:'false',filterable:'false' }
    ];


  return (

    <>
      <h2>Show All Customer Status</h2>
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
       <div style={{ height: 500, width: '100%', align: 'center' }}> 
        <DataGrid rows={customerStatusList} columns={columns} 
        disableSelectionOnClick={true}
        getRowId={row =>row.id}
        />
      </div>             

    </>
  );

}

export default ShowAllCustomerStatus;