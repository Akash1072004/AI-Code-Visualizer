import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful");

      navigate("/editor");
    } catch (err) {
      alert("Login Failed");
      console.log(err);
    }
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "80px auto",
      }}
    >
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={login}
          style={{ padding: "10px 20px" }}
        >
          Login
        </button>

        <button
          onClick={() => navigate("/signup")}
          style={{ padding: "10px 20px" }}
        >
          Signup
        </button>
      </div>
    </div>
  );
}

export default Login;