import React, { useEffect, useState, Fragment } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import axios from "axios";
import "./css/customer.css";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import moment from "moment";


const Customer = function (props) {


    const fetchCustomerStatusUrl = "http://localhost:9080/customerstatus/findAll";

    const baseURL = "http://localhost:9080/customer/save";

    const [customerStatusList, setCustomerStatusList] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedCustomerStatus, setSelectedCustomerStatus] = useState('');
    const [name, setName] = useState('')

    const [dob, setDob] = useState(null);
    const [gender, setGender] = useState('male');

    const [emailAddress, setEmailAddress] = useState('');

    const [mobileNumber, setMobileNumber] = useState();

    const token = sessionStorage.getItem("jwt");

    const fetchCustomerStatus = () => {
        fetch(fetchCustomerStatusUrl, {
            headers: { 'Authorization': token }
        })
            .then(response => response.json())
            .then(data => setCustomerStatusList(data))
            .catch(err => console.error(err));
    }

    const config = {
        headers: {
            'Authorization': token
        }
    }

    const handleSubmit = (e) => {
        console.log(dob);
         let formattedDate = moment(dob).format('DD/MM/YYYY');
        e.preventDefault();
        console.log(formattedDate);
        axios.post(baseURL, {
            name: name, dob: formattedDate, gender: gender, mobileNo: mobileNumber,
            emailAddress: emailAddress, customerStatusDescr: selectedCustomerStatus
        }, config)
            .then(res => {
                console.log(res);
                console.log(res.data);
                if (res.data === true) {
                    alert("customer registered successfully");
                }
            })
    }


    useEffect(() => {
        fetchCustomerStatus();

    }, []);

    const handleChange = (e) => {
        console.log(e.target.value)
        setSelectedCustomerStatus(e.target.value);
        console.log(selectedCustomerStatus)
    };


    const handleNameChange = (e) => {
        setName(e.target.value);
    }


    const handleEmailAddressChange = (e) => {
        setEmailAddress(e.target.value);
    }


    const handleGenderChange = (e) => {
        setGender(e.target.value);
        console.log(gender);
    }

    const handleMobileNumberChange = (e) => {
        setMobileNumber(e.target.value);
    }

    return (
        <Fragment>
            <h1>Add Customer</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr style={{ textAlign: "center" }}>
                            <td>
                                <label>Name:</label>
                            </td>
                            <td>
                                <Input type="text" onChange={handleNameChange} />
                            </td>
                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td>
                                <label>Date Of Birth:</label>
                            </td>
                            <td>
                                <LocalizationProvider dateAdapter={AdapterMoment}>
                                    <DemoContainer components={['DatePicker']}>
                                        <DemoItem>
                                            <DatePicker value={dob} onChange={newValue =>
                                                setDob(newValue)

                                            }
                                            />
                                        </DemoItem>
                                    </DemoContainer>
                                </LocalizationProvider>

                            </td>
                        </tr>
                        <tr>
                            <td><br /></td>
                        </tr>
                        <tr>
                            <td><InputLabel className="select">Select Customer Status</InputLabel></td>
                            <td>
                                <Select label="Customer Status" value={selectedCustomerStatus} onChange={handleChange}>
                                    {customerStatusList.map(customerStatus => {
                                        return (
                                            <MenuItem key={customerStatus.id} value={customerStatus.name}>
                                                {customerStatus.name}
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                            </td>
                        </tr>
                        <tr />
                        <tr />
                        <tr />
                        <tr />
                        <tr />
                        <tr />
                        <tr />
                        <tr />
                        <tr />
                        <tr />
                        <tr />
                        <tr />
                        <tr />
                        <tr />
                        <tr />
                        <tr />
                        <tr />
                        <tr />
                        <tr />
                        <tr />
                        <tr>
                            <td>
                                <br />
                                <br />
                                <br />
                                <br />
                                <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                            </td>
                            <td>
                                <br />
                                <br />
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={gender}
                                    onChange={handleGenderChange}
                                >
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />

                                </RadioGroup>
                            </td>
                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td>
                                <FormLabel>Email Address</FormLabel>
                            </td>
                            <td>
                                <Input type="text" onChange={handleEmailAddressChange} />
                            </td>
                        </tr>
                        <br />
                        <br />
                        <tr>
                            <td>
                                <FormLabel>Mobile Number</FormLabel>
                            </td>
                            <td>
                                <Input value={mobileNumber} type="text" onChange={handleMobileNumberChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                            </td>
                        </tr>
                        <tr><td>
                            <button type="submit">Save</button>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </form>

        </Fragment>

    )

}
export default Customer;