import { useState, Fragment, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Snackbar from '@mui/material/Snackbar';

function DeleteCustomer(props) {

    const fetchURL = "http://localhost:9080/customer/findAll";

    const updateURL = "http://localhost:9080/customer/update"



    const [customerList, setCustomerList] = useState([]);
    const [open, setOpen] = useState(false);


    const token = sessionStorage.getItem("jwt");

    // const onDelClick = (row) => {

    //     setSelected(true);
    //     setRow(row);
    // }

    const onDelClick = (row) => {
        if (window.confirm("Are you sure to delete?")) {
          fetch(updateURL,{method:  'PUT',
          headers:{'Content-Type':'application/json','Authorization' : token},
          body:JSON.stringify({id:row.id,deleted:'Y'})}
          )
          .then(response => {
            if (response.ok) {
                fetchCustomers();
              setOpen(true);
            }
            else {
              alert('Something went wrong!');
            }
          })
          .catch(err => console.error(err))
        }
      }

    const fetchCustomers = () => {

        fetch(fetchURL, {
            headers: { 'Authorization': token }
        })
            .then(response => response.json())
            .then(data => setCustomerList(data))
            .catch(err => console.error(err));
    }

    const columns = [
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'dob', headerName: 'Date Of Birth', width: 200 },
        { field: 'gender', headerName: 'Gender', width: 70 },
        { field: 'mobileNo', headerName: 'Mobile Number', width: 200 },
        { field: 'emailAddress', headerName: 'Email Address', width: 200 },
        { field: 'customerStatusDescr', headerName: 'Customer Status', width: 200 },
        {
            field: 'delete', headerName: 'Delete', sortable: 'false', filterable: 'false', renderCell: (row) => { return (<button onClick={() => onDelClick(row)}>Delete</button>) }
        }
    ];

    useEffect(() => {
        fetchCustomers();

    }, []);

    return (
        <Fragment>
            <div style={{ height: 500, width: '100%' }}>
                <DataGrid rows={customerList} columns={columns} getRowId={row => row.id}
                />
            </div>
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={() => setOpen(false)}
                message="Customer deleted"
            />
        </Fragment>
    )

}
export default DeleteCustomer;