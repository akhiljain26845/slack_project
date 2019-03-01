const express = require('express');
const trainingRouter = express.Router();
const TrainingController = require('../controller/training');

trainingRouter.get('/', TrainingController.getTrainings);
trainingRouter.post('/', TrainingController.createTraining);
trainingRouter.get('/:id', TrainingController.getTrainingById);

module.exports = trainingRouter;