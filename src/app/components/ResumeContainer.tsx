import { useEffect, useState } from "react";
import { Page } from "../types/Page";
import Resume from "../types/Resume";
import HeadingForm from "./HeadingForm";
import ProfessionalSummaryForm from "./ProfessionalSummaryForm";
import Welcome from "./Welcome";

export default function ResumeContainer() {
  const [showPage, setShowPage] = useState<Page>(Page.Welcome);

  useEffect(() => {
    localStorage.getItem("resume")
      ? ""
      : localStorage.setItem("resume", JSON.stringify(new Resume()));
  }, []);
  return (
    <>
      {showPage === Page.Welcome && <Welcome onStart={setShowPage} />}
      {showPage === Page.HeadingForm && (
        <HeadingForm onPageChange={setShowPage} />
      )}
      {showPage === Page.ProfessionalSummaryForm && <ProfessionalSummaryForm />}
    </>
  );
}
