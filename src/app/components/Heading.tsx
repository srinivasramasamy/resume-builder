import { useEffect, useState } from "react";
import Resume from "../types/Resume";
import { getLocal, setLocal } from "../util/Utility";

const useResume = (): [Resume, (resume: Resume) => void] => {
  const [resume, setResume] = useState<Resume>(new Resume());
  useEffect(() => {
    setResume(getLocalResume());
  }, []);
  const updateStateAndLocalResume = (resume: Resume) => {
    setResume(resume);
    setLocalResume(resume);
  };
  return [resume, updateStateAndLocalResume];
};

const getLocalResume = (): Resume => {
  return JSON.parse(getLocal("resume")!);
};

const setLocalResume = (resume: Resume) => {
  setLocal("resume", JSON.stringify(resume));
};

export default function Heading() {
  const [resume, updateStateAndLocalResume] = useResume();

  const onFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedResume: Resume = {
      ...resume,
      heading: {
        ...resume?.heading,
        name: { ...resume?.heading.name, firstName: e.target.value },
      },
    };

    updateStateAndLocalResume(updatedResume);
  };

  const onLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedResume: Resume = {
      ...resume,
      heading: {
        ...resume?.heading,
        name: { ...resume?.heading.name, lastName: e.target.value },
      },
    };

    updateStateAndLocalResume(updatedResume);
  };

  const onCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedResume: Resume = {
      ...resume,
      heading: {
        ...resume?.heading,
        city: e.target.value,
      },
    };

    updateStateAndLocalResume(updatedResume);
  };

  const onStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedResume: Resume = {
      ...resume,
      heading: {
        ...resume?.heading,
        state: e.target.value,
      },
    };

    updateStateAndLocalResume(updatedResume);
  };

  const onZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedResume: Resume = {
      ...resume,
      heading: {
        ...resume?.heading,
        zip: e.target.value,
      },
    };

    updateStateAndLocalResume(updatedResume);
  };

  const onPhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedResume: Resume = {
      ...resume,
      heading: {
        ...resume?.heading,
        phoneNumber: e.target.value,
      },
    };

    updateStateAndLocalResume(updatedResume);
  };

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedResume: Resume = {
      ...resume,
      heading: {
        ...resume?.heading,
        email: e.target.value,
      },
    };

    updateStateAndLocalResume(updatedResume);
  };

  return (
    <div className="container">
      <h1>Heading</h1>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            onChange={onFirstNameChange}
            value={resume?.heading.name.firstName}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="lasttName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            onChange={onLastNameChange}
            value={resume?.heading.name.lastName}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            onChange={onCityChange}
            value={resume.heading.city}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <input
            type="text"
            className="form-control"
            id="state"
            onChange={onStateChange}
            value={resume.heading.state}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="zip" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            id="zip"
            onChange={onZipChange}
            value={resume.heading.zip}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="phoneNumber" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            onChange={onPhoneNumberChange}
            value={resume.heading.phoneNumber}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={onEmailChange}
            value={resume.heading.email}
          />
        </div>
        <div className="col-6">
          <button id="back" type="button" className="btn btn-dark">
            Back
          </button>
        </div>
        <div className="col-6 d-md-flex justify-content-md-end">
          <button
            id="next"
            type="button"
            className="btn btn-dark"
            onClick={() => {}}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
