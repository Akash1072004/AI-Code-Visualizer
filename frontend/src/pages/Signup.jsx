import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    try {
      await axios.post(
        `${API}/api/auth/register`,
        {
          name,
          email,
          password,
        }
      );

      alert("Registration Successful");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Signup Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center">

      <div className="bg-gray-800 w-[420px] rounded-2xl shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-center text-white">
          AI Code Visualizer
        </h1>

        <p className="text-center text-gray-400 mt-2 mb-8">
          Create your account
        </p>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-4 rounded-lg bg-gray-700 text-white mb-4 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 rounded-lg bg-gray-700 text-white mb-4 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 rounded-lg bg-gray-700 text-white mb-6 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={signup}
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold"
        >
          Create Account
        </button>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?
          <Link
            to="/"
            className="text-blue-400 ml-2 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Signup;