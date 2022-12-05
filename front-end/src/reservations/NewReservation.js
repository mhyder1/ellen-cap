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
                <div class="mb-3">
                    <label for="first_name" class="form-label">First Name</label>
                    <input placeholder="First Name" type="text" class="form-control" id="first_name" name="first_name" value={firstName} onChange={handleFirstNameChange} />
                </div>
                <div class="mb-3">
                    <label for="last_name" class="form-label">Last Name</label>
                    <input placeholder="Last Name" type="text" class="form-control" id="last_name" name="last_name" value={lastName} onChange={handleLastNameChange} />
                </div>
                <div class="mb-3">
                    <label for="mobile_number" class="form-label">Mobile Number</label>
                    <input placeholder="Mobile Number" type="number" class="form-control" id="mobile_number" name="mobile_number" value={mobileNumber} onChange={handleMobileNumberChange} />
                </div>
                <div class="mb-3">
                    <label for="reservation_date" class="form-label">Reservation Date</label>
                    <input placeholder="Reservation Date" type="date" class="form-control" id="reservation_date" name="reservation_date" value={dateOfReservation} onChange={handleDateOfReservationChange} />
                </div>
                <div class="mb-3">
                    <label for="reservation_time" class="form-label">Reservation Time</label>
                    <input placeholder="Reservation Time" type="time" class="form-control" id="reservation_time" name="reservation_time" value={timeOfReservation} onChange={handleTimeOfReservationChange} />
                </div>
                <div class="mb-3">
                    <label for="people" class="form-label">Number Of People</label>
                    <input placeholder="Number Of People" type="number" class="form-control" id="people" name="people" value={numberOfPeople} onChange={handleNumberOfPeopleChange} />
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
                    //onClick={submitHandler}
                    >Submit
                    </button>
                </div>
            </form>
        </>
    );
}

export default NewReservation;