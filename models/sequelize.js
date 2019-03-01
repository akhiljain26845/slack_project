const trainingModel = require('./training');
const mentorModel = require('./mentor');
const Sequelize = require('sequelize');
const taskModel = require('./task');
const traineeModel = require('./trainee');
const tokenModel = require('./token');

const db = new Sequelize('training_app', 'postgres', 'postgres', {
  dialect: 'postgres',
  host: 'localhost'
});

db.authenticate()
  .then(() => {
    console.log('\n\n==== Connection stablished ====\n');
  })
  .catch(err => {
    console.error('\n\n Error occured at Establishing Connection\n', err);
  });

const Trainings = trainingModel(db, Sequelize);
const Tasks = taskModel(db, Sequelize);
const Mentors = mentorModel(db, Sequelize);
const Trainees = traineeModel(db, Sequelize);
const Tokens = tokenModel(db, Sequelize);


db.sync()
  .then(() => {
    console.log('\n=== Tables have been Created ===\n');
  })
  .catch(err => {
    throw new Error('\n=== Could not create Tables ===\n', err);
  })

// Tokens.sync();



// const t = new Trainings();
// t.setTasks()


module.exports = {
  Trainings,
  Mentors,
  Tasks,
  Trainees,
  Tokens
};