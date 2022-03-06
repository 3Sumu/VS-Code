import React, { useEffect, useState } from "react";
import data from "../Resources/data";
import Lists from "./Lists";

function Birthdays() {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);

  //backend function which returns the data
  const readData = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 4000);
    });
  };

  useEffect(() => {
    const getPeopleFunc = async () => {
      const readDataPeople = await readData();
      if (readDataPeople.length) {
        setPeople(readDataPeople);
        setLoading(false);
      }
    };
    getPeopleFunc();
  }, []);

  const clearAll = () => {
    setPeople([]);
  };

  const removeThisPerson = (id) => {
    setPeople(people.filter((peeps) => peeps.id !== id));
  };

  return (
    <main>
      <section className="container">
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <>
            <h3>{people.length}Birthdays Today</h3>
            <Lists people={people} removeThisPerson={removeThisPerson} />
            <button onClick={clearAll}>Clear All</button>
          </>
        )}
      </section>
    </main>
  );
}

export default Birthdays;
