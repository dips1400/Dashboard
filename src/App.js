import React from "react";
import "./App.css";
import MainDashboard from "./MainDashboard";
import Sidebar from "../src/components/SideBar";


function App() {
  return (
    <div className="App">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="dashboard">
        <MainDashboard />
        </div>
    </div>
  );
}

export default App;
