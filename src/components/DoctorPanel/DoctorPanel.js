import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Menu from '../Menu/Menu';
import DashBoard from '../DashBoard/DashBoard';
import AppointmentList from '../AppointmentList/AppointmentList';
import './DoctorPanel.css';

const DoctorPanel = () => {
    return (
        <div className="doctor-panel">
            <Router>
                <Menu></Menu>
                <Switch>
                    <Route path='/doctorPanel/dashboard'>
                        <DashBoard></DashBoard>
                    </Route>
                    <Route path='/doctorPanel/appointmentList'>
                        <AppointmentList></AppointmentList>
                    </Route>
                    <Route exact path='/doctorPanel'>
                        <DashBoard></DashBoard>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default DoctorPanel;