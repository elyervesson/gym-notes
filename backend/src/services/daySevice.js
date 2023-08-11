const Day = require("../models/day");
const Exercise = require("../models/exercise");

module.exports = class dayService {
  static async getAllDays() {
    try {
      const allDays = await Day.find().sort({position: 1});
      return allDays;
    } catch (error) {
      console.log(`Could not fetch days ${error}`);
    }
  }

  static async addDay(data) {
    try {
      const newDay = {
        exercises: data.exercises,
      };
      const response = await new Day(newDay).save();
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  static async getDayById(dayId) {
    try {
      const day = await Day.findById({ _id: dayId });

      var data = day.toJSON();
      data.exercises = [];
      const allExercises = await Exercise.find();
      allExercises.map(function(exercise, i) {
        if (day.exercises.includes(exercise._id)) {
          data.exercises.push(exercise);
        }
      })
      return data;
    } catch (error) {
      console.log(`Day not found. ${error}`);
    }
  }

  static async updateDay(id, exc) {
    try {
      const updateResponse = await Day.updateOne(
        { _id: id },
        { ...exc}
      );

      return updateResponse;
    } catch (error) {
      console.log(`Could not update day ${error}`);
    }
  }

  static async deleteDay(dayId) {
    try {
      const deletedResponse = await Day.findOneAndDelete({ _id: dayId });
      return deletedResponse;
    } catch (error) {
      console.log(`Could not delete day ${error}`);
    }
  }
};
