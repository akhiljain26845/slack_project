const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { trainingRouter, mentorRouter, traineeRouter } = require('./routes/index');
const request = require('request');
const PORT=4390;

const { Mentors } = require('./models/sequelize');

require('dotenv').config();

app.use(bodyParser.json());
app.use('/trainings', trainingRouter);
app.use('/mentors', mentorRouter);
app.use('/trainees', traineeRouter);
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.send('You hit the home page!');
});

app.listen(PORT, function(err) {
	console.log('server started');
});
 
app.get('/auth', (req, res) => {
    res.sendFile(__dirname + '/add_to_slack.html')
})

app.get('/goto', (req, res) => {  
  var options = {
    uri: 'https://slack.com/api/oauth.access?code='
      +req.query.code+
      '&client_id='+process.env.CLIENT_ID+
      '&client_secret='+process.env.CLIENT_SECRET,
    method: 'GET'
  }
  request(options, (error, response, body) => {
    var JSONresponse = JSON.parse(body);
    if (!JSONresponse.ok){
      console.log(JSONresponse)
      res.send("Error encountered: \n"+JSON.stringify(JSONresponse)).status(200).end()
    }else{
      console.log(JSONresponse);
      //console.log('=====token=====', SLACK_TOKEN);
      res.render('./views/form.ejs');
    }
  })
})
