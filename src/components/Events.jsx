import React from "react";
import EventCard from "/src/components/EventCard.jsx";
import "/src/components/EventCard.css";
import event1Poster from "/src/assets/posters/event1.png";
import event2Poster from "/src/assets/posters/event2.png";
// import event3Poster from '../assets/posters/event3.jpg';
const events = [
  {
    title: "Haule Haule Sajna",
    description: "lorem ipsum kdfhvvf eich whb cgihwr b feihcv hw c vw ",
    posterUrl: event1Poster, // Use the imported image
    registrationLink: "https://example.com/register1",
  },
  {
    title: "Tatsam Orientation",
    description: "Description for Event 2",
    posterUrl: event2Poster, // Use the imported image
    registrationLink: "https://example.com/register2",
  },
  // Add more events here
];

const Events = () => {
  return (
    <div className="events-section">
      <div className="our-event text-center">
        <div className="event-tag">Upcoming Events</div>
        <div className="underline mx-auto w-full"></div>
        <div className="flex justify-center items-center grid lg:grid-cols-2 md:grid-cols-2">
          {events.map((event, index) => (
            <EventCard key={index} events={event} />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <button className="explorebtn">
            <a href="">Explore Other Events !!</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
