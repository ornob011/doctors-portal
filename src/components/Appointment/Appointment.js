import React, { useState } from 'react';
import './Appointment.css'
import PickDate from '../PickDate/PickDate';
import ServiceList from '../ServiceList/ServiceList';

const Appointment = () => {
    const [date, setDate] = useState(new Date())

    const handleDate = d => {
        setDate(d)
    }


    return (
        <div className='container'>
            <h1 className="text-info">Appointment</h1>

            <PickDate date={date} handleDate={handleDate}></PickDate>

            <ServiceList date={date}></ServiceList>
        </div>
    );
};

export default Appointment;