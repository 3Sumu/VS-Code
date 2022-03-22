import React, { useState, useCallback } from "react";

const ReactMemo = () => {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript", "React"]);

  const handleChangeInput = (e) => {
    console.log(" inside Handle chnage");
    setSkill(e.target.value);
  };

  const handleAddSkill = () => {
    console.log("Adding skills ");
    setSkills(skills.concat(skill));
  };

  // const handleRemoveSkill = (skill) => {
  //     setSkills(skills.filter(s=>s!==skill))

  // }
  const handleRemoveSkill = useCallback(
    (skill) => {
      console.log("Entered handle remove skill");
      setSkills(skills.filter((s) => s !== skill));
    },
    [skills]
  );

  return (
    <>
      {console.log("main html rnder")}
      <input type="text" onChange={handleChangeInput} />
      <button onClick={handleAddSkill}>Add Skill</button>
      <SkillList skills={skills} handleRemoveSkill={handleRemoveSkill} />
    </>
  );
};

export default ReactMemo;

const SkillList = React.memo(({ skills, handleRemoveSkill }) => {
  console.log("rerendering");

  return (
    <ul>
      {skills.map((skill, i) => (
        <li key={i} onClick={() => handleRemoveSkill(skill)}>
          {skill}
        </li>
      ))}
    </ul>
  );
});
