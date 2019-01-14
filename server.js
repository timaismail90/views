var express = require('express');
var app = express ();

app.set('view engine' , 'ejs'):
app.get('/' , function(req, res){
  res.render('index', { user: "Greater User", title: "homepage" });
});

app.get('/', function(req, res){
  res.render('index',{users : [
            { name: 'John' },
            { name: 'Mike' },
            { name: 'Samantha' }
  ]});
});