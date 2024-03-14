export default class Job {
  title: string;
  employer: string;
  location: string;
  startDate: string;
  endDate: string;
  descriptions: string[];

  constructor({
    title = "",
    employer = "",
    location = "",
    startDate = "",
    endDate = "",
    descriptions = [],
  } = {}) {
    this.title = title;
    this.employer = employer;
    this.location = location;
    this.startDate = startDate;
    this.endDate = endDate;
    this.descriptions = descriptions;
  }
}
