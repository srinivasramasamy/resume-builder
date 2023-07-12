import { Link } from "./Link";
import Name from "./Name";

export class Heading {
  name: Name;
  phoneNumber: string;
  email: string;
  city: string;
  state: string;
  zip: string;
  links: Link[];

  constructor({
    name = new Name(),
    phoneNumber = "",
    email = "",
    city = "",
    state = "",
    zip = "",
    links = [],
  } = {}) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.links = links;
  }
}
