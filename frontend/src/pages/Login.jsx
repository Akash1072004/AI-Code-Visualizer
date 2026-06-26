import { useState, useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Remove this after testing if you want
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) navigate("/editor");
  // }, [navigate]);

  const login = async () => {
    try {
      const res = await axios.post(
        `${API}/api/auth/login`,
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/editor");
    } catch (err) {
      alert("Invalid Email or Password");
    }
  };

  // Google Login
  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const res = await axios.post(
        `${API}/api/auth/google`,
        {
          credential: credentialResponse.credential,
        }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/editor");
    } catch (err) {
      console.log(err);
      alert("Google Login Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center">
      <div className="bg-gray-800 w-[420px] rounded-2xl shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-center text-white">
          AI Code Visualizer
        </h1>

        <p className="text-center text-gray-400 mt-2 mb-8">
          Login to continue
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 rounded-lg bg-gray-700 text-white mb-4 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 rounded-lg bg-gray-700 text-white mb-6 outline-none"
        />

        <button
          onClick={login}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Login
        </button>

        <div className="flex justify-center my-5">
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => alert("Google Login Failed")}
          />
        </div>

        <p className="text-center text-gray-400 mt-6">
          Don't have an account?
          <Link
            to="/signup"
            className="text-blue-400 ml-2 hover:underline"
          >
            Signup
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;