import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="text-center mt-52 ">
      <h1 className="text-2xl font-bold p-10">Welcome to My Page</h1>
      <Link to="/home">
        <button className="border-2 border-green-800 m-10 p-5 bg-green-500">
          LOGIN TO HOME
        </button>
      </Link>
    </div>
  );
};

export default Welcome;
