const {
	Mentors
}	= require('../models/sequelize');

class MentorService {
	static fetchMentorsFromDB() {
		return Mentors.findAll()
			.then(mentors => {
				return mentors;
			})
			.catch(err => {
				throw new Error('Error occured while fetching all Mentors', err);
			})
	}

	static createMentorInDB(body) {
		return Mentors.create({
			name: body.name, 
			gender: body.gender, 
			username: body.username, 
			password: body.password,
			specialization: body.specialization, 
			father_name: body.father_name
		})
	  	.then((mentor) => {
	  		mentor.dataValues.invitation = 'https://join.slack.com/t/webturn/invite/enQtNTY0NDkzODczNDQzLWQ5Njg5ZThkNjdmNDhiOTcxNzg3MGUxM2IyNGE4NDNjYzgzNDI3MWE4YmE1ZmRkOWQ0YzhmOGE2ZTRjOWY3ZmM?x=x-561205919826-563867701760';
	  		mentor.dataValues.give_permission = 'http://96cafba4.ngrok.io/auth';
	  		console.log('====== mentor ======', mentor);
        return(mentor);
	  	})
	  	.catch(err => {
	  		throw new Error('Could not create mentor', err);
	  	})
	  	
	}

	static fetchMentorById(id) {
		return Mentors.findOne({
	    "where": {
	      "id": id
	    }
	    // "include": [{
	    //   association: 'Tasks',
	    //   as: 'Tasks'
	    // }]
	  })
			.then(trainings => {
				return trainings;
			})
			.catch(err => {
				throw new Error('Eroor occured while fetching all Trainings', err);
			})
	}
}

module.exports = MentorService;