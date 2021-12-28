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


  static enrollStudents(){
    return 'ENROLLING STUDENTS!'
  }
}


export class Point{
  x:number;
  y:number;
  constructor(x:number, y:number){
    this.x = x;
    this.y = y;
  }


  static distance(a:Point, b:Point){
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}