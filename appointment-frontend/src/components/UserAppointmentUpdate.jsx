import { useEffect, useState } from "react";
import api from "../api/api";

export default function UserAppointmentUpdate({ userId, refresh }) {
  const [appointments, setAppointments] = useState([]);
  const [selected, setSelected] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (userId) {
      api.get("/appointments").then(res => {
        const userApps = res.data.filter(a => a.user && a.user.id === userId);
        setAppointments(userApps);
      });
    }
  }, [userId]);

  useEffect(() => {
    if (selected) {
      const app = appointments.find(a => a.id === Number(selected));
      if (app) {
        setDate(app.date);
        setTime(app.time);
        setDescription(app.description);
      }
    } else {
      setDate("");
      setTime("");
      setDescription("");
    }
  }, [selected, appointments]);

  const submit = async (e) => {
    e.preventDefault();
    await api.put(`/appointments/${selected}`, {
      date,
      time,
      description,
      user: { id: userId }
    });
    alert("Appointment updated");
    refresh && refresh();
  };

  if (!userId) return null;

  return (
    <div>
      <h3>Update Your Appointment</h3>
      <form onSubmit={submit}>
        <select value={selected} onChange={e => setSelected(e.target.value)} required>
          <option value="">Select Appointment</option>
          {appointments.map(a => (
            <option key={a.id} value={a.id}>
              {a.date} {a.time} - {a.description}
            </option>
          ))}
        </select>
        <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
        <input type="time" value={time} onChange={e => setTime(e.target.value)} required />
        <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <button>Update</button>
      </form>
    </div>
  );
}
