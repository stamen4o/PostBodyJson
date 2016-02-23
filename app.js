var moment = require('moment');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var jsonfile = require('jsonfile')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.post('/', function(request, response){
	  console.log(request.body);      // your JSON
	  response.send(request.body);    // echo the result back to server
	  var obj = request.body;
	  var time = moment().format('DDMMYYYYHHmmss');
	  file = 'C:/pathToWhereToStoreJsons/'+time+'.json' // define PATH for Json files
	  jsonfile.writeFile(file, obj, function (err) {console.error(err)});
});

app.listen(30031);


