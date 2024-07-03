import React, { useState, useEffect } from "react";
import "./DogsApi.css";
const FetchApi2 = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.thedogapi.com/v1/breeds");
        const resData = await response.json();
        setApiData(resData);
        console.log(resData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="main_div">
        {apiData.map((item, id) => (
          <div key={id}>
            <div className="second_div">
              <img
                className="dogsImage"
                src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`}
                alt={item.name}
              />
              <div>
                <h4> Name : {item.name}</h4>
              </div>
              <br />
              <div>
                <h4> Life Span : {item.life_span}</h4>
              </div>
              <br />
              <div>
                <h4>Temperament : {item.temperament}</h4>
              </div>
              <br />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchApi2;
