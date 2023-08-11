class Exercise {
  constructor({ name, execution, weight, break: breakTime }) {
    this.name = name;
    this.execution = execution;
    this.weight = weight;
    this.break = breakTime;
  }
}

class Day {
  static index = 0;

  constructor({ exercises }) {
    this.index = 0;
    this.exercises = exercises;
  }
}
