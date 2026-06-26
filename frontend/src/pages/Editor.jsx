import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
        "http://localhost:5000/api/analyze",
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
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
      }}
    >
      <div style={{ width: "50%" }}>
        <h2>Code Editor</h2>

        <textarea
          rows="25"
          style={{
            width: "100%",
            fontSize: "16px",
            padding: "10px",
          }}
          placeholder="Paste your code here..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <div
          style={{
            marginTop: "15px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            onClick={analyzeCode}
            style={{
              padding: "12px 25px",
              cursor: "pointer",
            }}
          >
            {loading ? "Analyzing..." : "Analyze"}
          </button>

          <button
            onClick={() => navigate("/history")}
            style={{
              padding: "12px 25px",
              cursor: "pointer",
            }}
          >
            History
          </button>
        </div>
      </div>

      <div
        style={{
          width: "50%",
          whiteSpace: "pre-wrap",
          background: "#111",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          overflowY: "auto",
          maxHeight: "700px",
        }}
      >
        <h2>AI Response</h2>

        {analysis || "Your AI analysis will appear here..."}
      </div>
    </div>
  );
}

export default Editor;