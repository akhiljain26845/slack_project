// Import express and request modules
var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
require('dotenv').config();

var SLACK_TOKEN; 

// Instantiates Express and assigns our app variable to it
var app = express();
app.use(bodyParser.json());

// Again, we define a port we want to listen to
const PORT=4390;

// Lets start our server
app.listen(PORT, function () {
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Example app listening on port " + PORT);
});

// This route handles GET requests to our root ngrok address and responds with the same "Ngrok is working message" we used before
app.get('/', function(req, res) {
    res.send('Ngrok is working! Path Hit: ' + req.url);
    console.log(process.env.CLIENT_ID);
});

app.get('/auth', (req, res) => {
    res.sendFile(__dirname + '/add_to_slack.html')
})

app.get('/test', (req, res) => {
    res.send(req.body);
})

app.get('/user', (req, res) => {
    res.send(req.body);
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
        var JSONresponse = JSON.parse(body)
        if (!JSONresponse.ok){
            console.log(JSONresponse)
            res.send("Error encountered: \n"+JSON.stringify(JSONresponse)).status(200).end()
        }else{
            SLACK_TOKEN = JSONresponse.access_token;
            console.log('=====token=====', SLACK_TOKEN);
            res.send("Success!")
        }
    })
})

const { WebClient } = require('@slack/client');
const web = new WebClient(SLACK_TOKEN);

(async () => {
  // // Use the `auth.test` method to find information about the installing user
  // const res = await web.auth.test()

  // // Find your user id to know where to send messages to
  // const userId = res.user_id

  // Use the `chat.postMessage` method to send a message from this app
  await web.chat.postMessage({
    channel: "#software-development",
    text: "Helloooooo Akash!",
    as_user : true
  });
  console.log('Message posted!');
})();



// // Route the endpoint that our slash command will point to and send back a simple response to indicate that ngrok is working
// app.post('/command', function(req, res) {
//     res.send('Your ngrok tunnel is up and running!');
// });