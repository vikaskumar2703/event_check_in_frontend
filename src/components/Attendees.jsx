import React, { useState, useEffect } from "react";

export const AttendeeList = () => {
  const [attendees, setAttendees] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/attendees", {
          method: "GET",
        });
        const result = await response.json();
        setAttendees(result);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Branch</th>
            <th>Year</th>
            <th>Email</th>
            <th>Attendee Id</th>
          </tr>
        </thead>
        <tbody>
          {attendees.map((attendee, key) => (
            <tr key={key}>
              <td>{attendee.name}</td>
              <td>{attendee.branch}</td>
              <td>{attendee.year}</td>
              <td>{attendee.email}</td>
              <td>{attendee.attendee_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/* To Do : install prime react for sorting , filter , and pagination */
