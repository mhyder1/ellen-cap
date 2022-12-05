import React, { useEffect, useState } from "react";
import { listReservations } from "../utils/api";
import { useParams } from "react-router-dom";
import ErrorAlert from "../layout/ErrorAlert";
import { today, next, previous } from "../utils/date-time";
import { useHistory } from "react-router-dom";

function Dashboard() {
  const [reservations, setReservations] = useState([]);
  const [reservationsError, setReservationsError] = useState(null);
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    // the today() method is what was previously being used
    // dashboard by default lists all reservations for today
    // if a date is passed in, lists all for that date
    const date = params.reservationDate || today();
    loadDashboard(date)
  }, [params]);

  function loadDashboard(date) {
    const abortController = new AbortController();
    setReservationsError(null);
    listReservations({ date }, abortController.signal)
      .then(setReservations)
      .catch(setReservationsError);
    return () => abortController.abort();
  }


  //handlers for next, previous, and today buttons

  function nextHandler() {
    const currentDate = params.reservationDate || today();
    const nextDay = next(currentDate);
    history.push(`/dashboard/${nextDay}`)
  }

  function prevHandler() {
    const currentDate = params.reservationDate || today();
    const prevDay = previous(currentDate);
    history.push(`/dashboard/${prevDay}`)
  }

  function todayHandler() {
    const currentDate = today();
    history.push(`/dashboard/${currentDate}`)
  }

  
  const reservationsTable = reservations.map((reservation) => (
    <tr key={reservation.reservation_id}>
      <th scope="row">{reservation.reservation_id}</th>
      <td>{reservation.first_name}</td>
      <td>{reservation.last_name}</td>
      <td>{reservation.mobile_number}</td>
      <td>{reservation.reservation_date}</td>
      <td>{reservation.reservation_time}</td>
      <td>{reservation.people}</td>
    </tr>
  ));


  return (
    <main>
      <h1>Dashboard</h1>
      <div className="d-md-flex mb-3">
        <h4 className="mb-0">{`Reservations for ${params.reservationDate || today()}`}</h4>
      </div>
      <div className="d-md-flex mb-3">
        <button type="button" className="btn btn-primary mr-2" onClick={prevHandler}>Previous</button>
        <button type="button" className="btn btn-primary mr-2" onClick={todayHandler}>Today</button>
        <button type="button" className="btn btn-primary mr-2" onClick={nextHandler}>Next</button>
      </div>
      <ErrorAlert error={reservationsError} />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Reservation Date</th>
            <th scope="col">Reservation Time</th>
            <th scope="col">Number Of People</th>
          </tr>
        </thead>
        <tbody>
          {reservationsTable}
        </tbody>
      </table>
    </main>
  );
}

export default Dashboard;
