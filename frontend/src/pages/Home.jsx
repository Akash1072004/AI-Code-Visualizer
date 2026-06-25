import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="flex flex-col justify-center items-center mt-40">

        <h1 className="text-6xl font-bold">
          Understand Your Code
        </h1>

        <p className="text-xl text-gray-400 mt-6">
          AI explains every line of your C++, Java and Python code.
        </p>

        <button className="mt-10 px-8 py-4 bg-blue-600 rounded-xl hover:bg-blue-700">
          Try Now
        </button>

      </div>

    </div>
  );
}

export default Home;