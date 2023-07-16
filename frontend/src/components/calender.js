import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";
import "./popup.css"
//put your google calendar api key here
const API_KEY = "AIzaSyC8t8iPMotcIDR67kuRX9OqHphhKRQacmg";

//replace calendar id with one you want to test

let calendars = [
    { calendarId: "09opmkrjova8h5k5k46fedmo88@group.calendar.google.com" }
];

let styles = {
    //you can use object styles
    calendar: {
        borderWidth: "3px" //make outer edge of calendar thicker
    },

    //you can also use emotion's string styles (remember to add the line 'import { css } from "@emotion/react";')
    today: css`
    /* highlight today by making the text red and giving it a red border */
    color: red;
    border: 1px solid red;
  `
};



export default function EventCalender() {
    return (
        <div className="popup-overlay scrollable-container">
            <div className="popup-content">
            <div
                /*style={{
                    width: "50%",
                    paddingTop: "50px",
                    paddingBottom: "50px",
                    maxWidth: "1200px",
                    marginTop: "300px",
                    marginLeft: "300px"
                }}*/
            >
                <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
            </div>
       </div>
        </div>
    );
}
