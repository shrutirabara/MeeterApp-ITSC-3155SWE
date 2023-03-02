import React, {SyntheticEvent, Component}  from 'react';
import ApiCalendar from 'react-google-calendar-api';
import App from '../src/App.js'


class HomePage extends React.Component {
    render(): ReactNode {
        return (
            <div>
                <p className = "para1">  Welcome to Our Application!  You may notice that the functionality isn't 100% there, but we tried! &nbsp;</p>
                   <p className="para1"> ****Remember to change the selected permission for both Google Calendars to "Public" or have permissions over the second calendar via your organization to access the second user's calendar. Then, you can copy and paste the calendar ID of the selected calendars or use your email address in the calendarID portion of the CalendarPage JS code.  </p>

            </div>
        );
    }
}

export default HomePage;