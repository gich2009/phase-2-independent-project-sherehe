import { React, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { endpoint } from "./HomePage";


function UpdateEvent({ onUpdateEvent }) {
  const location = useLocation();
  const event = location.state?.event;

  const [formData, setFormData] = useState({
    name: event.name,
    date: event.date,
    description: event.description,
    location: event.location,
    transport: event.transport,
    paymentPlan: event.paymentPlan,
    meetPlace: event.meetPlace,
    meetTime: event.meetTime,
    startTime: event.startTime,
    invitees: event.invitees,
    organizers: event.organizers,
    invitationCard: event.invitationCard,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

   //Will work on the file functionality in a future version.
  // const handleFileChange = (e) => {
  //   setFormData({ ...formData, invitationCard: e.target.files[0] });
  // };

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    fetch(`${endpoint}/${event.id}`, { method:  "PATCH", 
                                       headers: {"Content-Type" : "application/json",
                                                  "Accept": "application/json"
                                                 },
                                       body:    JSON.stringify(formData)
                                      })
    .then((response) => response.json())
    .then((data) => {console.log(data);
          const updatedEvent = {id: event.id, ...formData};
          console.log(updatedEvent);

          onUpdateEvent(updatedEvent);
          navigate("/home/myevents");
        });
  };

  const handleBack = (e) => {
    navigate(`./../..`);
  }

  return (
    <div className="create-event-container">
      <div className="create-event">
        <h1>Update Event</h1>
          <form onSubmit={handleSubmit} className="create-event-form">
            <div className="form-group">
              <div className="form-field">
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Event Name" />
              </div>
              <div className="form-field">
                <label htmlFor="date">Date:</label>
                <input id="date" type="date" name="date" value={formData.date} onChange={handleChange} placeholder="Event Date" />
              </div>
              <div className="form-field">
                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Describe the event" />
              </div>
              <div className="form-field">
                <label htmlFor="location">Location:</label>
                <input id="location" type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Event Location" />
              </div>
              <div className="form-field">
                <label htmlFor="transport">Transport:</label>
                <select id="transport" name="transport" value={formData.transport} onChange={handleChange} placeholder="Select an option">
                  <option value="">Select</option>
                  <option value="provided">Provided</option>
                  <option value="not_provided">Not Provided</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="paymentPlan">Payment Plan:</label>
                <select id="paymentPlan" name="paymentPlan" value={formData.paymentPlan} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="dutch">Dutch</option>
                  <option value="all_expense_paid">All Expense Paid</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="meetPlace">Meet Place:</label>
                <input id="meetPlace" type="text" name="meetPlace" value={formData.meetPlace} onChange={handleChange} />
              </div>
              <div className="form-field">
                <label htmlFor="meetTime">Meet Time:</label>
                <input id="meetTime" type="time" name="meetTime" value={formData.meetTime} onChange={handleChange} />
              </div>
              <div className="form-field">
                <label htmlFor="startTime">Start Time:</label>
                <input id="startTime" type="time" name="startTime" value={formData.startTime} onChange={handleChange} />
              </div>
              <div className="form-field">
                <label htmlFor="invitees">Invitees:</label>
                <input id="invitees" type="text" name="invitees" value={formData.invitees} onChange={handleChange} placeholder="Enter email addresses separated by comma" />
              </div>
              <div className="form-field">
                <label htmlFor="organizers">Organizers:</label>
                <input id="organizers" type="text" name="organizers" value={formData.organizers} onChange={handleChange} />
              </div>
              <div className="form-field">
                <label htmlFor="invitationCard">Invitation Card:</label>
                <input id="invitationCard" type="text" name="invitationCard" value={formData.invitationCard} onChange={handleChange} />
                {/* <input id="invitationCard" type="text" name="invitationCard" onChange={handleFileChange} /> */}
              </div>
              <div className="form-submit">
                <button type="submit">Update Event</button>
                <button className="goback" onClick={handleBack}>Go back</button>
              </div>
            </div>
          </form>
      </div>
    </div>
  );

}

export default UpdateEvent;