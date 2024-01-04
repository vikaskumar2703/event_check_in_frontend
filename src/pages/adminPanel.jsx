import { Sidebar } from "../components/sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const AdminPanel = () => {
  return (
    <div className="admin-layout">
      <h1>Admin Dashboard</h1>
      <div className="admin-container">
        <Sidebar />
      </div>
    </div>
  );
};
