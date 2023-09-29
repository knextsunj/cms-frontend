import { DataGrid } from '@mui/x-data-grid';
import EditCustomerStatus from './EditCustomerStatus'; 
import React, { useEffect, useState, Fragment } from "react";

function UpdateCustomerStatus(props) {

    const baseURL = "http://localhost:8080/cms-0.1.0/customerstatus/findAll"
    

    const [customerStatusList, setcustomerStatusList] = useState([]);

    const token = sessionStorage.getItem("jwt");

   const updateCustomeStatusData = (customerStatus,link) =>{
    fetch(link,
        {
          method:'PUT',
          headers:{'Content-Type':'application/json','Authorization' : token},
          body:JSON.stringify(customerStatus)
        })
        .then(response=> {
           if(response.ok) {
            fetchCustomerStatus()
           } 
           else {
            alert("Something went wrong.")
           }
        })
        .catch(err=>console.error(err));
   }

   const fetchCustomerStatus = () =>{
    fetch(baseURL , {
      method:'GET',
      headers: { 'Authorization' : token,'Content-Type':'application/json' }
    })
    .then(response=>response.json())
    .then(data=>setcustomerStatusList(data))
    .catch(err=>console.error(err));
   }


    const columns = [
    {field: 'name', headerName: 'Name', width: 200},
    {field: 'edit',headerName:'Edit',sortable:'false',filterable:'false',
    renderCell:(row)=>{ return(
        <EditCustomerStatus  data={row} updateCustomeStatusData={updateCustomeStatusData} /> )
      }
    }
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
    </Fragment>
)

}

export default UpdateCustomerStatus;