import React, { useState, useEffect } from "react";
import "./FetchApi.css";

const FetchApi = () => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const result = await response.json();
        setFetchedData(result);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Fetched Data:-</h2>
      <div className="table_div">
        <table>
          <thead>
            <tr>
              <td>UserId</td>
              <td>Body</td>
              <td>Name</td>
            </tr>
          </thead>
          <tbody>
            {fetchedData.map((post, id) => (
              <tr key={id}>
                <td>{post.userId}</td>
                <td>{post.body}</td>
                <td>{post.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FetchApi;
