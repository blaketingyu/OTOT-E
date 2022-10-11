import React from "react";
import { useNavigate } from "react-router";

const B4Button = () => {
  const navigate = useNavigate();
  return (
    <div
      className="py-20"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        type="button"
        onClick={() => navigate("/B4")}
        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Click here to go to Task B4
      </button>
    </div>
  );
};

export default B4Button;
