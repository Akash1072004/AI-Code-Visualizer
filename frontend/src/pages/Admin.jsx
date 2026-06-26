import { useEffect, useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

function Admin() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await axios.get(`${API}/api/admin/dashboard`);
      setData(res.data);
    } catch (err) { 
      console.log(err);
    }
  };

  if (!data) return <h2 style={{ color: "white" }}>Loading...</h2>;

  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
      }}
    >
      <h1>Admin Dashboard</h1>

      <h2>Total Users : {data.totalUsers}</h2>

      <h2>Total Analyses : {data.totalAnalyses}</h2>

      <br />

      <h2>Recent Users</h2>

      {data.recentUsers.map((user) => (
        <div
          key={user._id}
          style={{
            background: "#1e293b",
            padding: 15,
            marginTop: 10,
            borderRadius: 10,
          }}
        >
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}

      <br />

      <h2>Recent Analyses</h2>

      {data.recentAnalyses.map((item) => (
        <div
          key={item._id}
          style={{
            background: "#1e293b",
            padding: 15,
            marginTop: 15,
            borderRadius: 10,
          }}
        >
          <h3>{item.user.name}</h3>

          <pre>{item.code}</pre>
        </div>
      ))}
    </div>
  );
}

export default Admin;