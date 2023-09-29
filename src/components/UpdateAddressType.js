import { DataGrid } from '@mui/x-data-grid';
import EditAddressType from './EditAddressType'; 
import React, { useEffect, useState, Fragment } from "react";

function UpdateAddressType(props) {

    const baseURL = "http://localhost:8080/cms-0.1.0/addresstype/findAll"
    

    const [addressTypeList, setAddressTypeList] = useState([]);

    const token = sessionStorage.getItem("jwt");

   const updateAddressTypeData = (customerStatus,link) =>{
    fetch(link,
        {
          method:'PUT',
          headers:{'Content-Type':'application/json','Authorization' : token},
          body:JSON.stringify(customerStatus)
        })
        .then(response=> {
           if(response.ok) {
            fetchAddressType()
           } 
           else {
            alert("Something went wrong.")
           }
        })
        .catch(err=>console.error(err));
   }

   const fetchAddressType = () =>{
    fetch(baseURL , {
      headers: { 'Authorization' : token,'Content-Type':'application/json' }
    })
    .then(response=>response.json())
    .then(data=>setAddressTypeList(data))
    .catch(err=>console.error(err));
   }


    const columns = [
    {field: 'name', headerName: 'Name', width: 200},
    {field: 'edit',headerName:'Edit',sortable:'false',filterable:'false',
    renderCell:(row)=>{ return(
        <EditAddressType  data={row} updateAddressTypeData={updateAddressTypeData} /> )
      }
    }
     ];

    useEffect(()=> {
        fetchAddressType();
     
      },[]);

return(
    <Fragment>
      <div style={{ height: 500, width: '100%' }}> 
        <DataGrid rows={addressTypeList} columns={columns} getRowId={row =>row.id} 
        />
      </div>
    </Fragment>
)

}

export default UpdateAddressType;