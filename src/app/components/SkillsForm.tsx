import { useResume } from "../hooks/UseResume";
import List from "./List";

export default function SkillsForm() {
  const [resume] = useResume();

  const removeItem = (item: number) => {};

  return (
    <div className="container">
      <h1>Skills</h1>
      <List items={resume.skills} removeItem={removeItem} />
    </div>
  );
}
