import React from 'react';
import Header from '../Header/Header';
import './Destination.css';

const Destination = () => {
    return (
        <div>
            <div className="banner_area">
                <div>
                    <Header></Header>
                </div>
                <div className="room_wrap banner_wrap">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-7">
                                <div className="heading_text">
                                    <p>
                                        <small>252 stays Apr 13-17 3 guests</small><br/>
                                        <h5><span>Stay in Cox's Bazar</span></h5>
                                        </p>
                                </div>
                                <div className="bed_room d-flex">
                                    <div className="room_view">
                                        <img src='https://i.ibb.co/xJKb5st/Rectangle-26.png' alt=""/>
                                    </div>
                                    <div className="room_description">
                                        <h5>Light bright airy stylish apt & safe peaceful stay</h5>
                                        <p><small>4 guests 2 bedrooms 2 beds 2 baths . Wifi Air conditioning Kitchen.Cancellation fexibility availiable</small></p>
                                        <div className="d-flex justify-content-between">
                                            <span>4.9 (20)</span>
                                            <span>$34/night</span>
                                            <span>$167total</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bed_room d-flex">
                                    <div className="room_view">
                                        <img src='https://i.ibb.co/xzx7VRk/Rectangle-27.png' alt=""/>
                                    </div>
                                    <div className="room_description">
                                        <h5>Apartment in Lost Panorama</h5>
                                        <p><small>4 guests 2 bedrooms 2 beds 2 baths . Wifi Air conditioning Kitchen.Cancellation fexibility availiable</small></p>
                                        <div className="d-flex justify-content-between">
                                            <span>4.8 (10)</span>
                                            <span>$52/night</span>
                                            <span>$167total</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bed_room d-flex">
                                    <div className="room_view">
                                        <img src='https://i.ibb.co/GQx91Yc/Rectangle-28.png' alt=""/>
                                    </div>
                                    <div className="room_description">
                                        <h5>AR Lounge & Pool (r&r + b&b)</h5>
                                        <p><small>4 guests 2 bedrooms 2 beds 2 baths . Wifi Air conditioning Kitchen.Cancellation fexibility availiable</small></p>
                                        <div className="d-flex justify-content-between">
                                            <span>4.9 (25)</span>
                                            <span>$44/night</span>
                                            <span>$167total</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26081603.294420466!2d-95.677068!3d37.06250000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1600541325270!5m2!1sen!2sus" width="450" height="580" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;