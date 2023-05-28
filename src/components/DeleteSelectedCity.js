import { useState, Fragment, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Snackbar from '@mui/material/Snackbar';

function DeleteSelectedCity(props) {

  const fetchURL = "http://localhost:9080/city/find/" + props.data.row.id;

  const updateURL = "http://localhost:9080/city/update"

  const [cityList, setCityList] = useState([]);
  const [open, setOpen] = useState(false);
  const [stateId, setStateId] = useState('');
  const [stateName, setStateName] = useState('');

  const token = sessionStorage.getItem("jwt");

  const onDeleteClick = (row) => {

    setStateId(props.data.row.id);
    setStateName(props.data.row.name);

    if (window.confirm("Are you sure to delete?")) {
      fetch(updateURL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': token },
        body: JSON.stringify({ id: row.id, name: row.name, countryId: stateId, countryName: stateName, deleted: 'Y' })
      }
      )
        .then(response => {
          if (response.ok) {
            fetchCities();
            setOpen(true);
          }
          else {
            alert('Something went wrong!');
          }
        })
        .catch(err => console.error(err))
    }
  }

  const fetchCities = () => {

    fetch(fetchURL, {
      headers: { 'Authorization': token }
    })
      .then(response => response.json())
      .then(data => setCityList(data))
      .catch(err => console.error(err));
  }

  const columns = [
    { field: 'name', headerName: 'Name', width: 200 },
    {
      field: 'delete', headerName: 'Delete', sortable: 'false', filterable: 'false', renderCell: (row) => { return (<button onClick={() => onDeleteClick(row)}>Delete</button>) }
    }
  ];

  useEffect(() => {
    fetchCities();

  }, []);

  return (
    <Fragment>
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid rows={cityList} columns={columns} getRowId={row => row.id}
        />
      </div>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        message="State deleted"
      />
    </Fragment>
  )

}
export default DeleteSelectedCity;