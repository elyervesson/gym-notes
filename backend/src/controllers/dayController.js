const dayService = require("../services/daySevice");

exports.get = async (req, res) => {
    console.log("get a day");

    try {
      const day = await dayService.getDayById(req.params.id);
  
      if (!day) {
        return res.status(404).json(`There are no day with id ${req.params.id}!`);
      }
      res.json(day);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
};

exports.getAll = async (req, res) => {
    console.log("get all days");

    try {
      const days = await dayService.getAllDays();
      if (!days) {
        return res.status(404).json("There are no days published yet!");
      }
      res.json(days);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
};

exports.add = async (req, res) => {
    console.log("add a day");

    try {
      const createdDay = await dayService.addDay(req.body);
      return res.status(201).json(createdDay);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
};

exports.update = async (req, res) => {
    console.log("update a day");

    try {
      const day = await dayService.updateDay(req.params.id, req.body);
      return res.status(200).json(day);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
};

exports.delete = async (req, res) => {
    console.log("delete a day");
    
    try {
      const result = await dayService.deleteDay(req.params.id);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
};
