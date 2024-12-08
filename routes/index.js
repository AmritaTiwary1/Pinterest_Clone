var express = require('express');
var router = express.Router();

const passport = require('passport');
const localStrategy = require('passport-local');
const userModel = require('./users');
const postModel=require('./posts');
passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/login',function(req,res){
  res.render('login');
})

router.get('/register', function(req,res){
  res.render('register');
})

router.get('/profile', isLoggedIn ,function(req,res,next){
res.render("profile")
     
  
});


router.post('/register', function(req,res){
   const data = new userModel({
         username : req.body.username,
         email : req.body.email,
         contact : req.body.contact
     
   })
 
    userModel.register(data, req.body.password)
     .then(function(){ 
         passport.authenticate("local")(req,res , function(){  
             res.redirect('/profile')
         } )
     })
 });

 router.post('/login', passport.authenticate("local",{
  successRedirect:'/profile',
 failureRedirect:'/login',

}) , function(req,res){ } );

router.get('/logout',function(req,res){
req.logout(function(err){
 if(err){
     return next(err);
 }
 res.redirect('/'); 
});
});

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
      console.log("check if authenticated");
      return next();
  }
  res.redirect('/login');
}

 

module.exports = router;
