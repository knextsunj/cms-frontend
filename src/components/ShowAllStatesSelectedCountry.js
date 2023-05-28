import { useState, Fragment, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';

function ShowAllStatesSelectedCountry(props) {

  const fetchURL = "http://localhost:9080/state/find/" + props.data.row.id;

  const [stateList, setStateList] = useState([]);

  const token = sessionStorage.getItem("jwt");

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
    </Fragment>
  )

}
export default ShowAllStatesSelectedCountry;