import React, { useState } from "react";
import Promisses2 from "./Promisses2";
import Promisses3 from "./Promisses3";

const Promisses = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const customPromise = (condition, successValue, failureValue) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (condition) {
          resolve(successValue);
        } else {
          reject(failureValue);
        }
      }, 1000);
    });
  };

  const handlePromise = () => {
    const condition = true;
    customPromise(condition, "Success", "Failure")
      .then((result) => {
        setResult(result);
        setError(null);
      })
      .catch((error) => {
        setResult(null);
        setError(error);
      });
  };

  return (
    <div>
      <div>
        <button onClick={handlePromise}>Run Promise</button>
        {result && <p>Promise resolved: {result}</p>}
        {error && <p>Promise rejected: {error}</p>}
      </div>
      <br />
      <div>
        <Promisses2 />
      </div>
      <div>
        <Promisses3 />
      </div>
    </div>
  );
};

export default Promisses;
