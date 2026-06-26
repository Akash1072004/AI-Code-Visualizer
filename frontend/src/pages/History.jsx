import { useEffect, useState } from "react";
import axios from "axios";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/history",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setHistory(res.data.history);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Analysis History</h1>

      {
        history.map((item) => (

          <div
            key={item._id}
            style={{
              border: "1px solid gray",
              marginTop: "20px",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h3>Code</h3>

            <pre>{item.code}</pre>

            <h3>Analysis</h3>

            <pre>{item.analysis}</pre>

            <small>
              {new Date(item.createdAt).toLocaleString()}
            </small>

          </div>

        ))
      }

    </div>
  );
}

export default History;