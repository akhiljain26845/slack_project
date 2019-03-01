MentorService = require('../services/mentor');

class MentorController {
	static async getMentors(req, res) {
		try {
			const result = await MentorService.fetchMentorsFromDB();
			res.json(result);
		}
		catch(err) {
			res.status(500).json({ error: err });
		}
	}

	static async getMentorById(req, res) {
		try {
			const result = await MentorService.fetchMentorById(req.params.id);
			res.json(result);
		}
		catch(err) {
			res.status(500).json({ error: err });
		}
	}

	static async sendInvitation(req, res) {

		res.json({
			"invitation": 'https://join.slack.com/t/webturn/invite/enQtNTY0NDkzODczNDQzLWQ5Njg5ZThkNjdmNDhiOTcxNzg3MGUxM2IyNGE4NDNjYzgzNDI3MWE4YmE1ZmRkOWQ0YzhmOGE2ZTRjOWY3ZmM?x=x-561205919826-563867701760',
			"authorization_url": 'http://96cafba4.ngrok.io/auth'
		})
	}


	static async createMentor(req, res) {
		// try {
		// 	const result = await MentorService.createMentorInDB(req.body);
		// 	res.json(result);
		// }
		// catch(err) {
		// 	res.status(500).json({error: err});
		// }
	}
}

module.exports = MentorController;