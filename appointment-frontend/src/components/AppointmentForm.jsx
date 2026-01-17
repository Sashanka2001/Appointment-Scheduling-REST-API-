import { useState, useEffect } from "react";
import api from "../api/api";

export default function AppointmentForm({ refresh }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/users").then(res => setUsers(res.data));
  }, []);

  const submit = async (e) => {
    e.preventDefault();

    await api.post("/appointments", {
      date,
      time,
      description,
      user: { id: userId }
    });

    alert("Appointment created");
    refresh();
  };

  return (
    <form onSubmit={submit}>
      <h3>Create Appointment- User</h3>

      <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
      <input type="time" value={time} onChange={e => setTime(e.target.value)} required />
      <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />

      <select onChange={e => setUserId(e.target.value)} required>
        <option value="">Select User</option>
        {users.map(u => (
          <option key={u.id} value={u.id}>
            {u.name}
          </option>
        ))}
      </select>

      <button>Create</button>
    </form>
  );
}
