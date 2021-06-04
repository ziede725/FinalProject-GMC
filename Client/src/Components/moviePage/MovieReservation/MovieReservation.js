import React, { useState } from "react";
import moment from "moment";
import "./MovieReservation.scss";

const MovieReservation = ({ movieScreenings }) => {
  const x = new Set();
  const theaters = movieScreenings
    .filter((screening) => screening.theaterId !== null)
    .map((screening) => screening.theaterId && screening.theaterId)
    .filter((el) => {
      const duplicate = x.has(el._id);
      x.add(el._id);
      return !duplicate;
    });


  const [selectedTheater, setSelectedTheater] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  console.log(Date.now())
  const handleTheater = (e) => {
    e.preventDefault();
    setSelectedTheater(e.target.value);
  };
  const handleDate = (e) => {
    e.preventDefault();
    setSelectedDate(e.target.value);
  };
  const handleTime = (e) => {
    e.preventDefault();
    setSelectedTime(e.target.value);
  };
  let screeningsByTheater = movieScreenings.filter(
    (e) => e.theaterId?.theaterName === selectedTheater
  );
  const sessions = screeningsByTheater.map((e) => e.sessionId);
  const toggleTime =
    (selectedTheater !== "") & (selectedDate !== "") ? true : false;
  console.log(selectedTime);
  return (
    <>
      {movieScreenings && (
        <div className="reservation__wrapper">
          <div className="text">
            <h2>Please Choose your screening</h2>
          </div>
          <div className="form">
            <div className="select">
              <select
                name="reservation-theater"
                id="reservation-theater"
                className="select"
                onChange={(e) => handleTheater(e)}
              >
                <option defaultValue value="">
                  Choose a Theater
                </option>

                {theaters &&
                  theaters.map((theater, index) => (
                    <option key={index} value={theater.theaterName}>
                      {`${theater.theaterName} (${theater.city})`}
                    </option>
                  ))}
              </select>
            </div>
            {selectedTheater && (
              <div className="select">
                <select
                  name="reservation-date"
                  id="reservation-date"
                  className="select"
                  onChange={(e) => handleDate(e)}
                >
                  <option defaultValue value="">
                    Choose a Date
                  </option>
                  {screeningsByTheater.map(
                    (screening, index) =>
                    
                      moment(screening.date).isBefore(Date.now()) || (
                        <option key={index} value={screening.date}>
                          {screening.date}
                        </option>
                      )
                  )}
                </select>
              </div>
            )}
            {selectedDate && (
              <div className="select">
                <select
                  name="reservation-date"
                  id="reservation-date"
                  onChange={(e) => handleTime(e)}
                >
                  <option defaultValue value="">
                    Choose a Time
                  </option>
                  {sessions && 
                    sessions.filter((e) => e.dates.includes(selectedDate))
                    .filter((el) => {
                      const duplicate = x.has(el._id);
                      x.add(el._id);
                      return !duplicate;
                    })
                    .map((session, index) => (
                      <option
                        id={session._id}
                        key={session._id}
                        value={session.startTime}
                      >
                        {session.startTime}
                      </option>
                    ))}
                </select>
              </div>
            )}

            {selectedTime !== "" && <button>get Tickets</button>}
          </div>
          {/* <table className="table">
            <thead>
              <tr>
                <th title="Threater ">Threater </th>
                <th title="Date">Date</th>
                <th title="Start Time">Start Time</th>
                <th title="Price">Price</th>
                <th title="Get Ticket">Get Ticket</th>
              </tr>
            </thead>
            <tbody>
              {movieScreenings.map((screening) => (
                <tr>
                  <th>{screening.theater}</th>
                  <td>{screening.date}</td>
                  <td>{screening.room}</td>
                  <td>{screening.price}</td>
                  <td>
                    <button>Get a Ticket</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
        </div>
      )}
    </>
  );
};

export default MovieReservation;
