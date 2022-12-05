// When user clicks New Reservation, this page is displayed.

import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createReservation } from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";


function NewReservation() {
    const history = useHistory();

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [mobileNumber, setMobileNumber] = useState();
    const [dateOfReservation, setDateOfReservation] = useState();
    const [timeOfReservation, setTimeOfReservation] = useState();
    const [numberOfPeople, setNumberOfPeople] = useState();
    const [error, setError] = useState(null);

    const handleFirstNameChange = (event) => setFirstName(event.target.value);
    const handleLastNameChange = (event) => setLastName(event.target.value);
    const handleMobileNumberChange = (event) => setMobileNumber(event.target.value);
    const handleDateOfReservationChange = (event) => setDateOfReservation(event.target.value);
    const handleTimeOfReservationChange = (event) => setTimeOfReservation(event.target.value);
    const handleNumberOfPeopleChange = (event) => setNumberOfPeople(event.target.value);


    function cancelHandler() {
        history.push("/");
    }

    function submitHandler(event) {
        event.preventDefault();
        const reservation = {
            first_name: firstName,
            last_name: lastName,
            mobile_number: mobileNumber,
            reservation_date: dateOfReservation,
            reservation_time: timeOfReservation,
            people: numberOfPeople
        }
        createReservation(reservation).then(() => {
            history.push(`/dashboard/${reservation.reservation_date}`);
        })
        .catch(setError);
    }

    // This is the form for creating a new reservation.
    return (
        <> 
            <h1>New Reservation</h1>
            <ErrorAlert error={error} />
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label for="first_name" className="form-label">First Name</label>
                    <input placeholder="First Name" type="text" className="form-control" id="first_name" name="first_name" value={firstName} onChange={handleFirstNameChange} />
                </div>
                <div className="mb-3">
                    <label for="last_name" className="form-label">Last Name</label>
                    <input placeholder="Last Name" type="text" className="form-control" id="last_name" name="last_name" value={lastName} onChange={handleLastNameChange} />
                </div>
                <div className="mb-3">
                    <label for="mobile_number" className="form-label">Mobile Number</label>
                    <input placeholder="Mobile Number" type="number" className="form-control" id="mobile_number" name="mobile_number" value={mobileNumber} onChange={handleMobileNumberChange} />
                </div>
                <div className="mb-3">
                    <label for="reservation_date" className="form-label">Reservation Date</label>
                    <input type="date" className="form-control" id="reservation_date" name="reservation_date" placeholder="YYYY-MM-DD" pattern="\d{4}-\d{2}-\d{2}" value={dateOfReservation} onChange={handleDateOfReservationChange} />
                </div>
                <div className="mb-3">
                    <label for="reservation_time" className="form-label">Reservation Time</label>
                    <input type="time" className="form-control" placeholder="HH:MM" pattern="[0-9]{2}:[0-9]{2}" id="reservation_time" name="reservation_time" value={timeOfReservation} onChange={handleTimeOfReservationChange} />
                </div>
                <div className="mb-3">
                    <label for="people" className="form-label">Number Of People</label>
                    <input placeholder="Number Of People" type="number" className="form-control" id="people" name="people" value={numberOfPeople} onChange={handleNumberOfPeopleChange} />
                </div>
                <div>
                    <button 
                    type="button"
                    className="btn btn-secondary mr-2"
                    onClick={cancelHandler}
                    >Cancel
                    </button>
                    <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={submitHandler}
                    >Submit
                    </button>
                </div>
            </form>
        </>
    );
}

export default NewReservation;