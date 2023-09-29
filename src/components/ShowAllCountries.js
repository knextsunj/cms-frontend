import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState, Fragment } from "react";
import "./css/showallcountries.css"

const ShowAllCountries = (props) => {

  const baseURL = "http://localhost:8080/cms-0.1.0/country/findAll"

  const [countryList, setCountryList] = useState([]);


  useEffect(() => {
    fetchCountries();

  }, []);

  const token = sessionStorage.getItem("jwt"); 

  const fetchCountries = () =>{
    fetch(baseURL , {
      headers: { 'Authorization' : token ,'Content-Type':'application/json'},
      method: 'GET'
    })
    .then(response=>response.json())
    .then(data=>setCountryList(data))
    .catch(err=>console.error(err));
   }

   const columns = [{field: 'serialNo', headerName: 'Sl No', width: 200},
   {field: 'name', headerName: 'Name', width: 200},
  //  {field: '',headerName:'',sortable:'false',filterable:'false' }
    ];


  return (

    <>
      <h2>Show All Countries</h2>
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
      {/* <div>
        <table>
          <thead>
            <tr>
              <th>Sl Number</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <th>Name</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             </tr>
            <tbody>
              {countryList.map((country) =>
                <tr key={country.serialNo}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <td>{country.serialNo}</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <td>{country.countryDTO.name}</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </tr>
              )}
            </tbody>
          </thead>
        </table>
      </div> */}

      <div style={{ height: 500, width: '100%', align: 'center' }}> 
        <DataGrid rows={countryList} columns={columns} 
        disableSelectionOnClick={true}
        getRowId={row =>row.serialNo}
        />
      </div>             

    </>
  );

}

export default ShowAllCountries;