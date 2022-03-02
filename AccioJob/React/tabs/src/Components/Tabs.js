import React from "react";
import Tab from "./Tab";

function Tabs({ tabNames }) {
  return (
    <div className="tabs">
      {tabNames.map((tabName, index) => (
        <Tab tabName={tabName} key={index} />
      ))}
    </div>
  );
}

export default Tabs;
