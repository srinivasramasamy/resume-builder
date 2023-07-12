export default class Name {
  firstName: string;
  lastName: string;

  constructor({ firstName = "", lastName = "" } = {}) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
