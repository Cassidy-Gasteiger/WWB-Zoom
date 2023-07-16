import React, { useState } from 'react';
import './buttons.css';
import Popup from "./popup";
import LoadingSpinner from "./Spinner";
import EventCalender from "./calender";


const ButtonStack = () => {


    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [showAnotherComponent, setShowAnotherComponent] = useState(false);
    const handleConnection = async () => {
        try {
            setLoading(true)
            const response = await fetch('http://localhost:8000/api/connection', {headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },}); // Update the API endpoint as needed
            const data = await response.text();
            setPopupMessage(data);
            setShowPopup(true);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    const handleAudio = async () => {
        try {
            setLoading(true)
            const response = await fetch('http://localhost:8000/api/microphone', {headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },}); // Update the API endpoint as needed
            const data = await response.text();
            setPopupMessage(data);
            setShowPopup(true);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    const handleVideo = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/webcam', {headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },}); // Update the API endpoint as needed
            const data = await response.text();
            setPopupMessage(data);
            setShowPopup(true);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    const handleClick = () => {
        /*const newWindow = window.open('', '_blank'); // Open a new window or tab
        newWindow.document.write('<html><body><div id="root"></div></body></html>'); // Create a basic HTML structure in the new window
        ReactDOM.render(<EventCalender />, newWindow.document.getElementById('root'));*/
        setShowAnotherComponent(true); // Set the state to true when the button is clicked
    };



    return (
        <>
            <center>
        {isLoading && <LoadingSpinner/>}
            </center>
        <div className="center-container">
            <div className="button-container">
      <button onClick={handleConnection} className="button">Bandwidth</button>
        {showPopup && <Popup message={popupMessage} onClose={closePopup} />}
      <button onClick={handleAudio} className="button">Audio</button>
        {showPopup && <Popup message={popupMessage} onClose={closePopup} />}
      <button onClick={handleVideo} className="button">Video</button>
        {showPopup && <Popup message={popupMessage} onClose={closePopup} />}
        </div>
        </div>
            <div>
            <button onClick={handleClick} className="button pos">Add the event to the Calender</button>
            {showAnotherComponent && <EventCalender />}
            </div>
        </>
  );
};

export default ButtonStack;
