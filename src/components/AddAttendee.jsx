import React, { useState, useEffect } from "react";

export const AddAttendee = () => {
  const [email, setEmail] = useState("");
  const [branch, setBranch] = useState("");
  const [name, setName] = useState("");
  const [year, setYear] = useState(0);
  const [attendeeId, setAttendeeId] = useState(0);
  const [eventId, setEventId] = useState(1);

  const postAttendee = async (name, email, branch, year) => {
    const response = await fetch("http://127.0.0.1:8000/attendees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        branch: branch,
        year: year,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        console.log("Attendee added successfully");
        return response.json();
      })
      .then((data) => {
        console.log(data.attendee_id);
        setAttendeeId(data.attendee_id);
      })
      .catch((error) => {
        alert("Error:", error.message);
      });
  };

  const postTicket = async (attendeeId, eventId) => {
    const response = await fetch("http://127.0.0.1:8000/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        attendee_id: attendeeId,
        event_id: eventId,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        alert("Ticket added successfully");
      })

      .catch((error) => {
        alert("Error:", error.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postAttendee(name, email, branch, year);
  };

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    postTicket(attendeeId, eventId);
  };

  const [availableEvents, setAvailableEvents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/events", {
          method: "GET",
        });
        const result = await response.json();
        setAvailableEvents(result);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="attendee-form-container">
      <h1>Add attendee</h1>
      <form className="attendee-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          id="name"
          name="name"
          placeholder="Full Name"
        ></input>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          id="email"
          name="email"
          placeholder="youremail@gmail.com"
        ></input>
        <label htmlFor="branch">Branch</label>
        <input
          value={branch}
          onChange={(e) => {
            setBranch(e.target.value);
          }}
          id="branch"
          name="branch"
          placeholder="Your Branch"
        ></input>
        <label htmlFor="year">Year</label>
        <input
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
          }}
          type="year"
          id="year"
          name="year"
          placeholder="Your Year"
        ></input>
        <button type="submit">Register Attendee</button>
      </form>
      <div className="ticket-form-container">
        <h1>Add Ticket</h1>
        <form className="ticket-form" onSubmit={handleTicketSubmit}>
          <label htmlFor="event">Choose a event:</label>
          <select
            name="event"
            id="event"
            onChange={(e) => {
              setEventId(e.target.value);
              console.log(eventId);
            }}
          >
            <option value="" disabled selected>
              Select your Event
            </option>
            {availableEvents.map((event, key) => (
              <option key={key} value={event.event_id}>
                {event.name}
              </option>
            ))}
          </select>
          <button type="submit">Add Ticket</button>
        </form>
      </div>
    </div>
  );
};

// TO DO : check In generated ticket
