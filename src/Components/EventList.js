import React from "react";
import EventItem from "./EventItem";

function EventList({events}){

  const listOfEvents = events.map((event) => <EventItem key={event.id} event={event}/>)
  return(
    <div className="event-list">
      {listOfEvents}
    </div>
  );
}

export default EventList;