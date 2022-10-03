import React from "react";
//import Data from "../data.json";
import Developers from "./developers";
import { useState, useEffect } from "react";
import axios from "axios";
function Mdevelopers() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/getdata")
      .then((response) => {
        console.log(response.data);
        setData(response.data.developer);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      {data.map((developer) => {
        return <Developers developer={developer} />;
      })}
    </div>
  );
}

export default Mdevelopers;
