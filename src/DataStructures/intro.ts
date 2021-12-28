export class Student {
  firstName?: string;
  lastName?: string;
  tardies: number;
  scores: any[];
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.tardies = 0;
    this.scores = [];
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return "YOU ARE EXPELLED!!!"
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
  }

  addScore(score: number) {
    this.scores.push(score)
  }

  calculateAverage() {
    let sum = this.scores.reduce((a, b) => {return a + b })
    return sum/this.scores.length;
  }
}


