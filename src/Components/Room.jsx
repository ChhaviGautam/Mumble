import React, { useState } from "react";
import {
  Routes,
  Route,
  Link,
  useParams,
  useResolvedPath,
} from "react-router-dom";
import InterviewListComponent from "./InterviewListComponent";
import NewInterviewComponent from "./NewInterviewComponent";
import "./CSS/Room.css";
import * as FaIcons from "react-icons/fa";

const Room = () => {
  const { roomName } = useParams();
  const resolvedPath = useResolvedPath(`/room/${roomName}`);
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="room-container">
      <aside
        style={{ width: sidebar ? "200px" : "20px" }}
        className={sidebar ? "sidebar active" : "sidebar"}
      >
        <FaIcons.FaBars className="menu-bars" onClick={toggleSidebar} />
        <h2 style={{ display: sidebar ? "block" : "none" }}>WEBSTAFF</h2>
        <ul className={sidebar ? "sidebar-menu active" : "sidebar-menu"}>
          <li>
            <Link to={`${resolvedPath.pathname}/new-interview`}>
              New Interview
            </Link>
          </li>
          <li>
            <Link to={`${resolvedPath.pathname}/interview-list`}>
              Interview List
            </Link>
          </li>
        </ul>
      </aside>
      <div className="content">
        <Routes>
          <Route path="/" element={<InterviewListComponent />} />
          <Route path="new-interview" element={<NewInterviewComponent />} />
          <Route path="interview-list" element={<InterviewListComponent />} />
        </Routes>
      </div>
    </div>
  );
};

export default Room;
