const Exercise = require("../models/exercise");

module.exports = class exerciseService {
  static async getAllExercises() {
    try {
      const allExercises = await Exercise.find();
      return allExercises;
    } catch (error) {
      console.log(`Could not fetch exercises ${error}`);
    }
  }

  static async addExercise(data) {
    try {
      const newExercise = {
        name: data.name,
        execution: data.execution,
        weight: data.weight,
        break: data.break,
        description: data.description,
        media: data.media,
        // TODO: add user functionality
      };
      const response = await new Exercise(newExercise).save();
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  static async getExerciseById(exerciseId) {
    try {
      const exc = await Exercise.findById({ _id: exerciseId });
      return exc;
    } catch (error) {
      console.log(`Exercise not found. ${error}`);
    }
  }

  static async updateExercise(id, exc) {
    try {
      const updateResponse = await Exercise.updateOne(
        { _id: id },
        { ...exc}
      );

      return updateResponse;
    } catch (error) {
      console.log(`Could not update exercise ${error}`);
    }
  }

  static async deleteExercise(exerciseId) {
    try {
      const deletedResponse = await Exercise.findOneAndDelete({ _id: exerciseId });
      return deletedResponse;
    } catch (error) {
      console.log(`Could not delete exercise ${error}`);
    }
  }
};
