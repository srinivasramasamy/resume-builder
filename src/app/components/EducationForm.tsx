import { useState } from "react";
import { useResume } from "../hooks/UseResume";
import Education from "../types/Education";
import { Page } from "../types/Page";
import Resume from "../types/Resume";
import List from "./List";

interface IProps {
  setPage: (page: Page) => void;
}

function EducationForm({ setPage }: IProps) {
  const [resume, updateStateAndLocalResume] = useResume();
  const [collegeName, setCollegeName] = useState<string>("");
  const [collegeLocation, setCollegeLocation] = useState<string>("");
  const [degree, setDegree] = useState<string>("");
  const [fieldOfStudy, setFieldOfStudy] = useState<string>("");

  const addEducation = () => {
    const education = new Education({
      collegeName: collegeName,
      collegeLocation: collegeLocation,
      degree: degree,
      fieldOfStudy: fieldOfStudy,
    });

    const updatedResume: Resume = {
      ...resume,
      educations: [...resume?.educations, education],
    };

    updateStateAndLocalResume(updatedResume);
    clearEducationInputs();
  };

  const clearEducationInputs = () => {
    setCollegeName("");
    setCollegeLocation("");
    setDegree("");
    setFieldOfStudy("");
  };

  const removeEducation = (index: number) => {
    const updatedResume: Resume = {
      ...resume,
      educations: [...resume?.educations.filter((e, i) => i !== index)],
    };

    updateStateAndLocalResume(updatedResume);
  };

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
            value={collegeName}
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
            value={collegeLocation}
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
            value={degree}
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
            value={fieldOfStudy}
          />
        </div>
        <div className="col-12 d-md-flex justify-content-md-center">
          <button
            id="Add"
            type="button"
            className="btn btn-dark"
            onClick={addEducation}
          >
            Add
          </button>
        </div>
        <div className="col-12">
          <List
            items={resume.educations.map((education) => education.collegeName)}
            removeItem={removeEducation}
          />
        </div>
        <div className="col-6">
          <button
            id="back"
            type="button"
            className="btn btn-dark"
            onClick={() => setPage(Page.SkillsForm)}
          >
            Back
          </button>
        </div>
        <div className="col-6 d-md-flex justify-content-md-end">
          <button
            id="next"
            type="button"
            className="btn btn-dark"
            onClick={() => setPage(Page.WorkHistory)}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default EducationForm;
