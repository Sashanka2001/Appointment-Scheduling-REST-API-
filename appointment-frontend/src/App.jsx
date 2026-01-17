import { useEffect, useState } from "react";
import api from "./api/api";
import UserForm from "./components/UserForm";
import AppointmentForm from "./components/AppointmentForm";
import AppointmentList from "./components/AppointmentList";
import UserAppointments from "./components/UserAppointments";
import UserAppointmentUpdate from "./components/UserAppointmentUpdate";

export default function App() {
  const [appointments, setAppointments] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  const loadAppointments = () => {
    api.get("/appointments").then(res => setAppointments(res.data));
  };
  const loadUsers = () => {
    api.get("/users").then(res => setUsers(res.data));
  };

  useEffect(() => {
    loadAppointments();
    loadUsers();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Appointment Scheduling System</h2>

      <UserForm />
      <hr />

      <AppointmentForm refresh={loadAppointments} />
      <hr />

      <div>
        <h3>View Appointments - User</h3>
        <select value={selectedUser} onChange={e => setSelectedUser(Number(e.target.value))}>
          <option value="">Select User</option>
          {users.map(u => (
            <option key={u.id} value={u.id}>{u.name}</option>
          ))}
        </select>
      </div>
      <UserAppointments userId={selectedUser} />
      <hr />

      <AppointmentList
        appointments={appointments}
        refresh={loadAppointments}
      />
    </div>
  );
}
