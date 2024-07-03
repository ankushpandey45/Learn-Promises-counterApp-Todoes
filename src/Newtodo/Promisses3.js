import React, { useState, useEffect } from "react";

const Promisses3 = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/data");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (error) {
        setData(null);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data && (
        <div>
          <h2>Data fetched:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default Promisses3;
