const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

// To give out some informations on the current project
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// the DialogFlow fulfillment endpoint
app.post('/', function(request, response) {
  const dialogflowRequest = request.body;
  const queryResult = dialogflowRequest.queryResult;
  const whatTheUserSaid = queryResult.queryText;
  const entity = queryResult.parameters.fruits;
  const afterTheEntity = whatTheUserSaid.split(entity).pop();
  
  return response.json({
    fulfillmentText: `What was said after the captured entity: "${afterTheEntity}"`
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
