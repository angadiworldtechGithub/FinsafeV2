import "./Admin.css";
import { useState } from "react";

export default function Admin() {
  const [email, setEmail] = useState("");
  return (
    <div>
      <h1>Admin Page</h1>
      <p>User Email</p>
      <input
        type="text"
        value={email}
        onChange={(target) => setEmail(target.value)}
      ></input>
      <h2>User Docs List</h2>
    </div>
  );
}
