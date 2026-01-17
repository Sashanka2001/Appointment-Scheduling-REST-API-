import { useState } from "react";
import api from "../api/api";

export default function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/users", { name, email });
    alert("User created");
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={submit}>
      <h3>Create User</h3>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button>Create</button>
    </form>
  );
}
