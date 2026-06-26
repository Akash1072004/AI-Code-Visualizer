import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MonacoEditor from "@monaco-editor/react";
import Navbar from "../components/Navbar";
const API = import.meta.env.VITE_API_URL;

function Editor() {
  const navigate = useNavigate();

  const [code, setCode] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeCode = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const res = await axios.post(
        `${API}/api/analyze`,
        { code },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAnalysis(res.data.analysis);
    } catch (err) {
      console.log(err);
      alert("Analysis Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-900 p-8">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-4xl font-bold text-white mb-8">
            AI Code Visualizer
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Left Panel */}
            <div className="bg-gray-800 rounded-2xl shadow-xl p-5">

              <h2 className="text-2xl font-semibold text-white mb-5">
                Code Editor
              </h2>

              <MonacoEditor
                height="500px"
                defaultLanguage="cpp"
                theme="vs-dark"
                value={code}
                onChange={(value) => setCode(value || "")}
              />

              <div className="flex gap-4 mt-6">

                <button
                  onClick={analyzeCode}
                  className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-lg text-white font-semibold"
                >
                  {loading ? "Analyzing..." : "🚀 Analyze"}
                </button>

              </div>

            </div>

            {/* Right Panel */}
            <div className="bg-gray-800 rounded-2xl shadow-xl p-6">

              <h2 className="text-2xl font-semibold text-white mb-5">
                AI Analysis
              </h2>

              <div className="bg-black rounded-xl p-5 h-[570px] overflow-y-auto">

                <pre className="text-green-400 whitespace-pre-wrap leading-7">
                  {analysis || "🤖 AI analysis will appear here after clicking Analyze."}
                </pre>

              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Editor;