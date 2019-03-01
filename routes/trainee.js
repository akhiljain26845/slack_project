const express = require('express');
const traineeRouter = express.Router();
const TraineeController = require('../controller/trainee');

traineeRouter.get('/', TraineeController.getTrainees);
traineeRouter.post('/', TraineeController.createTrainee);
traineeRouter.get('/:id', TraineeController.getTraineeById);
traineeRouter.patch('/:id/assign/mentor', TraineeController.assignMentor);
traineeRouter.patch('/:id/assign/training', TraineeController.assignTraining);

module.exports = traineeRouter;