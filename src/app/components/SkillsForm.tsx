import { useState } from "react";
import { useResume } from "../hooks/UseResume";
import { Page } from "../types/Page";
import Resume from "../types/Resume";
import List from "./List";

interface IProps {
  setPage: (page: Page) => void;
}

export default function SkillsForm({ setPage }: IProps) {
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
      setSkill("");
    }
  };

  return (
    <div className="container">
      <h1>Skills</h1>
      <div className="col-6">
        <input
          type="text"
          className="form-control"
          placeholder="Add Skill"
          onChange={(e) => setSkill(e.target.value)}
          onKeyDown={addSkill}
          value={skill}
        />
      </div>
      <br />
      <List items={resume.skills} removeItem={removeItem} />
      <br />
      <div className="col-6">
        <button
          id="back"
          type="button"
          className="btn btn-dark"
          onClick={() => setPage(Page.ProfessionalSummaryForm)}
        >
          Back
        </button>
      </div>
    </div>
  );
}
