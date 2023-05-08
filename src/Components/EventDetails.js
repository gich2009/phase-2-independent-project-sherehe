// import { React } from "react";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { endpoint } from "./HomePage";

// const joanInvitation = "../../joanInvitation.jpg";

// function EventDetails({ events, onDeleteEvent}) {
//   const params = useParams();
//   const navigate = useNavigate();
  
//   const event = events.find((event) => event.id === parseInt(params.id));
//   console.log(event.invitationCard);

//   function onDelete() {
//     fetch(`${endpoint}/id`, {method: "DELETE"})
//     .then((response) => response.json());

//     onDeleteEvent(event.id);

//     navigate("/home/myevents");
//   }

//   function onUpdate() {}

//   function onGoBack() {
//     navigate("/home/myevents");
//   }

//   const imageSource = `$../../../../${event.invitationCard}`;
//   console.log(imageSource);

//   // Check if the event exists before rendering its properties
//   return event ? (
//     <div className="event-card">
//       <h2>             {event.name}</h2>
//       <p>Date:         {event.date}</p>
//       <p>Description:  {event.description}</p>
//       <p>Location:     {event.location}</p>
//       <p>Transport:    {event.transport}</p>
//       <p>Payment Plan: {event.paymentPlan}</p>
//       <p>Meet Place:   {event.meetPlace}</p>
//       <p>Meet Time:    {event.meetTime}</p>
//       <p>Start Time:   {event.startTime}</p>
//       <p>Invitees:     {event.invitees}</p>
//       <p>Organizers:   {event.organizers}</p>
//       <img className="event-details" src={imageSource} alt="No Invitation card uploaded."></img>
//       {/* <img className="event-details" src={joanInvitation} alt="No Invitation card uploaded."></img> */}

//       <div className="buttons">
//         <button onClick={onDelete}>Delete</button>
//         <button onClick={onUpdate}>Update</button>
//         <button onClick={onGoBack}>Go Back</button>
//       </div>
//     </div>
//   ) : (
//     <div>Loading...</div>
//   );
// }

// export default EventDetails;



import { React } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { endpoint } from "./HomePage";

function EventDetails({ events, onDeleteEvent }) {
  const params = useParams();
  const navigate = useNavigate();

  const event = events.find((event) => event.id === parseInt(params.id));

  if (event) {
    console.log(event.invitationCard);
  }

  function onDelete() {
    if (!event) return;

    fetch(`${endpoint}/${params.id}`, { method: "DELETE" }).then((response) =>
      response.json()
    );

    onDeleteEvent(event.id);

    navigate("/home/myevents");
  }

  function onUpdate() {
    if (!event) return;

    navigate(`/home/myevents/update/${event.id}`, { state: { event: event } },);
  }

  function onGoBack() {
    navigate("/home/myevents");
  }

  const imageSource = event ? `$../../../../${event.invitationCard}` : "";

  if (event) {
    console.log(imageSource);
  }

  // Check if the event exists before rendering its properties
  return event ? (
    <div className="event-card">
      <div className="event-card">
        <h2>             {event.name}</h2>
        <p>Date:         {event.date}</p>
        <p>Description:  {event.description}</p>
        <p>Location:     {event.location}</p>
        <p>Transport:    {event.transport}</p>
        <p>Payment Plan: {event.paymentPlan}</p>
        <p>Meet Place:   {event.meetPlace}</p>
        <p>Meet Time:    {event.meetTime}</p>
        <p>Start Time:   {event.startTime}</p>
        <p>Invitees:     {event.invitees}</p>
        <p>Organizers:   {event.organizers}</p>
        <img className="event-details" src={imageSource} alt="No Invitation card uploaded."></img>

        <div className="buttons">
          <button onClick={onDelete}>Delete</button>
          <button onClick={onUpdate}>Update</button>
          <button onClick={onGoBack}>Go Back</button>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default EventDetails;


  {/* <img className="event-details" src={joanInvitation} alt="No Invitation card uploaded."></img> */}