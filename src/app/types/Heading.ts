class Heading {
  name: Name;
  phoneNumber: number;
  email: string;
  city: string;
  state: string;
  zip: string;
  links: Link[];

  constructor(
    name: Name,
    phoneNumber: number,
    email: string,
    city: string,
    state: string,
    zip: string,
    links: Link[]
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
