import { useState } from "react";

function EducationForm() {
  const [collegeName, setCollegeName] = useState<string>("");
  const [collegeLocation, setCollegeLocation] = useState<string>("");
  const [degree, setDegree] = useState<string>("");
  const [fieldOfStudy, setFieldOfStudy] = useState<string>("");

  return (
    <div className="container">
      <h1>Education</h1>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="collegeName" className="form-label">
            College Name
          </label>
          <input
            type="text"
            className="form-control"
            id="collegeName"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCollegeName(e.target.value)
            }
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="collegeLocation" className="form-label">
            College Location
          </label>
          <input
            type="text"
            className="form-control"
            id="collegeLocation"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCollegeLocation(e.target.value)
            }
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="degree" className="form-label">
            Degree
          </label>
          <input
            type="text"
            className="form-control"
            id="degree"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDegree(e.target.value)
            }
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="fieldOfStudy" className="form-label">
            Field of Study
          </label>
          <input
            type="text"
            className="form-control"
            id="fieldOfStudy"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFieldOfStudy(e.target.value)
            }
          />
        </div>
      </form>
    </div>
  );
}

export default EducationForm;
