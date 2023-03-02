import React, {SyntheticEvent, Component}  from 'react';
import ApiCalendar from 'react-google-calendar-api';
import App from '../src/App.js';
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";
import Login from '../src/Login.js';
import { Redirect } from 'react-router-dom';


const API_KEY = "AIzaSyB1Z-hNYREWNOGpytJU46XNN3_cCTH6Efk";
//Enter in calendarID or GoogleEmail if you want to see two different calendars.
//Remember to have your calendar settings set to public to view them in our app.

//We tried to use the code from @ericz1803's react-google-calendar repository and change it to add functionality but it would not take in variables for the
//calendarId so we were unable to go further with bringing the features in and the functionalities without that.
//You can also change the color of the events with HTML color codes
let calendars = [
    {calendarId: "kempshane22@gmail.com", color: "#36D323" }, {calendarId: "shrutirabara1215@gmail.com", color: "#4AC9E8"}

];


let styles = {
    //you can use object styles (no import required)
    calendar: {
        borderWidth: "15px", //make outer edge of calendar thicker
    },

    //you can also use emotion's string styles
    today: css`
   /* highlight today by making the text blue and giving it a blue border, but totally customizable */
    color: blue;
    border: 10px solid blue;
`
}





class CalendarPage extends React.Component {




    render(): ReactNode {
        return (


<div>
                <Calendar apiKey={API_KEY} calendars={calendars} styles={styles}/>
</div>
        );
    }
}

export default CalendarPage;