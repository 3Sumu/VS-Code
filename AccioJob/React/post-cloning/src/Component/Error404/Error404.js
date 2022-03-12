import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div>
      <img
        src="https://cdn.mos.cms.futurecdn.net/PuXipAW3AXUzUJ4uYyxPKC-1200-80.jpg"
        alt="404 Error"
        width="100%"
        height="50%"
      />
      <button className="error">{<Link to="/">Home</Link>}</button>
    </div>
  );
}

export default Error404;
