import { useState, Fragment, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Snackbar from '@mui/material/Snackbar';

function DeleteSelectedState(props) {

  const fetchURL = "http://localhost:9080/state/find/" + props.data.row.id;

  const updateURL = "http://localhost:9080/state/update"

  const [stateList, setStateList] = useState([]);
  const [open, setOpen] = useState(false);
  const [countryId, setCountryId] = useState('');
  const [countryName, setCountryName] = useState('');

  const token = sessionStorage.getItem("jwt");

  const onDeleteClick = (row) => {

    setCountryId(props.data.row.id);
    setCountryName(props.data.row.name);

    if (window.confirm("Are you sure to delete?")) {
      fetch(updateURL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': token },
        body: JSON.stringify({ id: row.id, name: row.name, countryId: countryId, countryName: countryName, deleted: 'Y' })
      }
      )
        .then(response => {
          if (response.ok) {
            fetchStates();
            setOpen(true);
          }
          else {
            alert('Something went wrong!');
          }
        })
        .catch(err => console.error(err))
    }
  }

  const fetchStates = () => {

    fetch(fetchURL, {
      headers: { 'Authorization': token }
    })
      .then(response => response.json())
      .then(data => setStateList(data))
      .catch(err => console.error(err));
  }

  const columns = [
    { field: 'name', headerName: 'Name', width: 200 },
    {
      field: 'delete', headerName: 'Delete', sortable: 'false', filterable: 'false', renderCell: (row) => { return (<button onClick={() => onDeleteClick(row)}>Delete</button>) }
    }
  ];

  useEffect(() => {
    fetchStates();

  }, []);

  return (
    <Fragment>
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid rows={stateList} columns={columns} getRowId={row => row.id}
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
export default DeleteSelectedState;