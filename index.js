var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = 8080;

app.set('view engine', 'ejs');

app.use(express.static('./public'));
var urlencodedParser = bodyParser.urlencoded({extended: false});

//=========================================================================

var tasks = [ {item: "Task1"},{item: "Task2"} ];

//-------------------------------------------------------------------------

app.get('/', function(req, res){
    res.render('home', {tasks: tasks});
});

app.post('/', urlencodedParser, function(req, res){
    tasks.push(req.body);
    res.json(tasks);
});

app.post('/del', urlencodedParser, function(req, res){
    var dtasks = req.body.dtask;
    for(var i=0;i<dtasks.length;i++)
     {tasks.splice(task.indexOf(dtasks[i]), 1);}
    res.json(tasks);
});

//-------------------------------------------------------------------------

app.listen(port);
console.log('Server started at port ' + port);
