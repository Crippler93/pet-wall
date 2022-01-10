export class Pet {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public missingDate: Date,
    public imageURL: string
  ) {}
}
