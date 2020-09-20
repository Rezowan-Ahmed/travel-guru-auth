import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
// import PlaceDescription from '../../FakeData/PlaceDescription';
import './Booking.css';

const Booking = () => {
    return (
        <div className="banner_area">
            <div>
                <Header></Header>
            </div>
            <div className="banner_wrap">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6">
                            <div className="banner_description">
                                <h1>Cox's Bazar</h1>
                                <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                            </div>
                        </div>
                        <div className="col-md-5 offset-1 d-flex">
                            <div className="booking_field">
                                <Form.Group>
                                    <label>Origin</label>
                                    <Form.Control style={{background:'#e2dadaa6', height:'50px', color:'black'}} type="text" placeholder="Form"/>
                                    <label>Destination</label>
                                    <Form.Control style={{background:'#e2dadaa6', height:'50px', color:'black'}} type="text" placeholder="To"/>
                                    <div className='d-flex'>
                                        <label>Form</label>
                                        <label style={{marginLeft:'150px'}}>To</label>
                                    </div>
                                    <div className='d-flex'>
                                        <input className='date_selection' type="date" />
                                        <input className='date_selection' type="date" />
                                    </div>
                                    <Link to='/destination'><button style={{background:'orange'}}className='btn start_booking_btn'>Start Booking</button></Link>
                                </Form.Group>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;