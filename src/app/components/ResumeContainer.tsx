import { useEffect, useState } from "react";
import { Page } from "../types/Page";
import Resume from "../types/Resume";
import HeadingForm from "./HeadingForm";
import Welcome from "./Welcome";

export default function ResumeContainer() {
  const [showPage, setShowPage] = useState<Page>(Page.Welcome);

  const onPageChange = (page: Page) => {
    setShowPage(page);
  };

  useEffect(() => {
    localStorage.getItem("resume")
      ? ""
      : localStorage.setItem("resume", JSON.stringify(new Resume()));
  }, []);
  return (
    <>
      {showPage === Page.Welcome && <Welcome onStart={onPageChange} />}
      {showPage === Page.HeadingForm && (
        <HeadingForm onPageChange={onPageChange} />
      )}
    </>
  );
}
