import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
const API = import.meta.env.VITE_API_URL;

function History() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetchHistory();
    }, []);

    const fetchHistory = async () => {
        try {
            const token = localStorage.getItem("token");

            const res = await axios.get(
                `${API}/api/history`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setHistory(res.data.history);
        } catch (err) {
            console.log(err);
            console.log(err.response);

            alert(
                err.response?.data?.message ||
                err.response?.data ||
                err.message
            );
        }
    };

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-slate-900 p-8">
                <div className="max-w-6xl mx-auto">

                    <h1 className="text-4xl font-bold text-white mb-8">
                        Analysis History
                    </h1>

                    {history.length === 0 ? (
                        <p className="text-gray-400">
                            No history found.
                        </p>
                    ) : (
                        <div className="space-y-6">
                            {history.map((item) => (
                                <div
                                    key={item._id}
                                    className="bg-gray-800 p-6 rounded-xl shadow-lg"
                                >
                                    <h2 className="text-blue-400 font-semibold mb-3">
                                        {new Date(item.createdAt).toLocaleString()}
                                    </h2>

                                    <h3 className="text-white font-bold mb-2">
                                        Code
                                    </h3>

                                    <pre className="bg-black text-green-400 p-4 rounded overflow-x-auto">
                                        {item.code}
                                    </pre>

                                    <h3 className="text-white font-bold mt-5 mb-2">
                                        Analysis
                                    </h3>

                                    <pre className="bg-black text-white p-4 rounded whitespace-pre-wrap">
                                        {item.analysis}
                                    </pre>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </div>
        </>
    );
}

export default History;