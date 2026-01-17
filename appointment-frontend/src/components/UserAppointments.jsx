import { useEffect, useState } from "react";
import api from "../api/api";

export default function UserAppointments({ userId }) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (userId) {
      api.get("/appointments").then(res => {
        // Filter appointments for this user
        setAppointments(res.data.filter(a => a.user && a.user.id === userId));
      });
    }
  }, [userId]);

  if (!userId) return null;

  return (
    <div>
      <h3>Your Appointments</h3>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Time</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(a => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.date}</td>
              <td>{a.time}</td>
              <td>{a.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
