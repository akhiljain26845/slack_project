TrainingService = require('../services/training');

class TrainingController {
	static async getTrainings(req, res) {
		try {
			const result = await TrainingService.fetchTrainingsFromDB();
			res.json(result);
		}
		catch(err) {
			res.status(500).json({ error: err });
		}
	}

	static async createTraining(req, res) {
		try {
			const result = await TrainingService.createTrainingInDB(req.body.name, req.body.duration);
			res.json(result);
		}
		catch(err) {
			res.status(500).json({error: err});
		}
	}

	static async getTrainingById(req, res) {
		try {
			const result = await TrainingService.fetchTrainingById(req.params.id);
			res.json(result);
		}
		catch(err) {
			res.status(500).json({ error: err });
		}
	}
}

module.exports = TrainingController;