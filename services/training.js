const {
	Trainings
}	= require('../models/sequelize');

class TrainingService {
	static fetchTrainingsFromDB() {
		return Trainings.findAll()
			.then(trainings => {
				return trainings;
			})
			.catch(err => {
				throw new Error('Error occured while fetching all Trainings', err);
			})
	}

	static createTrainingInDB(name, duration) {
		return Trainings.create({name: name, duration: duration})
	  	.then((training) => {
	  		return(training);
	  	})
	  	.catch(err => {
	  		throw new Error('Could not create Training', err);
	  	})
	}

	static fetchTrainingById(id) {
		return Trainings.findOne({
	    "where": {
	      "training_id": id
	    },
	    "include": [{
	      association: 'Tasks',
	      as: 'Tasks'
	    }]
	  })
			.then(trainings => {
				return trainings;
			})
			.catch(err => {
				throw new Error('Eroor occured while fetching all Trainings', err);
			})
	}
}

module.exports = TrainingService;