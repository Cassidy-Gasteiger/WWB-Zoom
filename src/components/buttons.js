import React, { useState } from 'react';
import './buttons.css';
import Popup from "./popup"; // Import the CSS file
import { TileLayout } from "@progress/kendo-react-layout";


const ButtonStack = () => {


    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState(null);
    //const [loading, setLoading] = useState(true);
    const handleConnection = async () => {
        try {
            //setLoading(true)
            const response = await fetch('http://localhost:8000/api/connection', {headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },}); // Update the API endpoint as needed
            const data = await response.text();
            setPopupMessage(data);
            //setLoading(false);
            setShowPopup(true);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleAudio = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/microphone', {headers: {
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



    return (
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
  );
};

export default ButtonStack;
