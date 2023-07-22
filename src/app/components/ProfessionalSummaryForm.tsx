import { useResume } from "../hooks/UseResume";
import Resume from "../types/Resume";

export default function ProfessionalSummaryForm() {
  const [resume, updateStateAndLocalResume] = useResume();

  const onProfessionalSummaryChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const updatedResume: Resume = {
      ...resume,
      professionalSummary: e.target.value,
    };

    updateStateAndLocalResume(updatedResume);
  };

  return (
    <div className="container">
      <h1>Professional Summary</h1>
      <form className="row g-3">
        <div className="col-md-12">
          <label htmlFor="professionalSummary" className="form-label">
            Professional Summary
          </label>
          <textarea
            className="form-control"
            id="professionalSummary"
            rows={3}
            value={resume?.professionalSummary}
            onChange={onProfessionalSummaryChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
}
