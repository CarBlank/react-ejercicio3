import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ReserveForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newReservation = {
      name,
      phone,
      date,
      time,
      guests,
    };

    try {
      let reservations = JSON.parse(localStorage.getItem("reserves")) || [];

      reservations.push(newReservation);

      await localStorage.setItem("reserves", JSON.stringify(reservations));

      alert("Reserva realizada");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error("Error en la reserva:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Phone:
        <input
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <label>
        Time:
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </label>
      <label>
        People number:
        <input
          type="number"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
      </label>

      <button type="submit">Reserve</button>
    </form>
  );
}

export default ReserveForm;
