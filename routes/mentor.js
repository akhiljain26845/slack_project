const express = require('express');
const MentorController = require('../controller/mentor');
const mentorRouter = express.Router();

mentorRouter.get('/', MentorController.getMentors);
mentorRouter.post('/', MentorController.createMentor);
mentorRouter.get('/create', MentorController.sendInvitation);
mentorRouter.get('/create/form', MentorController.displayForm);
mentorRouter.get('/:id', MentorController.getMentorById);


module.exports = mentorRouter;