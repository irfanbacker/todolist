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
    var dtasks = req.body.check;
    //var dtasks = ["Task2"]
    console.log(dtasks);
    //tasks.splice(tasks.indexOf(dtasks), 1);
    var filtered = tasks.filter(function(value, index, arr){
       if (value.item==dtasks) return 0;
       else return 1;
    });
    tasks=filtered;
    console.log(tasks);
    res.redirect('/');
});

//-------------------------------------------------------------------------

app.listen(port);
console.log('Server started at port ' + port);
