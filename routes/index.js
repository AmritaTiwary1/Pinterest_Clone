var express = require('express');
var router = express.Router();

const passport = require('passport');
const localStrategy = require('passport-local');
const userModel = require('./users');
const postModel=require('./posts');
const upload = require('./multer');
passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {nav:true, loggedIn:false} );
});

router.get('/login',function(req,res){
  res.render('login', {nav:false, loggedIn: false} );
})

router.get('/register', function(req,res){
  res.render('register',{nav:false , loggedIn: false});
})

router.get('/profile', isLoggedIn , async function(req,res,next){
  const user = await userModel.findOne({username: req.session.passport.user})
  .populate('posts');
res.render("profile", {user,nav:true,loggedIn:true});
    
});

router.get('/feed', isLoggedIn, async function(req,res){
  const posts = await postModel.find().populate('user');
  console.log(posts)
    res.render('feed', {posts , nav:true , loggedIn : true})
})

router.get('/add', isLoggedIn , async function(req,res,next){
  const user = await userModel.findOne({username: req.session.passport.user});
   res.render('add',{nav: true , loggedIn:true});
    
});

router.post('/fileupload', isLoggedIn,  upload.single('image') , async function(req,res){
    const user = await userModel.findOne({username :req.session.passport.user });
    user.profileImage = req.file.filename; //to save uploaded image in user profile img field, we will--- req.file.filename gives that file url
   await user.save();

 res.redirect('/profile')}
)

router.post('/createpost', isLoggedIn, upload.single("postimage") , async function(req,res) {
  const user = await userModel.findOne({username: req.session.passport.user});
  const post = await postModel.create({
      user : user._id,
     title: req.body.title,
     description: req.body.description,
     image : req.file.filename
    })

    user.posts.push(post._id);
    await user.save();
    res.redirect('/profile');
  })

router.post('/register', function(req,res){
   const data = new userModel({
         username : req.body.username,
         email : req.body.email,
         contact : req.body.contact,
         name: req.body.name
     
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
