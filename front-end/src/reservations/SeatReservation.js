//When user clicks "seat" on reservation, this page is displayed

import React from "react";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import ErrorAlert from "../layout/ErrorAlert";
import { listTables, seatTable, updateReservation, updateReservationStatus } from "../utils/api";

function SeatReservation() {
    const [tables, setTables] = useState([]);
    const [selectedTable, setSelectedTable] = useState();
    const [error, setError] = useState();
    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        loadTables()
    }, []);
    
    function loadTables() {
        const abortController = new AbortController();
        setError(null);
        listTables(abortController.signal)
            .then(setTables)
            .catch(setError);
        return () => abortController.abort();
    }

    function changeHandler({ target: { name, value } }) {
        setSelectedTable(value);
    }

    function submitHandler() {
        seatTable(selectedTable, params.reservation_id)
            .catch(setError);
        updateReservationStatus(params.reservation_id, "seated").then(() => {
            history.push(`/dashboard`);
        })
        .catch(setError);
    }

    function cancelHandler() {
        history.push("/");
    }
 
    return (
        <div className="mb-3">
          <label className="form-label" htmlFor="tables">
            Tables
          </label>
          <select
            className="form-control"
            id="tables"
            name="tables"
            value={selectedTable}
            onChange={changeHandler}
            required={true}
          >
              <option value="">Select a table</option>
            {tables.map((table) => {
                return <option value={table.table_id}>{`${table.table_name} - ${table.capacity} people`}</option>
            })}
          </select>
            <button 
            type="button"
            className="btn btn-secondary mr-2"
            onClick={cancelHandler}
            >
                Cancel
            </button>
            <button
            className="btn btn-primary"
            onClick={submitHandler}
            >
                Submit
            </button>
        </div>
    );
}

export default SeatReservation;