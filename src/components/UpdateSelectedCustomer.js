import Input from '@mui/material/Input';
import { useReducer, useEffect } from "react";
import axios from "axios";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import moment from "moment";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

const reducer = (state, action) => {
    switch (action.type) {
        case "handleChange":
            return {
                ...state,
                [action.field]: action.payload,


            };


        default:
            return state;
    }

}

const UpdateSelectedCustomer = (props) => {

    const baseURL = "http://localhost:8080/cms-0.1.0/customer/update"

    const fetchCustomerStatusUrl = "http://localhost:8080/cms-0.1.0/customerstatus/findAll";

    const initialState = {
        id: 0, name: props.data.row.name, dob: props.data.row.dob, customerStatus: props.data.row.customerStatusDescr,
        gender: props.data.row.gender, emailAddress: props.data.row.emailAddress, mobileNumber: props.data.row.mobileNo, customerStatusList: []
    };

    const [formState, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e) => {
        dispatch({ type: 'handleChange', field: e.target.name, payload: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let formattedDate = moment(formState.dob).format('DD/MM/YYYY');
        axios.put(baseURL, {
            id: props.data.row.id, name: formState.name, dob: formattedDate, gender: formState.gender,
            mobileNo: formState.mobileNumber, emailAddress: formState.emailAddress, customerStatusDescr: formState.customerStatus
        }, config)
            .then(res => {
                console.log(res);
                console.log(res.data);
                if (res.data === true) {
                    alert("customer updated successfully");
                }
            })
    }

    const token = sessionStorage.getItem("jwt");

    const config = {
        headers: {
            'Authorization': token
        }
    }

    const fetchCustomerStatus = () => {
        fetch(fetchCustomerStatusUrl, {
            headers: { 'Authorization': token }
        })
            .then(response => response.json())
            .then(data => dispatch({ type: 'handleChange', field: 'customerStatusList', payload: data }))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchCustomerStatus();

    }, []);


    return (
        <div>
            <h1>Update Selected Customer</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label>Name:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </td>
                            <td>
                                <Input name="name" value={formState.name} type="text" required={true} onChange={handleChange} />
                            </td>
                        </tr>
                        <br />
                        <br />
                        <br />
                        <tr>
                            <td>
                                <label>Date Of Birth:</label>
                            </td>
                            <td>
                                <LocalizationProvider dateAdapter={AdapterMoment}>
                                    <DemoContainer components={['DatePicker']}>
                                        <DemoItem>
                                            <DatePicker name="dob" value={formState.dob} 
                                            onChange={ newValue =>
                                                dispatch({ type: 'handleChange', field: 'dob', payload: newValue })
                                    }
                                            />
                                        </DemoItem>
                                    </DemoContainer>
                                </LocalizationProvider>
                            </td>
                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td>
                                <InputLabel className="select">Select Customer Status</InputLabel>
                                <Select defaultValue={formState.customerStatus} name="customerStatus" label="Customer Status" value={formState.customerStatus} onChange={handleChange}>
                                    <MenuItem value={formState.customerStatus}>
                                        {formState.customerStatus}
                                    </MenuItem>
                                    {formState.customerStatusList.map(customerStatus => {
                                        if (customerStatus.name != formState.customerStatus) {
                                            return (

                                                <MenuItem key={customerStatus.id} value={customerStatus.name}>
                                                    {customerStatus.name}
                                                </MenuItem>
                                            );
                                        }
                                    })}
                                </Select>
                            </td>
                        </tr>
                        <br />
                        <br />
                        <br />
                        <tr>
                            <td>
                                <FormLabel>Gender</FormLabel>
                            </td>
                            <td>
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    label="Gender"
                                    name="gender"
                                    value={formState.gender}
                                    onChange={handleChange}
                                    defaultValue={formState.gender}
                                >
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />

                                </RadioGroup>
                            </td>
                        </tr>
                        <br />
                        <br />
                        <br />
                        <tr>
                            <td>
                                <FormLabel>Email Address</FormLabel>
                            </td>
                            <td>
                                <Input name="emailAddress" value={formState.emailAddress} type="text" onChange={handleChange} />
                            </td>
                            <td>
                                <FormLabel>Mobile Number</FormLabel>
                            </td>
                            <td>
                                <Input name="mobileNumber" value={formState.mobileNumber} type="text" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <br />
                        <br />
                        <tr>
                            <td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </td>
                            <td>
                                <button type="submit">Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );


}

export default UpdateSelectedCustomer;