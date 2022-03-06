import React from "react";

function Lists({ people, removeThisPerson }) {
  return (
    <>
      {people.map((person, index) => {
        const { id, name, image, age } = person;
        return (
          <div className="person" key={index}>
            <img src={image} alt={name} />
            <div className="name">
              <h4>
                {name}
                {"       "}
                <i
                  style={{ color: "red" }}
                  className="fa fa-times"
                  aria-hidden="true"
                  onClick={() => removeThisPerson(id)}
                ></i>
              </h4>
              <p>{age} years</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Lists;
