import { Component } from "react";
import { BrowserRouter as Router, Route, NavLink, Routes, Switch } from 'react-router-dom';
import ShowAllCountries from './ShowAllCountries';
import PageNotFound from './PageNotFound'
import Country from './Country';
import UpdateCountry from './UpdateCountry';
import DeleteCountry from './DeleteCountry';
import State from './State';
import Home from './Home';
import AddState from "./AddState";
import UpdateStateSelectCountry from "./UpdateStateSelectCountry";
import UpdateStateSelectState from './UpdateStateSelectState';
import UpdateSelectedState from './UpdateSelectedState';
import DeleteStateSelectCountry from './DeleteStateSelectCountry';
import DeleteSelectedState from './DeleteSelectedState';
import ShowAllStatesSelectCountry from './ShowAllStatesSelectCountry';
import ShowAllStatesSelectedCountry from './ShowAllStatesSelectedCountry';
import CitySelectCountry from "./CitySelectCountry";
import CitySelectState from './CitySelectState';
import AddCity from './AddCity';
import UpdateCitySelectCountry from "./UpdateCitySelectCountry";
import UpdateCitySelectState from './UpdateCitySelectState';
import UpdateCitySelectCity from './UpdateCitySelectCity';
import UpdateSelectedCity from './UpdateSelectedCity';
import DeleteCitySelectCountry from './DeleteCitySelectCountry';
import DeleteCitySelectState from './DeleteCitySelectState';
import DeleteSelectedCity from './DeleteSelectedCity';
import ShowAllCitiesSelectCountry from './ShowAllCitiesSelectCountry';
import ShowAllCitiesSelectState from './ShowAllCitiesSelectState';
import ShowAllCities from './ShowAllCities';
import CustomerStatus from "./CustomerStatus";
import UpdateCustomerStatus from './UpdateCustomerStatus';
import DeleteCustomerStatus from './DeleteCustomerStatus';
import ShowAllCustomerStatus from './ShowAllCustomerStatus';
import AddressType from "./AddressType";
import UpdateAddressType from './UpdateAddressType';
import DeleteAddressType from './DeleteAddressType';
import Customer from './Customer';
import UpdateCustomerSelectCustomer from './UpdateCustomerSelectCustomer';
import UpdateSelectedCustomer from './UpdateSelectedCustomer';
import DeleteCustomer from './DeleteCustomer';
import ShowAllCustomers from './ShowAllCustomers';

class Menu extends Component {

   constructor(props) {
      super(props);
   }

