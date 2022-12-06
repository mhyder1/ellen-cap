import React, { useEffect, useState } from "react";
import { listReservations } from "../utils/api";
import { listTables } from "../utils/api";
import { useParams } from "react-router-dom";
import ErrorAlert from "../layout/ErrorAlert";
import { today, next, previous } from "../utils/date-time";
import { useHistory } from "react-router-dom";

function Dashboard() {
  const [reservations, setReservations] = useState([]);
  const [tables, setTables] = useState([]);
  const [error, setError] = useState(null);
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
    setError(null);
    listReservations({ date }, abortController.signal)
      .then(setReservations)
      .catch(setError);
    listTables(abortController.signal)
      .then(setTables)
      .catch(setError);
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
      <td><a href={`/reservations/${reservation.reservation_id}/seat`} className="btn btn-primary mr-2">Seat</a></td>
    </tr>
  ));

  const tablesTable = tables.map((table) => (
    <tr key={table.table_id}>
      <th scope="row">{table.table_id}</th>
      <td>{table.table_name}</td>
      <td>{table.capacity}</td>
      <td data-table-id-status={table.table_id}>{table.is_occupied ? "Occupied" : "Free"}</td>
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
      <ErrorAlert error={error} />
      <div className="row">
        <div className="col-8">
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
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {reservationsTable}
            </tbody>
          </table>
        </div>
        <div className="col-4" style={{border: "1px solid grey"}}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Table Name</th>
                <th scope="col">Capacity</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {tablesTable}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
