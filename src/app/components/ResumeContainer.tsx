import { useEffect, useState } from "react";
import Resume from "../types/Resume";
import HeadingForm from "./HeadingForm";

export default function ResumeContainer() {
  const [showHeading, setShowHeading] = useState(false);
  useEffect(() => {
    localStorage.getItem("resume")
      ? ""
      : localStorage.setItem("resume", JSON.stringify(new Resume()));
  }, []);
  return <>{showHeading && <HeadingForm />}</>;
}
