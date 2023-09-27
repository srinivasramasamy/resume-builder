export default class Education {
  collegeName: string;
  collegeLocation: string;
  degree: string;
  fieldOfStudy: string;

  constructor({
    collegeName = "",
    collegeLocation = "",
    degree = "",
    fieldOfStudy = "",
  } = {}) {
    this.collegeName = collegeName;
    this.collegeLocation = collegeLocation;
    this.degree = degree;
    this.fieldOfStudy = fieldOfStudy;
  }
}
