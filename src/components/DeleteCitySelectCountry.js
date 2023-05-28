import { DataGrid } from '@mui/x-data-grid';
import Snackbar from '@mui/material/Snackbar';
import { useState, useEffect, Fragment} from "react";
import DeleteCitySelectState from './DeleteCitySelectState';

function DeleteCitySelectCountry(props) {

    const fetchURL = "http://localhost:9080/country/findAll"
    

    const [countryList, setCountryList] = useState([]);
    const [open, setOpen] = useState(false);
    const[selected,setSelected] = useState(false);
    const[row,setRow] = useState();
     
    const token = sessionStorage.getItem("jwt");



    const onSelectClick = (row) => {

      setSelected(true);
      setRow(row);
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
    {field: 'select',headerName:'Select',sortable:'false',filterable:'false',renderCell:(row)=>
       {return( <button onClick={() => onSelectClick(row)}>Select</button> )} }
   ];




    useEffect(()=> {
        fetchCountries();
     
      },[]);

if(selected) {
        return (
          <>    
          <DeleteCitySelectState data={row} />
          </>
          )
      }
return(
    <Fragment>
      <div style={{ height: 500, width: '100%' }}> 
        <DataGrid rows={countryList} columns={columns} getRowId={row =>row.id}
        />
      </div>
      <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={() => setOpen(false)}
          message="Country selected"
        />

    
    </Fragment>
)
}

export default DeleteCitySelectCountry;