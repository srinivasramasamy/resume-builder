import { Heading } from "./Heading";

export default class Resume {
  heading: Heading;
  professionalSummary: string;
  skills: string[];

  constructor({
    heading = new Heading(),
    professionalSummary = "",
    skills = [],
  } = {}) {
    this.heading = heading;
    this.professionalSummary = professionalSummary;
    this.skills = skills;
  }
}
