const express = require('express');
const bodyParser = require('body-parser');
const appRoute = require('./routing/app.route');
const recipeRoute = require('./routing/recipe.route');
const compression = require('compression');
var app = express();
app.use(compression());
app.use(express.static('public'));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/hotel',{useFindAndModify:false});

app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );

  app.use(bodyParser.json());
  app.get("/", function (req, res) {
    res.send("Hello world, I am a chat bot");
  });
  
  app.all("/*",function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTION');
    res.header('Access-Control-Allow-Headers','Content-Type,Authorization, Content-Length, X-requested-Width');
    next();
  });

  app.use('/admin',appRoute);
  app.use('/customer',recipeRoute);

  app.listen(3000, () => {
    console.log("node is running on port 3000");
  });