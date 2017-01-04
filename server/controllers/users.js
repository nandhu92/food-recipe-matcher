var mongoose = require('mongoose');
var passport = require('passport');
    var User = mongoose.model('User');



function UsersController() {

  this.register = function(req, res){

  //  console.log(req.body);
    var user = new User();
    // console.log(user.setPassword(req.body.password));
    // console.log(user);
    // user.ping();
    // res.end();

 // var user = new User();
  //   console.log(user.setPassword(req.body.password));
 //
 //    var userData = {
 //       name: req.body.name,
 //  username: req.body.username,
 //  email: req.body.email,
 //  password: req.body.password
 //    }

 user.name = req.body.name;
  user.username = req.body.username,
   user.email = req.body.email;
user.setPassword(req.body.password);

		console.log('fourth: create function users controller /server/controllers/users.js');
		// User.create(req.body, function(err, user){
			console.log("sending json back to user factory check browser console")
			// if(err){
      //
			// 	res.json({
      //                   errors: {
      //
      //                           message: "user name is already taken",
      //
      //
      //                   },
      //                   name: "Validation error"
      //               });
			// } else {
      //   console.log("here");
			// 	res.json(user);
			// }
      user.save(function(err) {
    var token;
    token = user.generateJwt();
    res.status(200);
    res.json({
      "token" : token
    });
  });
		// })
	}



    this.login = function(req, res) {
      //console.log(req.body.username);
        User.findOne({
            username: req.body.username
        }, function(err, data) {
          if(err){
            console.log(err);
    				// console.log(err);
    				// res.json({
            //                 errors: {
            //
            //                         message: "user name is already taken",
            //
            //
            //                 },
            //                 name: "Validation error"
            //             });
    			} else {
            //console.log(data);
    				res.json(data);
    			}
        })
    }

    // username : nandhu
    // Ingredients : {
    // 	name1 : ['fish', 'chicken']
    // 	name2 : ['turkey', 'cranberry']
    // }
    //
      // db.users.update({name : "susee"},{$push: {"ingredientslist": {"dish" : "nans","saved" : ['turkey', 'cranbery']}}})
      // ,{multi:true})
    // db.students.update({name: "susee"},{$push: {"ingredients":{ name1 : ['turkey', 'cranberry']}}})
    //db.users.update({name : "susee"},{$set: {"ingredients":['fish', 'chicken', 'MongoDB']}},{multi:true})

        this.save = function(req, res) {
          console.log(req.body);
        //  console.log(c);
          var user = new User();


            user.update({
                name: req.body.name},{$push: {
                  "ingredientslist" : {
                    "dish": req.body.saveName,
                    "saved": req.body.ingredients
                  }
                  }
                   },
            function(err, data) {
              if(err){
                console.log(err);
        				// console.log(err);
        				// res.json({
                //                 errors: {
                //
                //                         message: "user name is already taken",
                //
                //
                //                 },
                //                 name: "Validation error"
                //             });
        			} else {
                //console.log(data);
        				res.json(data);
        			}
            })
        }





  this.userLogin = function(req, res) {
    //console.log(req.body.username);
      // User.findOne({
      //     email: req.body.email
      // }, function(err, data) {
      //   if(err){
      //     console.log(err);
          // console.log(err);
          // res.json({
          //                 errors: {
          //
          //                         message: "user name is already taken",
          //
          //
          //                 },
          //                 name: "Validation error"
          //             });
      //   } else {
      //     //console.log(data);
      //     res.json(data);
      //   }
      // })
      passport.authenticate('local', function(err, user, info){
         var token;

         // If Passport throws/catches an error
         if (err) {
           res.status(404).json(err);
           return;
         }

         // If a user is found
         if(user){
           console.log("found");
           token = user.generateJwt();
           res.status(200);
           res.json({
             "token" : token
           });
         } else {
           // If user is not found
        //   console.log(info);
           res.status(401).json(info);
         }
       })(req, res);

  }



}

    module.exports = new UsersController();
