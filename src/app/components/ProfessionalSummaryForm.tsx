export default function ProfessionalSummaryForm() {
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
          ></textarea>
        </div>
      </form>
    </div>
  );
}
