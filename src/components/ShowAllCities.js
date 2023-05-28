import { useState,Fragment,useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Snackbar from '@mui/material/Snackbar';

function ShowAllCities(props) {

    const fetchURL = "http://localhost:9080/city/find/"+props.data.row.id;


    const [cityList, setCityList] = useState([]);
    const [open, setOpen] = useState(false);
    const[selected,setSelected] = useState(false);
    const[row,setRow] = useState();
     
    const token = sessionStorage.getItem("jwt");

    const onSelectClick = (row) => {

        setSelected(true);
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
                  message="City selected"
                />
            </Fragment>
        )

}
export default ShowAllCities;