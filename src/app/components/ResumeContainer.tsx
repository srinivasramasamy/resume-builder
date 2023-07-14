import { useEffect, useState } from "react";
import Resume from "../types/Resume";
import HeadingForm from "./HeadingForm";
import Welcome from "./Welcome";

export default function ResumeContainer() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showHeadingForm, setShowHeadingForm] = useState(false);

  useEffect(() => {
    localStorage.getItem("resume")
      ? ""
      : localStorage.setItem("resume", JSON.stringify(new Resume()));
  }, []);
  return (
    <>
      {showWelcome && <Welcome />}
      {showHeadingForm && <HeadingForm />}
    </>
  );
}
