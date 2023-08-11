class View {
  constructor() {
    this.exercisesDayAction = document.getElementById("exercises-day");
    this.daysAction = document.getElementById("days");
    this.exercisesAction = document.getElementById("exercises");

    this.closeMenuAction = document.getElementById("close-menu");

    this.createDiv = document.getElementById("create-div");
    this.createButton = document.getElementById("create-button");
  }

  fillNoDataWarning(functionality) {
    document.getElementById("content").innerHTML =
      '<h2 class="screen-tittle text-center">' +
      functionality +
      '</h2><div class="alert alert-warning" role="alert">There is no data to show!</div>';
  }

  populateCardExerciseDay(name, execution, weight, breakTime) {
    let cardContent =
      '<div class="col-lg-4 card-custom">' +
      '  <div class="card">' +
      '    <div class="card-body">' +
      '      <div class="row justify-content-between">' +
      '        <h5 class="col-auto card-title">' +
      name +
      "        </h5>" +
      '        <div class="col-1 form-check">' +
      '          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">' +
      "        </div>" +
      "      </div>" +
      '      <ul class="list-group list-group-flush">' +
      '        <li class="list-group-item">Sets: ' +
      execution +
      "        </li>" +
      '        <li class="list-group-item">Weight: ' +
      weight +
      "        </li>" +
      '        <li class="list-group-item">Break: ' +
      breakTime +
      "        </li>" +
      "      </ul>" +
      "    </div>" +
      "  </div>" +
      "</div>";
    return cardContent;
  }

  displayExercisesDay(exercises) {
    this.createDiv.hidden = true;
    if (exercises.length == 0) {
      this.fillNoDataWarning(FUNCTIONALITY.Exercises_day);
      this.closeMenuAction.click();
      return;
    }

    let htmlContent =
      '<h2 class="screen-tittle text-center">' +
      FUNCTIONALITY.Exercises_day +
      "</h2>";

    htmlContent += '<div class="row">';

    for (let i = 0; i < exercises.length; i++) {
      htmlContent += this.populateCardExerciseDay(
        exercises[i].name,
        exercises[i].execution,
        exercises[i].weight,
        exercises[i].break
      );
    }

    htmlContent += "</div>";

    document.getElementById("content").innerHTML = htmlContent;
    this.closeMenuAction.click();
  }

  populateCardDay(index) {
    let cardContent =
      '<div class="col-lg-4 card-custom">' +
      '  <div class="card">' +
      '    <div class="card-body">' +
      '      <div class="row justify-content-between">' +
      '        <h5 class="col-auto card-title">Day ' +
      index +
      "        </h5>" +
      '        <button type="button" class="btn-close" aria-label="Close"></button>' +
      "      </div>" +
      "    </div>" +
      "  </div>" +
      "</div>";
    return cardContent;
  }

  displaysDays(days) {
    this.createDiv.hidden = false;
    this.createButton.textContent = "Create a new day";

    if (days.length == 0) {
      this.fillNoDataWarning(FUNCTIONALITY.Days);
      this.closeMenuAction.click();
      return;
    }

    let htmlContent =
      '<h2 class="screen-tittle text-center"' + FUNCTIONALITY.Days + "</h2>";

    htmlContent += '<div class="row">';

    for (let i = 0; i < days.length; i++) {
      htmlContent += this.populateCardDay(i + 1);
    }
    htmlContent += "</div>";

    document.getElementById("content").innerHTML = htmlContent;
    this.closeMenuAction.click();
  }

  populateCardExercise(name, execution, weight, breakTime) {
    let cardContent =
      '<div class="col-lg-4 card-custom">' +
      '  <div class="card">' +
      '    <div class="card-body">' +
      '      <div class="row justify-content-between">' +
      '        <h5 class="col-auto card-title">' +
      name +
      "        </h5>" +
      '        <button type="button" class="btn-close" aria-label="Close"></button>' +
      "      </div>" +
      '      <ul class="list-group list-group-flush">' +
      '        <li class="list-group-item">Sets: ' +
      execution +
      "        </li>" +
      '        <li class="list-group-item">Weight: ' +
      weight +
      "        </li>" +
      '        <li class="list-group-item">Break: ' +
      breakTime +
      "        </li>" +
      "      </ul>" +
      "    </div>" +
      "  </div>" +
      "</div>";
    return cardContent;
  }

  displayExercises(exercises) {
    this.createDiv.hidden = false;
    this.createButton.textContent = "Create a new exercise";

    if (exercises.length == 0) {
      this.fillNoDataWarning(FUNCTIONALITY.Exercises);
      this.closeMenuAction.click();
      return;
    }

    let htmlContent =
      '<h2 class="screen-tittle text-center">' +
      FUNCTIONALITY.Exercises +
      "</h2>";

    htmlContent += '<div class="row">';

    for (let i = 0; i < exercises.length; i++) {
      htmlContent += this.populateCardExercise(
        exercises[i].name,
        exercises[i].execution,
        exercises[i].weight,
        exercises[i].break
      );
    }
    htmlContent += "</div>";

    document.getElementById("content").innerHTML = htmlContent;
    this.closeMenuAction.click();
  }

  bindShowExercisesDay(handler) {
    this.exercisesDayAction.addEventListener("click", () => {
      console.log("Show ExercisesDay was clicked");
      handler();
    });
  }

  bindShowDays(handler) {
    this.daysAction.addEventListener("click", () => {
      console.log("Show Days was clicked");
      handler();
    });
  }

  bindShowExercises(handler) {
    this.exercisesAction.addEventListener("click", () => {
      console.log("Show Exercises was clicked");
      handler();
    });
  }
}
