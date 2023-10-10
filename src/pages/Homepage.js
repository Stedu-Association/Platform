import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
  {
    start: new Date(2023, 10, 10, 10, 0),
    end: new Date(2023, 10, 10, 11, 30),
    title: 'Physics Workshop',
  },
  {
    start: new Date(2023, 10, 15, 14, 0),
    end: new Date(2023, 10, 15, 16, 0),
    title: 'Chemistry Workshop',
  },
  {
    start: new Date(2023, 10, 20, 9, 30),
    end: new Date(2023, 10, 20, 12, 0),
    title: 'Mathematics Seminar',
  },
];

const Homepage = () => {
  return (
    <div className="py-40 bg-gray-900 text-white">
      <div>
        <h1>Upcoming Events</h1>
        <Calendar
          localizer={localizer}
          events={events}
          views={['month']}
          defaultDate={new Date()}
        />
      </div>

    </div>
  );
};

export default Homepage;
