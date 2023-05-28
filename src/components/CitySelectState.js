import Input from '@mui/material/Input';
import { useState,Fragment,useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Snackbar from '@mui/material/Snackbar';
import AddCity from "./AddCity";

function CitySelectState(props) {

    const fetchURL = "http://localhost:9080/state/find/"+props.data.row.id;


    const [stateList, setStateList] = useState([]);
    const [open, setOpen] = useState(false);
    const[selected,setSelected] = useState(false);
    const[row,setRow] = useState();
    const[countryId,setCountryId] = useState('');
    const[countryName,setCountryName] = useState('');
     
    const token = sessionStorage.getItem("jwt");

    const onSelectClick = (row) => {

        setSelected(true);
        setCountryId(props.data.row.id);
        setCountryName(props.data.row.name);
        setRow(row);
          // return(
            // <Redirect push to="/addState" data={row} />
          //   <AddState data={row} />
          
          // )
        }

        const fetchStates = () =>{
         
            fetch(fetchURL , {
              headers: { 'Authorization' : token }
            })
            .then(response=>response.json())
            .then(data=>setStateList(data))
            .catch(err=>console.error(err));
           }

           const columns = [
           {field: 'name', headerName: 'Name', width: 200},
           {field: 'select',headerName:'Select',sortable:'false',filterable:'false',renderCell:(row)=>
              {return( <button onClick={() => onSelectClick(row)}>Select</button> )} }
          ];

          useEffect(()=> {
            fetchStates();
         
          },[]);

          if(selected) {
            return (
              <>    
              <AddCity data={row} />
              </>
              )
          }
          return(
            <Fragment>
              <div style={{ height: 500, width: '100%' }}> 
                <DataGrid rows={stateList} columns={columns} getRowId={row =>row.id}
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
export default CitySelectState;