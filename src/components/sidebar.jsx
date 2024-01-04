import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <ul className="sidebar-list-container">
        <NavLink to="/admin-panel/attendee-list">
          <li className="admin-tasks">Registered Attendees Data</li>
        </NavLink>
        <NavLink to="/admin-panel/event-attendees">
          <li className="admin-tasks">Attendees By Event</li>
        </NavLink>
        <NavLink to="/admin-panel/admin-check-in">
          <li className="admin-tasks">Check In without QR</li>
        </NavLink>
        <NavLink to="/admin-panel/revert-check-in">
          <li className="admin-tasks">Revert Check In</li>
        </NavLink>
        <NavLink to="/admin-panel/add-attendee">
          <li className="admin-tasks">Add attendee + ticket</li>
        </NavLink>
        <NavLink to="/admin-panel/add-ticket">
          <li className="admin-tasks">Add ticket</li>
        </NavLink>
      </ul>
    </div>
  );
};

/* Add overview tab */
