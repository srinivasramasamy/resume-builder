import { useResume } from "../hooks/UseResume";
import Resume from "../types/Resume";
import List from "./List";

export default function SkillsForm() {
  const [resume, updateStateAndLocalResume] = useResume();

  const removeItem = (index: number) => {
    const updatedResume: Resume = {
      ...resume,
      skills: [...resume?.skills.filter((e, i) => i !== index)],
    };

    updateStateAndLocalResume(updatedResume);
  };

  return (
    <div className="container">
      <h1>Skills</h1>
      <List items={resume.skills} removeItem={removeItem} />
    </div>
  );
}
