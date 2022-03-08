import React from "react";

function Company({ jobs, value, setValue }) {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => {
        return (
          <button
            key={item.id}
            onClick={() => setValue(index)}
            className={`job-btn ${index === value && "ative-btn"}`}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
}

export default Company;
