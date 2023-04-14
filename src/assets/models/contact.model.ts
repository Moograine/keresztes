export interface ContactModel {
  id: string,
  name: string,
  email: string,
  description: string,
  file: string,
  period: string,
  budget: string
}

export class Contact implements ContactModel {
  id = '';
  name = '';
  email = '';
  description = '';
  file = '';
  period = '';
  budget = '';

  constructor(id: string,
              name: string,
              email: string,
              description: string,
              file: string,
              period: string,
              budget: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.description = description;
    this.file = file;
    this.period = period;
    this.budget = budget;
  }
}
