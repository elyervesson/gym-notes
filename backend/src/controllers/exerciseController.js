const exerciseService = require("../services/exerciseSevice");

exports.get = async (req, res) => {
    console.log("get a exercise");

    try {
      const exercise = await exerciseService.getExerciseById(req.params.id);
  
      if (!exercise) {
        return res.status(404).json(`There are no exercise with id ${req.params.id}!`);
      }
      res.json(exercise);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
};

exports.getAll = async (req, res) => {
    console.log("get all execises");

    try {
      const exercises = await exerciseService.getAllExercises();
  
      if (!exercises) {
        return res.status(404).json("There are no exercises published yet!");
      }
      res.json(exercises);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
};

exports.add = async (req, res) => {
    console.log("add a exercise");

    try {
      const createdExercise = await exerciseService.addExercise(req.body);
      return res.status(201).json(createdExercise);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
};

exports.update = async (req, res) => {
    console.log("update a exercise");

    try {
      const exercise = await exerciseService.updateExercise(req.params.id, req.body);
      return res.status(200).json(exercise);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
};

exports.delete = async (req, res) => {
    console.log("delete a exercise");
    
    try {
      const result = await exerciseService.deleteExercise(req.params.id);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
};
