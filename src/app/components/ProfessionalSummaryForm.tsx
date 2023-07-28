import { useResume } from "../hooks/UseResume";
import { Page } from "../types/Page";
import Resume from "../types/Resume";

interface IProps {
  setPage: (page: Page) => void;
}

export default function ProfessionalSummaryForm({ setPage }: IProps) {
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
        <div className="col-6">
          <button
            id="back"
            type="button"
            className="btn btn-dark"
            onClick={() => setPage(Page.HeadingForm)}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
}
