import React from 'react';
import { useNavigate } from 'react-router-dom';

function EventItem({ event: {id, name, date, location, startTime } }) {
  const navigate = useNavigate();

  function handleItem(){
    navigate(`/home/myevents/${id}`);
  }

  return (
    <div className="event-item" onClick={handleItem}>
      <h3>{name}</h3>
      <p>Date: {date}</p>
      <p>Location: {location}</p>
      <p>Start Time: {startTime}</p>
    </div>
  );
}

export default EventItem;
