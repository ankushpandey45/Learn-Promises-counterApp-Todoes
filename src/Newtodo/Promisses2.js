import React, { useState } from "react";

const Promisses2 = () => {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const mypromisses = (condition, successval, rejectedval) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (condition) {
          resolve(successval);
        } else {
          reject(rejectedval);
        }
      }, 1000);
    });
  };
  const hnadleBtn = async () => {
    try {
      const condition = true;
      const result = await mypromisses(condition, "success", "rejected");

      setResult(result);
      setError(null);
    } catch (error) {
      setResult(null);
      setError(error);
    }
  };
  return (
    <div>
      <button onClick={hnadleBtn}>Run Promise</button>
      {result && <p>promise resolved:{result}</p>}
      {error && <p>promise rejected:{error}</p>}
    </div>
  );
};

export default Promisses2;
