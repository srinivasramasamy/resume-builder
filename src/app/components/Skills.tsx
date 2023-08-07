import { useResume } from "../hooks/UseResume";
import List from "./List";

export default function Skills() {
  const [resume] = useResume();

  return (
    <div className="container">
      <h1>Skills</h1>
      <List items={resume.skills} />
    </div>
  );
}
