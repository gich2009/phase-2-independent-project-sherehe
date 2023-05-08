import { React, useState, useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import CreateEvent from "./CreateEvent";
import EventList from "./EventList";
import EventDetails from "./EventDetails";
import About from "./About.js";


export const endpoint = "http://localhost:3001/events";

function HomePage(){
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(endpoint, {method: "GET"})
    .then((response) => response.json())
    .then((data) => setEvents(data))
  }, []);

  function deleteEvent (deleteId){
    setEvents(events.filter((event) => event.id !== deleteId));
  }

  return(
    <div className="homepage">
      <Navbar />
      <Outlet />
      <Routes>
        <Route exact path="/create"        element={<CreateEvent />}          />
        <Route exact path="/myevents"      element={<EventList    events={events}/>}            />
        <Route exact path="/myevents/:id"  element={<EventDetails events={events} onDeleteEvent={deleteEvent}/>}         />
        <Route exact path="/about"         element={<About />}                />
        <Route path="/*"                   element={<h1>404 not found</h1>}   />
      </Routes>
    </div>
  );

}

export default HomePage;

// <h1>This is the home page</h1>