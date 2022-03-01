import React from "react";
import "./CollegeStudent.css";

class CollegeStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          name: "Lakshman",
          bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, tenetur",
          course: "Full Stack Web Dev",
          techStack: "MERN",
          batch: "Batch 11",
        },
        {
          name: "Suman",
          bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis aliquam blanditiis assumenda nobis alias veniam?",
          course: "Full Stack Web Dev",
          techStack: "MERN",
          batch: "Batch 12",
        },
        {
          name: "Payel",
          bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis aliquam blanditiis assumenda nobis alias veniam?",
          course: "Full Stack Web Dev",
          techStack: "MERN",
          batch: "Batch 13",
        },
      ],
    };
  }

  render() {
    const { students } = this.state;

    return (
      <>
        {students.map((student, index) => (
          <div className="Student-data" key={index}>
            <h2>{student.name}</h2>
            <p>{student.bio}</p>
            <h3>Course: {student.course}</h3>
            <h3>Tech Stack: {student.techStack}</h3>
            <h3>Batch: {student.batch}</h3>
          </div>
        ))}
      </>
    );
  }
}

export default CollegeStudent;
