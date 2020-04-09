import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faLaptop } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
    return (
        <div>
            <div className="sidenav">
                <Link to='/doctorPanel/dashboard' className="menu-link">
                    <FontAwesomeIcon icon={faLaptop} /> Dashboard
                </Link>
                <Link to='/doctorPanel/appointmentList' className="menu-link">
                    <FontAwesomeIcon icon={faCalendarCheck} /> Appointment
                </Link>
            </div>
        </div>
    );
};

export default Menu;