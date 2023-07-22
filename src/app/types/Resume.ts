import { Heading } from "./Heading";

export default class Resume {
  heading: Heading;
  professionalSummary: string;

  constructor({ heading = new Heading(), professionalSummary = "" } = {}) {
    this.heading = heading;
    this.professionalSummary = professionalSummary;
  }
}
