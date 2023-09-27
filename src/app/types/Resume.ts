import Education from "./Education";
import { Heading } from "./Heading";

export default class Resume {
  heading: Heading;
  professionalSummary: string;
  skills: string[];
  educations: Education[];

  constructor({
    heading = new Heading(),
    professionalSummary = "",
    skills = new Array<string>(),
    educations = new Array<Education>(),
  } = {}) {
    this.heading = heading;
    this.professionalSummary = professionalSummary;
    this.skills = skills;
    this.educations = educations;
  }
}
