import React, { useState, useEffect } from "react";

const Cards = () => {
  const [data, setData] = useState([]);
  const Api = "https://jsonplaceholder.typicode.com/comments";
  const Getapi = async (url) => {
    const result = await fetch(url);
    const Data = await result.json();
    setData(Data);  
    console.log(Data);
  };
  useEffect(() => {
    Getapi(Api);
  }, []);

  return (
    <div>
      {data?.map((item, id) => (
        <div>
          <ul>
            <li key={id}>{item.userId}</li>
            <li>{item.email}</li>
            <li>{item.body}</li>
            <li>{item.name}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Cards;
