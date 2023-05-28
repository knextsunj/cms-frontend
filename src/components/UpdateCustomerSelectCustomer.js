import Input from '@mui/material/Input';
import { useState, Fragment, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Snackbar from '@mui/material/Snackbar';
import UpdateSelectedCustomer from "./UpdateSelectedCustomer.js";

function UpdateCustomerSelectCustomer(props) {

    const fetchURL = "http://localhost:9080/customer/findAll";


    const [customerList, setCustomerList] = useState([]);
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(false);
    const [row, setRow] = useState();

    const token = sessionStorage.getItem("jwt");

    const onSelectClick = (row) => {

        setSelected(true);
        setRow(row);
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
            field: 'select', headerName: 'Select', sortable: 'false', filterable: 'false', renderCell: (row) => { return (<button onClick={() => onSelectClick(row)}>Select</button>) }
        }
    ];

    useEffect(() => {
        fetchCustomers();

    }, []);

    if (selected) {
        return (
            <>
                <UpdateSelectedCustomer data={row} />
            </>
        )
    }
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
                message="Customer selected"
            />
        </Fragment>
    )

}
export default UpdateCustomerSelectCustomer;