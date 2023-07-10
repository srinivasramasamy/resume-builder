import Name from "./Name";

export class Heading {
  name: Name;
  phoneNumber: number | null;
  email: string;
  city: string;
  state: string;
  zip: string;
  links: Link[];

  constructor(
    name: Name = new Name(),
    phoneNumber: number | null = null,
    email: string = "",
    city: string = "",
    state: string = "",
    zip: string = "",
    links: Link[] = []
  ) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.links = links;
  }
}
