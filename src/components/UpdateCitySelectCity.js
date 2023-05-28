import Input from '@mui/material/Input';
import { useState,Fragment,useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Snackbar from '@mui/material/Snackbar';
import UpdateSelectedCity from "./UpdateSelectedCity.js";

function UpdateCitySelectCity(props) {

    const fetchURL = "http://localhost:9080/city/find/"+props.data.row.id;


    const [cityList, setCityList] = useState([]);
    const [open, setOpen] = useState(false);
    const[selected,setSelected] = useState(false);
    const[row,setRow] = useState();
    const[stateId,setStateId] = useState('');
    const[stateName,setStateName] = useState('');
     
    const token = sessionStorage.getItem("jwt");

    const onSelectClick = (row) => {

        setSelected(true);
        setStateId(props.data.row.id);
        setStateName(props.data.row.name);
        setRow(row);
        }

        const fetchCities = () =>{
         
            fetch(fetchURL , {
              headers: { 'Authorization' : token }
            })
            .then(response=>response.json())
            .then(data=>setCityList(data))
            .catch(err=>console.error(err));
           }

           const columns = [
           {field: 'name', headerName: 'Name', width: 200},
           {field: 'select',headerName:'Select',sortable:'false',filterable:'false',renderCell:(row)=>
              {return( <button onClick={() => onSelectClick(row)}>Select</button> )} }
          ];

          useEffect(()=> {
            fetchCities();
         
          },[]);

          if(selected) {
            return (
              <>    
              <UpdateSelectedCity data={row} stateIdData = {stateId} stateNameData = {stateName}/>
              </>
              )
          }
          return(
            <Fragment>
              <div style={{ height: 500, width: '100%' }}> 
                <DataGrid rows={cityList} columns={columns} getRowId={row =>row.id}
                />
              </div>
              <Snackbar
                  open={open}
                  autoHideDuration={2000}
                  onClose={() => setOpen(false)}
                  message="State selected"
                />
            </Fragment>
        )

}
export default UpdateCitySelectCity;