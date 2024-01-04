import { Routes, Route } from "react-router-dom";

import Home from "./layout/index";
import "./App.css";
import { Volunteer } from "./pages/volunteer";
import { AdminAuth } from "./pages/adminAuth";
import { AdminPanel } from "./pages/adminPanel";
import { AttendeeList } from "./components/Attendees";
import { AdminCheckIn } from "./components/AdminCheckIn";
import { RevertCheckIn } from "./components/RevertCheckIn";
import { AddAttendee } from "./components/AddAttendee";
import { Ticket } from "./components/Ticket";
import { EventAttendees } from "./components/EventAttendees";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/admin-auth" element={<AdminAuth />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/admin-panel/*" element={<AdminPanel />} />

        <Route path="/admin-panel/attendee-list" element={<AttendeeList />} />
        <Route
          path="/admin-panel/event-attendees"
          element={<EventAttendees />}
        />
        <Route path="/admin-panel/admin-check-in" element={<AdminCheckIn />} />
        <Route
          path="/admin-panel/revert-check-in"
          element={<RevertCheckIn />}
        />
        <Route path="/admin-panel/add-attendee" element={<AddAttendee />} />
        <Route path="/admin-panel/add-ticket" element={<Ticket />} />
      </Routes>
    </div>
  );
}

export default App;
