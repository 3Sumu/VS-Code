import React, { useState, useEffect } from "react";
import data from "./data";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const [people, setPeople] = useState(data);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let tempIndex = oldIndex + 1;
      if (tempIndex > people.length - 1) tempIndex = 0;
      return tempIndex;
    });
  };

  const prevSlide = () => {
    setIndex((oldIndex) => {
      let tempIndex = oldIndex - 1;
      if (tempIndex < 0) tempIndex = people.length - 1;
      return tempIndex;
    });
  };

  useEffect(() => {
    let slider = setTimeout(() => {
      setIndex((oldIndex) => {
        let ind = oldIndex + 1;
        if (ind > people.length - 1) ind = 0;
        return ind;
      });
    }, 2000);

    return () => {
      clearTimeout(slider);
    };
  }, [index]);

  return (
    <div className="section-center">
      {people.map((person, personIndex) => {
        const { id, name, image, title, quote } = person;

        let position = "nextSlide";
        if (personIndex === index) position = "activeSlide";
        if (
          personIndex === index - 1 ||
          (personIndex === people.length - 1 && index === 0)
        )
          position = "lastSlide";

        return (
          <article className={position} key={id}>
            <img src={image} alt={name} className="person-img" />
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Review;
