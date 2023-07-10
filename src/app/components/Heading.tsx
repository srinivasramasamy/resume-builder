import { useEffect, useState } from "react";
import Resume from "../types/Resume";
import { getLocal } from "../util/Utility";

const useLocalStorage = (): [
  string,
  (firstName: string) => void,
  string,
  (lastName: string) => void
] => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  useEffect(() => {
    const resume: Resume = getLocalResume();
    const {
      heading: {
        name: {
          firstName: firstNameFromLocal = "",
          lastName: lastNameFromLocal = "",
        } = {},
      } = {},
    } = resume || {};

    setFirstName(firstNameFromLocal);
    setLastName(lastNameFromLocal);
  }, []);

  return [firstName, setFirstName, lastName, setLastName];
};

const getLocalResume = (): Resume => {
  return JSON.parse(getLocal("resume")!);
};

export default function Heading() {
  const [firstName, setFirstName, lastName, setLastName] = useLocalStorage();
  const onFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const resume = getLocalResume();
    setFirstName(e.target.value);
    resume.heading.name.firstName = e.target.value;
    localStorage.setItem("resume", JSON.stringify(resume));
  };

  const onLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const resume = getLocalResume();
    setLastName(e.target.value);
    resume.heading.name.lastName = e.target.value;
    localStorage.setItem("resume", JSON.stringify(resume));
  };

  const onNext = () => {};

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
            value={firstName}
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
            value={lastName}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="city" />
        </div>
        <div className="col-md-3">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <input type="text" className="form-control" id="state" />
        </div>
        <div className="col-md-3">
          <label htmlFor="zip" className="form-label">
            Zip
          </label>
          <input type="text" className="form-control" id="zip" />
        </div>
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input type="number" className="form-control" id="phone" />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" />
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
            onClick={onNext}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