   render() {
      return (
         <Router>
            <div>
               <NavLink exact to="/">Home</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <NavLink exact to="/country" >Add Country</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <NavLink exact to="/showAllCountries" >Show All Countries</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <NavLink exact to="/updateCountry" >Update Country</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <NavLink exact to="/deleteCountry" >Delete Country</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <NavLink exact to="/state">Add State</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <NavLink exact to="/updateState">Update State</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <NavLink exact to="/deleteState">Delete State</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <NavLink exact to="/showAllStates">Show All States</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <NavLink exact to="/city">Add City</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <NavLink exact to="/updateCity">Update City</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <NavLink exact to="/deleteCity">Delete City</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <NavLink exact to="/showAllCities">Show All Cities</NavLink>
               <br />
               <br />
               <br />
               <NavLink exact to="/customerStatus" >Add Customer Status</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <NavLink exact to="/updateCustomerStatus" >Update Customer Status</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <NavLink exact to="/deleteCustomerStatus" >Delete Customer Status</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <NavLink exact to="/showAllCustomerStatus">Show All Customer Status</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <NavLink exact to="/addressType" >Add Address Type</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <NavLink exact to="/updateAddressType" >Update Address Type</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <NavLink exact to="/deleteAddressType" >Delete Address Type</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <NavLink exact to="/customer" >Add Customer</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <NavLink exact to="/updateCustomer" >Update Customer</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <NavLink exact to="/deleteCustomer" >Delete Customer</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <NavLink exact to="/showAllCustomers">Show All Customers</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


               <Switch>
                  <Route exact path="/">
                     <Home />
                  </Route>
                  <Route exact path="/country">
                     <Country />
                  </Route>
                  <Route exact path="/updateCountry">
                     <UpdateCountry />
                  </Route>
                  <Route exact path="/deleteCountry">
                     <DeleteCountry />
                  </Route>
                  <Route exact path="/showAllCountries">
                     <ShowAllCountries />
                  </Route>
                  <Route exact path="/state">
                     <State />
                  </Route>
                  <Route exact path="/addState">
                     <AddState />
                  </Route>
                  <Route exact path="/updateState">
                     <UpdateStateSelectCountry />
                  </Route>
                  <Route exact path="/updateStateShowAllStates">
                     <UpdateStateSelectState />
                  </Route>
                  <Route exact path="/updateSelectedState">
                     <UpdateSelectedState />
                  </Route>
                  <Route exact path="/deleteState">
                     <DeleteStateSelectCountry />
                  </Route>
                  <Route exact path="/deleteSelectedState">
                     <DeleteSelectedState />
                  </Route>
                  <Route exact path="/showAllStates">
                     <ShowAllStatesSelectCountry />
                  </Route>
                  <Route exact path="/showAllStatesSelectedCountry">
                     <ShowAllStatesSelectedCountry />
                  </Route>
                  <Route exact path="/city">
                     <CitySelectCountry />
                  </Route>
                  <Route exact path="/citySelectState">
                     <CitySelectState />
                  </Route>
                  <Route exact path="/addCity">
                     <AddCity />
                  </Route>
                  <Route exact path="/updateCity">
                     <UpdateCitySelectCountry />
                  </Route>
                  <Route exact path="/updateCitySelectState">
                     <UpdateCitySelectState />
                  </Route>
                  <Route exact path="/updateCitySelectCity">
                     <UpdateCitySelectCity />
                  </Route>
                  <Route exact path="/UpdateSelectedCity">
                     <UpdateSelectedCity />
                  </Route>      
                  <Route exact path="/deleteCity">
                     <DeleteCitySelectCountry />
                  </Route>  
                  <Route exact path="/deleteCitySelectState">
                     <DeleteCitySelectState />
                  </Route>   
                  <Route exact path="/deleteSelectedCity">
                     <DeleteSelectedCity />
                  </Route> 
                  <Route exact path="/showAllCities">
                     <ShowAllCitiesSelectCountry />
                  </Route>
                  <Route exact path="/showAllCitiesSelectState">
                     <ShowAllCitiesSelectState />
                  </Route>  
                  <Route exact path="/showAllCitiesSelectedState">
                     <ShowAllCities />
                  </Route>        
                  <Route exact path="/customerStatus">
                     <CustomerStatus />
                  </Route>
                  <Route exact path="/updateCustomerStatus">
                     <UpdateCustomerStatus />
                  </Route>
                  <Route exact path="/deleteCustomerStatus">
                     <DeleteCustomerStatus />
                  </Route>
                  <Route exact path="/showAllCustomerStatus">
                     <ShowAllCustomerStatus />
                  </Route>
                  <Route exact path="/addressType">
                     <AddressType />
                  </Route>
                  <Route exact path="/updateAddressType">
                     <UpdateAddressType />
                  </Route>
                  <Route exact path="/deleteAddressType">
                     <DeleteAddressType />
                  </Route>
                  <Route exact path="/customer">
                     <Customer />
                  </Route>
                  <Route exact path="/updateCustomer">
                     <UpdateCustomerSelectCustomer />
                  </Route>
                  <Route exact path="/updateSelectedCustomer">
                     <UpdateSelectedCustomer />
                  </Route>
                  <Route exact path="/deleteCustomer">
                     <DeleteCustomer />
                  </Route>
                  <Route exact path="/showAllCustomers">
                     <ShowAllCustomers />
                  </Route>
                  <Route><PageNotFound /></Route>
               </Switch>
            </div>
         </Router>
      );

   }

}

export default Menu;