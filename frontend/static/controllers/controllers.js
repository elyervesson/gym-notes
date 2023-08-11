const Endpoint = ""; // Backend url
const UserID = "64b6f84feb0d288448efb20a";
const ExercisesDayEndpoint =
  Endpoint + UserID + "/day/64b9c25ace3b0133f13ce773"; // TODO: Get this day-id from backend

const FUNCTIONALITY = {
  Exercises_day: "Exercises of the day",
  Days: "Days",
  Exercises: "Exercises",
};

class Controller {
  constructor(view) {
    this.view = view;

    this.showExercisesDay();

    this.view.bindShowExercisesDay(this.showExercisesDay);
    this.view.bindShowDays(this.showDays);
    this.view.bindShowExercises(this.showExercises);
  }

  showExercisesDay = () => {
    this.getData(FUNCTIONALITY.Exercises_day, (data, success) => {
      if (success) {
        if (data && data.exercises && data.exercises.length > 0) {
          this.view.displayExercisesDay(
            data.exercises.map((exercise) => new Exercise(exercise))
          );
          return;
        }
      }
      this.view.displayExercisesDay([]);
    });
  };

  showDays = () => {
    this.getData(FUNCTIONALITY.Days, (data, success) => {
      if (success) {
        if (data && data.length > 0) {
          this.view.displaysDays(data.map((day) => new Day(day)));
          return;
        }
      }
      this.view.displaysDays([]);
    });
  };

  showExercises = () => {
    this.getData(FUNCTIONALITY.Exercises, (data, success) => {
      if (success) {
        if (data && data.length > 0) {
          this.view.displayExercises(
            data.map((exercise) => new Exercise(exercise))
          );
          return;
        }
      }
      this.view.displayExercises([]);
    });
  };

  getData(functionality, callback) {
    // Ajax load
    let ajax = new XMLHttpRequest();
    // Watch request response
    ajax.onreadystatechange = function () {
      // Success - AJAX - Server Response readyState = 4 (request finished and response is ready)
      if (this.readyState == 4 && this.status == 200) {
        callback(JSON.parse(ajax.responseText), true);
      } else if (this.readyState == 4 && this.status != 200) {
        console.log("[ERROR] Error while parsing the json");
        callback(JSON.parse("{}"), false);
      }
    };

    if (functionality === FUNCTIONALITY.Exercises_day) {
      ajax.open("GET", ExercisesDayEndpoint, true);
    } else if (functionality === FUNCTIONALITY.Days) {
      ajax.open("GET", Endpoint + UserID + "/day", true);
    } else if (functionality === FUNCTIONALITY.Exercises) {
      ajax.open("GET", Endpoint + UserID + "/exercise", true);
    } else {
      callback(JSON.parse("{}"), false);
    }

    ajax.send();
  }
}
