TraineeService = require('../services/trainee');

class TraineeController {
	static async getTrainees(req, res) {
		try {
			const result = await TraineeService.fetchTraineesFromDB();
			res.json(result);
		}
		catch(err) {
			res.status(500).json({ error: err });
		}
	}

	static async createTrainee(req, res) {
		try {
			req.body;
			const result = await TraineeService.createTraineeInDB(body.name, body.gender, body.day, body.username, body.username, body.password);
			res.json(result);
		}
		catch(err) {
			res.status(500).json({error: err});
		}
	}

	static async getTraineeById(req, res) {
		try {
			const result = await TraineeService.fetchTraineeById(req.params.id);
			res.json(result);
		}
		catch(err) {
			res.status(500).json({ error: err });
		}
	}

	static async assignMentor(req, res) {
		try {
			const result = await TraineeService.assignMentorToTrainee(req.params.id, req.body.mentor_id);
			res.json(result);
		}
		catch(err) {
			res.status(500).json({ error: err.message });
		}
	}

	static async assignTraining(req, res) {
		try {
			const result = await TraineeService.assignTrainingToTrainee(req.params.id, req.body.training_id);
			res.json(result);
		}
		catch(err) {
			res.status(500).json({ error: err.message });
		}
	}
}

module.exports = TraineeController;