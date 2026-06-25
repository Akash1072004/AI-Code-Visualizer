function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-slate-900 shadow-lg">
      <h1 className="text-2xl font-bold text-blue-500">
        AI Code Visualizer
      </h1>

      <div className="space-x-6">
        <button className="text-white hover:text-blue-400">
          Login
        </button>

        <button className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;