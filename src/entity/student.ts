export class StudentEntity {
  constructor(
    public readonly id: number,
    public readonly familyName: string,
    public readonly givenName: string,
    public readonly createdAt: Date,
  ) {}

  fullName(): string {
    return `${this.familyName} ${this.givenName}`;
  }
}
