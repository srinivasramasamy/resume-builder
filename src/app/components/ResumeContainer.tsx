import { useEffect, useState } from "react";
import { Page } from "../types/Page";
import Resume from "../types/Resume";
import HeadingForm from "./HeadingForm";
import ProfessionalSummaryForm from "./ProfessionalSummaryForm";
import Welcome from "./Welcome";

export default function ResumeContainer() {
  const [page, setPage] = useState<Page>(Page.Welcome);

  useEffect(() => {
    localStorage.getItem("resume")
      ? ""
      : localStorage.setItem("resume", JSON.stringify(new Resume()));
  }, []);
  return (
    <>
      {page === Page.Welcome && <Welcome onStart={setPage} />}
      {page === Page.HeadingForm && <HeadingForm onPageChange={setPage} />}
      {page === Page.ProfessionalSummaryForm && <ProfessionalSummaryForm />}
    </>
  );
}
