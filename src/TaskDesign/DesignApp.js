import React from "react";
import Heading from "./Heading";
import IdName from "./IdName";
import AustinData from "./AustinData";
import "./Design.css";
import Todopractise from "./Todopractise";
const DesignApp = () => {
  return (
    <div>
      <div className="Container_div">
        <Heading />
        <div className="content_div">
          <IdName />
          <div className="Data_div">
            <AustinData />
          </div>
        </div>
      </div>
      <div>
        <Todopractise />
      </div>
    </div>
  );
};

export default DesignApp;
