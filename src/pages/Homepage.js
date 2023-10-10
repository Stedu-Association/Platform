import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from "react-modal";
import { FiSmile } from "react-icons/fi";

const localizer = momentLocalizer(moment);

const events = [
  {
    start: new Date(2023, 10, 10, 10, 0),
    end: new Date(2023, 10, 10, 11, 30),
    title: "Physics Workshop",
  },
  {
    start: new Date(2023, 10, 15, 14, 0),
    end: new Date(2023, 10, 15, 16, 0),
    title: "Chemistry Workshop",
  },
  {
    start: new Date(2023, 10, 20, 9, 30),
    end: new Date(2023, 10, 20, 12, 0),
    title: "Mathematics Seminar",
  },
];

const DnDCalendar = Calendar; 

Modal.setAppElement("#root");

const Homepage = () => {
  const [selectedEvent, setSelectedEvent] = React.useState(null);
  const [showSmileyConfirmation, setShowSmileyConfirmation] = React.useState(false);

  const onEventResize = (data) => {
    console.log("Event resized:", data);
  };

  const onEventDrop = (data) => {
    console.log("Event dropped:", data);
  };

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
    const smileyConfirmation = setTimeout(() => {
      setShowSmileyConfirmation(true);
      setTimeout(() => setShowSmileyConfirmation(false), 3000);
      clearTimeout(smileyConfirmation);
    }, 3000);
  };

  const closeSmileyConfirmation = () => {
    setShowSmileyConfirmation(false);
  };

  return (
    <div className="py-40 bg-black text-blue-300">
      <div className="px-20">
        <h1>Upcoming Events</h1>
        <DnDCalendar
          defaultDate={moment().toDate()}
          defaultView="month"
          events={events}
          localizer={localizer}
          onEventDrop={onEventDrop}
          onEventResize={onEventResize}
          onSelectEvent={handleEventSelect}
          style={{ height: "60vh" }}
        />
      </div>
      {selectedEvent && (
        <div className="px-20 mt-5">
          <button
            onClick={closeSmileyConfirmation}
            className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md"
          >
            RSVP
          </button>
        </div>
      )}
      <Modal
        isOpen={showSmileyConfirmation}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            backgroundColor: "#364652",
            border: "none",
            borderRadius: "12px",
            padding: "20px",
            width: "200px",
            height: "100px",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <FiSmile size={48} color="#f0c90e" />
        <p>RSVP Confirmed!</p>
      </Modal>
    </div>
  );
};

export default Homepage;
