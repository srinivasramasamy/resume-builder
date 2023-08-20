import { useState } from "react";
import { useResume } from "../hooks/UseResume";
import Resume from "../types/Resume";
import List from "./List";

export default function SkillsForm() {
  const [resume, updateStateAndLocalResume] = useResume();
  const [skill, setSkill] = useState<string>("");

  const removeItem = (index: number) => {
    const updatedResume: Resume = {
      ...resume,
      skills: [...resume?.skills.filter((e, i) => i !== index)],
    };

    updateStateAndLocalResume(updatedResume);
  };

  const addSkill = (e: React.KeyboardEvent) => {
    const enter: boolean = e.code === "Enter";
    if (enter) {
      const updatedResume: Resume = {
        ...resume,
        skills: [...resume?.skills, skill],
      };

      updateStateAndLocalResume(updatedResume);
    }
  };

  return (
    <div className="container">
      <h1>Skills</h1>
      <input
        type="text"
        className="form-control"
        placeholder="Add Skill"
        onChange={(e) => setSkill(e.target.value)}
        onKeyDown={addSkill}
      />

      <List items={resume.skills} removeItem={removeItem} />
    </div>
  );
}
