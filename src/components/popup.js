import React from 'react';
import './popup.css';


const Popup = ({ message, onClose }) => {
    return (
    <div className="popup-overlay">
        <div className="popup-content">
            <button className="popup-close" onClick={onClose}>
                X
            </button>
            {message}
        </div>
    </div>
    );
};


export default Popup;