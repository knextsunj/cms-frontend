import React, { useEffect, useState, Fragment } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import axios from "axios";
import "./css/customer.css";
import FormLabel from '@mui/material/FormLabel';


const Address = function (props) {


    const fetchAddressTypeUrl = "http://localhost:9080/addresstype/findAll"

    let fetchCityUrl = "http://localhost:9080/city/find/"

    const fetchCountryUrl = "http://localhost:9080/country/findAll"

    let fetchStateUrl = "http://localhost:9080/state/find/"

    const baseURL = "http://localhost:9080/address/save";

    const [countryList, setCountryList] = useState([]);
    const [open, setOpen] = useState(false);
    let [selectedCountryId, setSelectedCountryId] = useState();
    const [stateList, setStateList] = useState([]);
    let [selectedStateId, setSelectedStateId] = useState();
    const [cityList, setCityList] = useState([]);
    let [selectedCityId, setSelectedCityId] = useState();
    const [addressTypeList, setAddressTypeList] = useState([]);
    let [selectedAddressTypeId, setSelectedAddressTypeId] = useState();
    const [street, setStreet] = useState('')

    const [locality, setLocality] = useState('');

    const [area, setArea] = useState('');

    const [pincode, setPincode] = useState();

    const [countryFetched, setCountryFetched] = useState(false);

    const [addressTypeFetched, setAddressTypeFetched] = useState(false);

    const token = sessionStorage.getItem("jwt");

    const config = {
        headers: {
            'Authorization': token
        }
    };

    const fetchCountries = () => {
        fetch(fetchCountryUrl, {
            headers: { 'Authorization': token }
        })
            .then(response => response.json())
            .then(data => setCountryList(data))
            .catch(err => console.error(err));
    }

    const fetchAddressTypes = () => {
        fetch(fetchAddressTypeUrl, {
            headers: { 'Authorization': token }
        })
            .then(response => response.json())
            .then(data => setAddressTypeList(data))
            .catch(err => console.error(err));
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(baseURL, {
            street: street, locality: locality, area: area, pincode: pincode,
            cityId: selectedCityId, stateId: selectedStateId, countryId: selectedCountryId,
            addressTypeId: selectedAddressTypeId, customerId: props.data.row.id
        }, config)
            .then(res => {
                console.log(res);
                console.log(res.data);
                if (res.data === true) {
                    alert("address registered successfully");
                }
            })
    }


    useEffect(() => {
        if (countryFetched == false) {
            fetchCountries();
            setCountryFetched(true);
        }
        if (addressTypeFetched == false) {
            fetchAddressTypes();
            setAddressTypeFetched(true);
        }

    }, []);

    const handleCountryChange = (e) => {
        console.log(e.target.value)
        setSelectedCountryId(e.target.value);
        fetchStateUrl = fetchStateUrl + selectedCountryId;
        fetchStates();
        console.log("selected countryid is::");
        console.log(selectedCountryId)
    };

    const handleStateChange = (e) => {
        console.log(e.target.value)
        setSelectedStateId(e.target.value);
        fetchCityUrl = fetchCityUrl + selectedStateId;
        fetchCities();
        console.log(setSelectedStateId)
    };

    const handleCityChange = (e) => {
        console.log(e.target.value)
        setSelectedCityId(e.target.value);
        console.log(setSelectedCityId)
    };

    const handleStreetChange = (e) => {
        setStreet(e.target.value);
    }

    const handleLocalityChange = (e) => {
        setLocality(e.target.value);
    }

    const handleAreaChange = (e) => {
        setArea(e.target.value);
    }

    const handlePincodeChange = (e) => {
        setPincode(e.target.value);
    }

    const handleAddressTypeChange = (e) => {
        console.log(e.target.value)
        setSelectedAddressTypeId(e.target.value);
        console.log(selectedAddressTypeId)
    };


    const fetchStates = () => {

        fetch(fetchStateUrl, {
            headers: { 'Authorization': token }
        })
            .then(response => response.json())
            .then(data => setStateList(data))
            .catch(err => console.error(err));
    }

    const fetchCities = () => {

        fetch(fetchCityUrl, {
            headers: { 'Authorization': token }
        })
            .then(response => response.json())
            .then(data => setCityList(data))
            .catch(err => console.error(err));
    }


    return (
        <Fragment>
            <h1>Add Address</h1>
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
                                <label>Street:</label>
                            </td>
                            <td>
                                <Input type="text" onChange={handleStreetChange} />
                            </td>
                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td>
                                <label>Locality</label>
                            </td>
                            <td>
                                <Input type="text" onChange={handleLocalityChange} />
                            </td>
                        </tr>
                        <tr>  <td><br /></td>
                            <td>
                                <label>Area</label>
                            </td>
                            <td>
                                <Input type="text" onChange={handleAreaChange} />
                            </td>
                        </tr>
                        <tr>
                            <td><InputLabel className="select">Select Country</InputLabel></td>
                            <td>
                                <Select label="Country" value={selectedCountryId} onChange={handleCountryChange}>
                                    {countryList.map(country => {
                                        return (
                                            <MenuItem key={country.id} value={country.id}>
                                                {country.name}
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
                                <FormLabel id="demo-controlled-radio-buttons-group">Select State</FormLabel>
                            </td>
                            <td>
                                <Select label="State" value={selectedStateId} onChange={handleStateChange}>
                                    {stateList.map(state => {
                                        return (
                                            <MenuItem key={state.id} value={state.id}>
                                                {state.name}
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                            </td>
                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td>
                                <FormLabel>Select City</FormLabel>
                            </td>
                            <td>
                                <Select label="city" value={selectedCityId} onChange={handleCityChange}>
                                    {cityList.map(city => {
                                        return (
                                            <MenuItem key={city.id} value={city.id}>
                                                {city.name}
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                            </td>
                        </tr>
                        <br />
                        <br />
                        <tr>
                            <td>
                                <FormLabel>Pincode</FormLabel>
                            </td>
                            <td>
                                <Input value={pincode} type="text" onChange={handlePincodeChange} />
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
                        <tr><td><InputLabel className="select">Select Address Type</InputLabel></td>
                            <td>
                                <Select label="AddressType" value={selectedAddressTypeId} onChange={handleAddressTypeChange}>
                                    {addressTypeList.map(addressType => {
                                        return (
                                            <MenuItem key={addressType.id} value={{ name: addressType.name, id: addressType.id }}>
                                                {addressType.name}
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
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
export default Address;