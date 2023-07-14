import { useEffect, useState } from "react";
import Resume from "../types/Resume";
import HeadingForm from "./HeadingForm";
import Welcome from "./Welcome";

export default function ResumeContainer() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showHeadingForm, setShowHeadingForm] = useState(false);

  const onStart = () => {
    setShowWelcome(false);
    setShowHeadingForm(true);
  };

  useEffect(() => {
    localStorage.getItem("resume")
      ? ""
      : localStorage.setItem("resume", JSON.stringify(new Resume()));
  }, []);
  return (
    <>
      {showWelcome && <Welcome onStart={onStart} />}
      {showHeadingForm && <HeadingForm />}
    </>
  );
}
