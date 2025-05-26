import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App14() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter users based on search input
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>App14</h1>
      <h2>useEffect hook to fetch API</h2>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Search name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: "6px", fontSize: "14px", width: "200px" }}
        />
      </div>

      <ol>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <li key={user.id} style={{ marginBottom: "8px" }}>
              <strong>{user.name}</strong>, {user.email}, {user.phone}
            </li>
          ))
        ) : (
          <p>No user found</p>
        )}
      </ol>
    </div>
  );
}
