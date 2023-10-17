import React from "react";
import "/src/components/EventCard.css";
const EventCard = ({ events }) => {
  return (
    <div>
      <div className="container-member">
        <div className="eventcard cursor-pointer group-hover:blur-sm hover:!blur-none">
          <div className="content-eventcard">
            <div className="img">
              <img src={events.posterUrl} alt={events.title} />
            </div>
            <div className="content-box">
              <h3>{events.title}</h3>
              <p className="team-about mt-5 hover:text-white-500 px-5">
                {events.description}
              </p>
            </div>
          </div>
          <ul className="sci">
            <li>
              <button className="registerbtn">
                <a href={events.registrationLink}>Register</a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
