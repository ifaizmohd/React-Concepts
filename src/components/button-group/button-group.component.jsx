import React, { memo, useEffect } from "react";
import "./button-group.styles.css";

const ButtonGroup = ({ viewComponent }) => {
  useEffect(() => {
    console.log("Button group mounted!");
  }, []);

  return (
    <div className="button-group-container">
      <button
        type="button"
        className="button"
        onClick={() => viewComponent("Add Data")}
      >
        Add Data
      </button>
      <button
        type="button"
        className="button"
        onClick={() => viewComponent("View Data")}
      >
        View Data
      </button>
      <button
        type="button"
        className="button"
        onClick={() => viewComponent("View Users")}
      >
        View Users
      </button>
      <button
        type="button"
        className="button"
        onClick={() => viewComponent("View Posts")}
      >
        View Posts
      </button>
    </div>
  );
};

export default memo(ButtonGroup);
