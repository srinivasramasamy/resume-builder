import Education from "./Education";
import { Heading } from "./Heading";
import Job from "./Job";

export default class Resume {
  heading: Heading;
  professionalSummary: string;
  skills: string[];
  educations: Education[];
  jobs: Job[];

  constructor({
    heading = new Heading(),
    professionalSummary = "",
    skills = new Array<string>(),
    educations = new Array<Education>(),
    jobs = new Array<Job>(),
  } = {}) {
    this.heading = heading;
    this.professionalSummary = professionalSummary;
    this.skills = skills;
    this.educations = educations;
    this.jobs = jobs;
  }
}
