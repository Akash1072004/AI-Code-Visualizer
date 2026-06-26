import { Link, useNavigate } from "react-router-dom";
import {
  FaCode,
  FaHistory,
  FaSignOutAlt,
  FaUserShield,
} from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        <div className="flex items-center gap-3">
          <FaCode className="text-blue-500 text-3xl" />

          <h1 className="text-2xl font-bold">
            AI Code Visualizer
          </h1>
        </div>

        <div className="flex items-center gap-6">

          <span className="text-gray-300">
            Welcome, <span className="text-blue-400">{user?.name}</span>
          </span>

          <Link
            to="/editor"
            className="hover:text-blue-400"
          >
            Editor
          </Link>

          <Link
            to="/history"
            className="flex items-center gap-2 hover:text-blue-400"
          >
            <FaHistory />
            History
          </Link>

          {user?.isAdmin && (
            <Link
              to="/admin"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg"
            >
              <FaUserShield />
              Admin
            </Link>
          )}

          <button
            onClick={logout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
          >
            <FaSignOutAlt />
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;

