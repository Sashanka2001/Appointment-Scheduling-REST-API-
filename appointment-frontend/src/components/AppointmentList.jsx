import api from "../api/api";

export default function AppointmentList({ appointments, refresh }) {

  const remove = async (id) => {
    await api.delete(`/appointments/${id}`);
    refresh();
  };

  return (
    <div>
      <h3>View Appointments - Admin</h3>

      <table border="1">
        <thead>
          <tr>
            <th>User_ID</th>
            <th>Date</th>
            <th>Time</th>
            <th>Description</th>
            <th>User</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map(a => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.date}</td>
              <td>{a.time}</td>
              <td>{a.description}</td>
              <td>{a.user?.name}</td>
              <td>
                <button onClick={() => remove(a.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
