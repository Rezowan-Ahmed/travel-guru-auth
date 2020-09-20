import React from 'react';
import Header from '../Header/Header';
import PlaceDescription from '../../FakeData/PlaceDescription';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="banner_area">
            <div>
                <Header></Header>
            </div>
            <div className="banner_wrap">
                <div className='container'>
                    <div className="row d-flex align-items-center">
                        <div className="col-md-4">
                            <div className="banner_description">
                                <h1>Cox's Bazar</h1>
                                <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. it is famous mostly for its long natural sandy beach, and it...</p>
                                <Link to="/booking"><button className="btn" style={{background: "orange", padding: "10px 40px", borderRadius: "7px"}}>Booking</button></Link> 
                            </div>
                        </div>
                        <div className="col-md-8 d-flex">
                            {
                                PlaceDescription.map( place => 
                                    <div className="banner_place">
                                        <div className="banner_images">
                                            <img src={place.image} alt=""/>
                                            <div className="place_names">
                                                <h2>{place.name}</h2>
                                            </div>
                                        </div>
                                    </div>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;