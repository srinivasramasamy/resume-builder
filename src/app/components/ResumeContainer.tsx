import { useEffect } from "react";
import Resume from "../types/Resume";
import Heading from "./Heading";

export default function ResumeContainer() {
  useEffect(() => {
    localStorage.getItem("resume")
      ? ""
      : localStorage.setItem("resume", JSON.stringify(new Resume()));
  }, []);
  return <Heading />;
}
