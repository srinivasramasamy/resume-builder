import Heading from "./Heading";

export default class Resume {
  heading: Heading;

  constructor(heading: Heading = new Heading()) {
    this.heading = heading;
  }
}
