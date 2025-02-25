// When user clicks New Reservation, this page is displayed.

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ReservationForm from "./ReservationForm";
import { listReservations } from "../utils/api";

function EditReservation() {
  const params = useParams();
  const [editReservation, setEditReservation] = useState(null);

  useEffect(() => {
    if (params.reservation_id) {
      listReservations({ reservation_id: params.reservation_id }).then(
        (reservations) => setEditReservation(reservations[0])
      );
    }
  }, [params.reservation_id]);

  return <ReservationForm editReservation={editReservation} />;
}

export default EditReservation;
