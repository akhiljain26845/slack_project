const {
	Trainees,
	Mentors
}	= require('../models/sequelize');

class TraineeService {
	static fetchTraineesFromDB() {
		return Trainees.findAll()
			.then(trainees => {
				return trainees;
			})
			.catch(err => {
				throw new Error('Error occured while fetching all Trainees', err);
			})
	}

	static createTraineeInDB(name, gender, day, username, password) {
		return Trainees.create({
			name: name,
			gender: gender,
			day: day,
			username: username,
			password: password
		})
	  	.then((trainee) => {
	  		return(trainee);
	  	})
	  	.catch(err => {
	  		throw new Error('Could not create Trainee', err);
	  	})
	}

	static fetchTraineeById(id) {
		return Trainees.findOne({
	    "where": {
	      "id": id
	    }
	    // "include": [{
	    //   association: 'Tasks',
	    //   as: 'Tasks'
	    // }]
	  })
			.then(trainee => {
				return trainee;
			})
			.catch(err => {
				throw new Error('Eroor occured while fetching trainee by id', err);
			})
	}

	static assignMentorToTrainee(trainee_id, mentor_id) {
		return Trainees.findOne({
			where: {id: trainee_id}
		})
			.then(item => {
				if(item) {
					return Mentors.findOne({
						  where: {id: mentor_id}
					})
				}
				throw new Error('Trainee not found');
			})
			.then(item => {
				if(item)
					return Trainees.update(
						{mentor_id: mentor_id},
			   		{
			   			returning: true,
			   			where: {id: trainee_id}
			   		}
			   	)
				throw new Error('Mentor not found');
			})
			.then(trainee => {
				return trainee;
			})
	}

	static assignTrainingToTrainee(trainee_id, training_id) {
		return Trainees.findOne({
			where: {id: trainee_id}
		})
			.then(item => {
				if(item) {
					return Mentors.findOne({
						  where: {id: mentor_id}
					})
				}
				throw new Error('Trainee not found');
			})
			.then(item => {
				if(item)
					return Trainees.update(
						{mentor_id: mentor_id},
			   		{
			   			returning: true,
			   			where: {id: trainee_id}
			   		}
			   	)
				throw new Error('Mentor not found');
			})
			.then(trainee => {
				return trainee;
			})
	}
}

module.exports = TraineeService;