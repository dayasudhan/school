var CustomerInfoModel = require('../app/models/customerInfo');
var StudentModel = require('../app/models/studentinfo');
var ClassInfoModel = require('../app/models/classinfo');
var SchoolModel = require('../app/models/schoolnfo');
var CountersModel = require('../app/models/counters');
var OtpModel = require('../app/models/otp');
var Firebase = require("firebase");
var multer = require('multer');
var path = require('path');
var Client = require('node-rest-client').Client;
var client = new Client();
var options = multer.diskStorage({ destination : 'public/images/logo/' ,
  filename: function (req, file, cb) {
    cb(null, req.params.id + path.extname(file.originalname));
  }
});
var upload = multer({ storage: options });
var securecustomerkey = 'EjR7tUPWx7WhsVs9FuVO6veFxFISIgIxhFZh6dM66rs';
var securevendorkey = 'ORql2BHQq9ku8eUX2bGHjFmurqG84x2rkDQUNq9Peelw';
var secureadminkey = 'tk0M6HKn0uzL%2FcWMnq3jkeF7Ao%2BtdWyYEJqPDl0P6Ac';
var securewebkey = 'RN4CDXkqltLF%2FWloegKujIhiaSWBrgCzQXqI9cyWpT0';
var version_value_1 = '1';
var client_key_vendor = 'tunga';
var client_key_customer = 'bhoomika';
var client_key_admin = 'gajanuru';
var client_key_web = 'pickcock';
Firebase.initializeApp({
  serviceAccount: {
  "type": "service_account",
  "project_id": "project-8598805513533999178",
  "private_key_id": "82abba7994a0894b4b38ee0c66d05cf80dd99efc",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCGKNGc8VwvoTrX\njusnjmbMAmjTjBJ/2Tu/gzktQxfoY0mIe31NUufw0mnBQYOJakU1FORvw8USn3QM\nNCu8h1UvfhvkUVI/FjAdEcuBh+PFOULqFWYlalK3560qvGlE6xHnftgLQC/LI9R4\nmO0moRLBrQ2Oq2JVUwIE58xiXgw5WyMxnZ4IS1kons5UmutUw3QtRMfvwLHrkV/z\na8oP6XPXeECp7FWrvtF53PYFLRurL1bFQsSNwHFw8su8BhEhjpXXD1SDKyEpnz4E\nr8P2wTS1116mrVkNXWyY0rV7fyBvqeh/oH0AZVOzDCueFkT3Q2eZJcGUnGp9uTCb\nExXNIws/AgMBAAECggEAST2LgYR6cT4x43AQjJ2/HOzL0YGMr+MmLR00X7NbH/Dk\nOfBAra/vE5erSGe9qY0sjxgCxck4kzwdnHP21IuFQ9Iy4+hJYEt6pMQMN4C6Jfdm\nwmhARXjQA7ok3UnSpl82fQzQYQP/k4TR/6xs+0O/+5+/4P1LR41zcr4g5Cq3va9l\n4W37dOgaYCUSprWXFQtD5kztcOYNeyuPGg7IYIL/xBo8mqaH49wAf1SureSJauKK\ndEc8hq4FuR9VAWlISV4GBZ4w6DL+N2KrOFbwBiqbt6IASoh7p6k2H+beExmKCpeG\nUDORBsuMRNsYFvQDmS8q6XwYjX4TVh/Agp7jv+DaEQKBgQDorbsL+f+/GZQQ1+ds\nSMQdhvOLXpO8Oh7eAjTTY3K/UNTKCkEoTkam51Bv4O4b/qIXKbcqRyTfqbW9e/mb\nuY0SK/+2N0XTo3X71jJDRKE+Zls1j2/slaDeiUzRxXIF+J0SIgEV5hPbEGNYdGuK\niDP0Mr82GQ998kyKcMBIqG8yZQKBgQCTmzKhmt7GmwCWnxZlvc1yB1nII2r+L1CT\nVQudMgNyWLAF3XtVXC6mntGhEdzcygvB/AOwusMI60duCgZK/+x0JNdyLKvFkmeT\nh4djfppGSjwtzzW1geBgJQnyWdoBv/q6Z68Ms3NSexTODbfC2qfBpR27oECZr4Hz\n7P45S+Fa0wKBgDfBKYj9JuNL5ccDdVjlNtk8dS94Qj5gTvUz4iSlN+HQJK0lN+fI\nmfV0iDnG1EexBHY4cMOYuKU/rWTySCWgmMU59dRb+kd0a9kkwnaMA3dIX6K99Dvk\nvt+UVuwNO/1iTYEC1O/Cag+cJbIUc5CGgqyJXHhCGQw8+0pRKkI+2iZhAoGAD5Qw\nyteyrZmMfVk7Hu/icCeQdUwvrbZGtdYjDKtLq9TqdyQCMWcyUUmv7GUbP35fsVCs\n/wknLpjOiDGsqlvKlBOTXayTUJ38KpkCVCD3nXWWVmtpSsfza5JdM2QCW27swqHQ\n2vFRuaHd90WBYKJ9VDXeJoBqcQ4SFDGuP1Pf7BsCgYEA0bVl9WMaIAe8V6AtwYjz\nLx1KRQ3mZWwXdEBitciQhnDeutMgaExkwCJHag6VGfOljNe/JtgCEzqWWh0rvFzi\nUn2WZA/kcqByHIQzVqJwhFkVjRzS5/qVrTvZw0xu2HVQD4iV6OHRMS3TeIUbGqOK\ngFYR4uhQAX6sXvXp4uU16bs=\n-----END PRIVATE KEY-----\n",
  "client_email": "khaanavali@project-8598805513533999178.iam.gserviceaccount.com",
  "client_id": "110281937967415310229",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://accounts.google.com/o/oauth2/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/khaanavali%40project-8598805513533999178.iam.gserviceaccount.com"
},
  databaseURL: "https://project-8598805513533999178.firebaseio.com"
});




var rootRef = Firebase.database().ref();


module.exports = function(app, passport) {



// normal routes ===============================================================

// show the home page (will also have our login links)
app.get('/test', function(req, res) {
    res.render('index.ejs');
});

app.get('/', function (req, res) {
    if(req.isAuthenticated())
        res.render('customer', { user : req.user });
    else
        res.render('customer', { user : "dummy" });
});

// app.get('/p/customer_menu', function (req, res) {
//     if(req.isAuthenticated())
//         res.render('customer_menu', { user : req.user });
//     else
//         res.render('customer_menu', { user : "dummy" });
// });

// PROFILE SECTION =========================
app.get('/profile', isLoggedIn, function(req, res) {
    res.render('profile.ejs', {
        user : req.user
    });
});

// LOGOUT ==============================
app.get('/logout', function(req, res) {
  console.log('/logout');
  var redirect_url = '/';
    req.logout();
    res.redirect(redirect_url);
});

app.get('/vendor_logout', function(req, res) {
    var redirect_url = '/vendor';
    req.logout();
    res.redirect(redirect_url);
});
// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================


        app.get('/login', function(req, res) {
            res.render('customer_login.ejs', { message: req.flash('loginMessage') });
        });



app.post('/v1/m/login', function(req, res, next) {
    console.log('post /v1/m/login');
     console.log(req.body);
  passport.authenticate('local-login', function(err, user, info) {
   
    if (err) {console.log('post /v1/m/login  1');return next(err); }
    if (!user) {
        console.log('post /v1/m/login  2');
        return res.send("0"); 
    }
    req.logIn(user, function(err) {
        console.log('post /v1/m/login  3');
      if (err) {
      console.log('post /v1/m/login 4'); 
      

        return next(err); }
       console.log("store the uniqui id") 
              storeVendoruniqueId(req,res,function(req,res){
           console.log("storeVendoruniqueId success");
           
        });
      return res.send("1");
    });
    console.log('post /v1/m/login 5');
  })(req, res, next);
});




app.post('/login', function(req, res, next) {
    console.log('post /login');
      console.log(req.body);
  passport.authenticate('local-login', function(err, user, info) {
   
    if (err) {
         console.log("error in login 0");
        return next(err); }
    if (!user) {
         var redirect_url = '/';
            if(req.body.role == 'customer')
            {
                //redirect_url = '/signup';
                console.log("error in login 1");
                 return res.send("0"); 
            }
            else if(req.body.role == 'vendor') 
            {
                redirect_url = '/p/vendor_signup';
                return res.redirect(redirect_url); 
            } 
            
    }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      console.log(req.body.role);
      var redirect_url = '/';
      if(req.body.role == 'customer')
      {
        //redirect_url = '/';

           console.log("success in login 1");

        return CustomerInfoModel.find({ 'phone':req.body.email},function( err, customerInfo ) {
            if( !err ) {
                return res.send( customerInfo );
            } else {
                console.log( err );
                return res.send('ERROR');
            }
        });
 
        return res.send("1"); 
      }
       else if(req.body.role == 'vendor') 
       {
        redirect_url = '/p/school_details';
         return res.redirect(redirect_url);
       }
     
    });
  })(req, res, next);
});
        // SIGNUP =================================
        // show the signup form
        app.get('/signup', function(req, res) {
            res.render('customer_signup.ejs', { message: req.flash('signupMessage') });
        });

    // facebook -------------------------------

        // send to facebook to do the authentication
        app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

        // handle the callback after facebook has authenticated the user
        app.get('/auth/facebook/callback',
            passport.authenticate('facebook', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));

    // twitter --------------------------------

        // send to twitter to do the authentication
        app.get('/auth/twitter', passport.authenticate('twitter', { scope : 'email' }));

        // handle the callback after twitter has authenticated the user
        app.get('/auth/twitter/callback',
            passport.authenticate('twitter', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));


    // google ---------------------------------

        // send to google to do the authentication
        app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

        // the callback after google has authenticated the user
        app.get('/auth/google/callback',
            passport.authenticate('google', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));

// =============================================================================
// AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) =============
// =============================================================================

    // locally --------------------------------
        app.get('/connect/local', function(req, res) {
            res.render('connect-local.ejs', { message: req.flash('loginMessage') });
        });
        app.post('/connect/local', passport.authenticate('local-signup', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/connect/local', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

    // facebook -------------------------------

        // send to facebook to do the authentication
        app.get('/connect/facebook', passport.authorize('facebook', { scope : 'email' }));

        // handle the callback after facebook has authorized the user
        app.get('/connect/facebook/callback',
            passport.authorize('facebook', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));

    // twitter --------------------------------

        // send to twitter to do the authentication
        app.get('/connect/twitter', passport.authorize('twitter', { scope : 'email' }));

        // handle the callback after twitter has authorized the user
        app.get('/connect/twitter/callback',
            passport.authorize('twitter', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));


    // google ---------------------------------

        // send to google to do the authentication
        app.get('/connect/google', passport.authorize('google', { scope : ['profile', 'email'] }));

        // the callback after google has authorized the user
        app.get('/connect/google/callback',
            passport.authorize('google', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));

// =============================================================================
// UNLINK ACCOUNTS =============================================================
// =============================================================================
// used to unlink accounts. for social accounts, just remove the token
// for local account, remove email and password
// user account will stay active in case they want to reconnect in the future

    // local -----------------------------------
    app.get('/unlink/local', isLoggedIn, function(req, res) {
        var user            = req.user;
        user.local.email    = undefined;
        user.local.password = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // facebook -------------------------------
    app.get('/unlink/facebook', isLoggedIn, function(req, res) {
        var user            = req.user;
        user.facebook.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // twitter --------------------------------
    app.get('/unlink/twitter', isLoggedIn, function(req, res) {
        var user           = req.user;
        user.twitter.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // google ---------------------------------
    app.get('/unlink/google', isLoggedIn, function(req, res) {
        var user          = req.user;
        user.google.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

app.get('/vendor', function (req, res) {
    res.render('vendor_login', { user : req.user });
});
app.get('/', function (req, res) {
    res.render('customer', { user : req.user });
});
//app.get('/find', function (req, res) {
//    res.render('find', { user : req.user });
//});



app.get('/p/vendor_login', function (req, res) {
    res.render('vendor_login', { user : req.user });
});

app.get('/p/vendor_signup', function(req, res) {
    res.render('vendor_signup', { });
});

app.get('/about_us', function (req, res) {
    res.render('about_us', { user : req.user });
});

app.get('/admin', function (req, res) {
    res.render('admin_login', { user : req.user });
});

app.get('/p/admin_order', function (req, res) {
    console.log(req.user);
    res.render('admin_order', { user : req.user });
});
app.get('/p/admin_order_today', function (req, res) {
    console.log(req.user);
    res.render('admin_order_today', { user : req.user });
});
app.get('/p/school_details', function (req, res) {
    console.log(req.user);
    res.render('school_details', { user : req.user });
});
app.get('/p/student_details', function (req, res) {
    res.render('student_details', { user : req.user });
});

app.get('/p/student_attendence', function (req, res) {
    res.render('student_attendence', { user : req.user });
});
app.get('/p/student_markssheet', function (req, res) {
    res.render('student_markssheet', { user : req.user });
});
app.get('/p/vendor_login', function (req, res) {
    res.render('vendor_login', { user : req.user });
});

app.get('/p/vendor_signup', function(req, res) {
    res.render('vendor_signup', { });
});
app.post('/reset', function(req, res, next) {
console.log(req.body);
  if(req.body.password != req.body.password2)
  {
     
  console.log("password mimatchmatch");
     return res.send('ERROR');
  }
  else
  {
    console.log("password match");
  }
  console.log('/reset');
    passport.authenticate('local-reset', function(err, user, info) {
     console.log(req.body);
      if (err) { 
        return next(err); }
      if (!user) { 
          return res.send("0");
      }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        console.log(req.body.role);
        var redirect_url;
        if(req.body.role == 'customer')
        {
       
         return CustomerInfoModel.find({ 'phone':req.body.email},function( err, customerInfo ) {
            if( !err ) {
                return res.send( customerInfo );
            } else {
                console.log( err );
                return res.send('ERROR');
            }
        });
 
        return res.send("1");
        }
       
      });
    })(req, res, next);
});


app.post('/signup', function(req, res, next) {
console.log(req.body);
  if(req.body.password != req.body.password2)
  {
     
  console.log("password mimatchmatch");
     return res.send('ERROR');
  }
  else
  {
    console.log("password match");
  }
  console.log('/signup');
    passport.authenticate('local-signup', function(err, user, info) {
     console.log(req.body);
      if (err) { 
        return next(err); }
      if (!user) { 
          var redirect_url = '/';
              if(req.body.role == 'customer')
              {
                  redirect_url = '/signup';
                  return res.send("0");
              }
              else if(req.body.role == 'vendor') 
              {
                  redirect_url = '/p/vendor_signup';
              } 
              return res.redirect(redirect_url); 
       }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        console.log(req.body.role);
        var redirect_url;
        if(req.body.role == 'customer')
        {
       
          registerCustomer(req, res, function(data){
            console.log("423")
            console.log(data);
           return  res.send(data);
          });
        }
        else if(req.body.role == 'vendor') 
        {
          redirect_url = '/p/school_details';
          registerVendor(req, res, next);
          return res.redirect(redirect_url);
        }
        else
        {
        return res.redirect(redirect_url);
      }
      });
    })(req, res, next);
});
function registerCustomer(req, res, next) {
  console.log("/registerCustomer");
  var cus_id = "C";
  var res = getNextSequence('customer',function(data) {

    cus_id = cus_id + data.sequence;
    console.log(cus_id);
      var customerInfo = new CustomerInfoModel({
        email:req.body.email2,
        id:cus_id,
        phone:req.body.email,
        name:req.body.name
      });

      customerInfo.save( function( err ) {
        if( !err ) {
              console.log( 'registerCustomer created' );
              console.log(req.body.email);
                  req.session.save(function (err) {
                    if (err) {
                        console.log( 'registerCustomer save error' );
                       next(err);
                    }
                    console.log( 'registerCustomer save complete' );
                  });
                  console.log( '463' );
               next(customerInfo);
              } else {
                console.log( 'registerCustomer error' );
                console.log( err );
                return res.send('ERROR');
              }
        });
    });
};
app.get( '/v1/test/customer', function( req, res ) {
                req.body.email = "dayasudhankggg@gmail.com";
                req.body.phoneNumber = "9987";
                req.body.name = "dayas";
                  registerCustomer2(req, res,function(data)
                  {
                     return res.send(data);
                  });

});

function registerCustomer2(req, res, next)
{
        console.log("/registerCustomer2");
        var cus_id = "C";
        var result = getNextSequence('customer',function(data) {

          cus_id = cus_id + data.sequence;
          console.log(cus_id);
          console.log(req.body);
          console.log(req.body.phoneNumber);
          var phoneNumber = parseInt(req.body.phoneNumber);
          console.log(phoneNumber);
          return CustomerInfoModel.findOneAndUpdate({ 'phone':phoneNumber},
            {
                  $set:{email:req.body.email,
                  name:req.body.name}
            },
            function( err,customer ) {
                if( !err ) {
                    if(customer == null)
                    {
                        console.log( "empty" );
                        var customer = new CustomerInfoModel({
                                  email:req.body.email,
                                  id:cus_id,
                                  phone:req.body.phoneNumber,
                                  name:req.body.name
                        });
                     
                        console.log(req.body);
                        customer.save( function( err ) {
                            if( !err ) {
                                console.log( 'created' );
                                next( customer );
                            } else {
                             console.log( 'error' );
                                console.log( err );
                                next(err);
                            }
                        });
                    } 

                    console.log("register2 ");
                    console.log(customer);
                    return  next(customer);
            } else {
                console.log( err );
                return next('ERROR');
            }
        });

  });
};
function getNextSequence(name,result)
{
   
    var ret = CountersModel.findOneAndUpdate(
            { _id: name },
            { $inc: { sequence: 1 }} ,
        function( err, order ) 
        {
        if( !err ) {
            console.log("no error");
            console.log(order);
            ret2 = order;
            result(order);
           // return order;
         
        } else {
            console.log( err );
           result(err);
        }
    });

}

function checkVendorApiAunthaticated(request,type)
{
	console.log("checkVendorApiAunthaticated 1");
	console.log(request.headers);
	console.log(request.headers.version);
	var version = parseInt(request.headers.version);
	console.log(version);
	var ret = false; 
	if(request.headers.securekey == secureadminkey && request.headers.client == client_key_admin)
	{
		console.log("checkVendorApiAunthaticated admin");
		ret = true;
	}
	else if(request.headers.securekey == securewebkey &&
		      request.headers.version == version_value_1 && 
		      request.headers.client == client_key_web)
	{
		console.log("checkVendorApiAunthaticated web pass");
		ret = true;
	}
	else if(type == 1)
	{
		console.log("checkVendorApiAunthaticated vendor");
		if(request.headers.securekey == securevendorkey &&
			      request.headers.version == version_value_1 && 
			      request.headers.client == client_key_vendor)
		{
			console.log("checkVendorApiAunthaticated vendor pass");
			ret = true;
		}
	}
	else if(type == 2)
	{
		console.log("checkVendorApiAunthaticated cust");
		if(request.headers.securekey == securecustomerkey &&
			      request.headers.version == version_value_1 && 
			      request.headers.client == client_key_customer)
		{
			console.log("checkVendorApiAunthaticated cust pass");
			ret = true;
		}
	}
	else
	{
		console.log("checkVendorApiAunthaticated not auth");
		ret = false;
    }
    return ret = true;
	return ret;
}
app.delete( '/v1/admin/counters/:id', function( request, response ) {
  	if(checkVendorApiAunthaticated(request,0) == false)
	{
		return response.send("Not aunthiticated").status(403);
	}
        return CountersModel.remove( { '_id':request.params.id},function( err ) {
            if( !err ) {
                console.log( 'counter removed' );
                return response.send( '' );
            } else {
                console.log( err );
                return response.send('ERROR');
            }
        });
    //});
});

app.get( '/v1/admin/counters', function( request, response ) {
    console.log("/v1/admin/counters");
  	if(checkVendorApiAunthaticated(request,0) == false)
	{
		return response.send("Not aunthiticated").status(403);
	}
    return CountersModel.find(function( err, order ) {
        if( !err ) {
            console.log("no error");
            return response.send( order );
        } else {
            console.log("error");
            console.log( err );
            return response.send('ERROR');
        }
    });
});
app.post( '/v1/admin/counters/:id', function( request, response ) {
    console.log("post /v1/admin/counters");
  	if(checkVendorApiAunthaticated(request,0) == false)
	{
		return response.send("Not aunthiticated").status(403);
	}
    console.log(request.params.id);
     //var dd = {'cityName':"dvg",'subAreas':[{'name':"rajajinagar"},{'name':"vijaynagar"}]};
     var dd = {_id:request.params.id,
                sequence:0};
    console.log("post /v1/admin/counters 2");
      var counters = new CountersModel(
         dd);
         console.log("post /v1/admin/counters 3");
        return counters.save(function( err) {
        if( !err ) {
            console.log("no error");
            console.log(counters);
            return response.send(counters);
        } else {
            console.log( err );
            return response.send('ERROR');
        }
    });
});
// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
    {
      console.log("isLoggedIn");
        return next();
    }
    else
    {
       console.log("not loggedin isLoggedIn");
    }

    res.redirect('/');
}
app.get( '/v1/school/info/:id', function( request, response ) {
    console.log("GET --/v1/school/info/");
   	// if(checkVendorApiAunthaticated(request,1) == false && request.isAuthenticated() == false)
	// {
	// 	return response.send("Not auntthiticated").status(403);
	// }
    return SchoolModel.find({ 'username':request.params.id},function( err, vendor ) {
        if( !err ) {
            console.log(vendor);
            return response.send( vendor );
        } else {
            console.log( err );
            return response.send('ERROR');
        }
    });
});
    
app.get( '/v1/school/infoall', function( request, response ) {
    console.log("GET --/v1/school/info/all");
   	// if(checkVendorApiAunthaticated(request,1) == false && request.isAuthenticated() == false)
	// {
	// 	return response.send("Not aunthiticated").status(403);
	// }
    return SchoolModel.find(function( err, vendor ) {
        if( !err ) {
            console.log(vendor);
            return response.send( vendor );
        } else {
            console.log( err );
            return response.send('ERROR');
        }
    });
});

app.post( '/v1/school/info/:id', function( req, res ) {
    // if(checkVendorApiAunthaticated(req,1) == false && req.isAuthenticated() == false)
    // {
    //     return res.send("Not aunthiticated").status(403);
    // }
      console.log("storeSchoolInfo post");
      console.log(req.body);
      storeSchoolInfo(req,res,function(req,res){
               console.log("storeSchoolInfo success");
               
            });
    
      });
      app.get( '/v1/class/info/:id', function( request, response ) {
        console.log("GET --/v1/school/info/");
           // if(checkVendorApiAunthaticated(request,1) == false && request.isAuthenticated() == false)
        // {
        // 	return response.send("Not auntthiticated").status(403);
        // }
        return ClassInfoModel.find({ '_id':request.params.id},function( err, vendor ) {
            if( !err ) {
                console.log(vendor);
                return response.send( vendor );
            } else {
                console.log( err );
                return response.send('ERROR');
            }
        });
    });
    app.post( '/v1/class/info/:classid/:scoolid/:classteacher', function( request, response ) {
        var dd = {_id:request.params.classid,
            schoolId:request.params.scoolid,
            classteacher:request.params.classteacher};
console.log("post /v1/admin/counters 2");
  var classm = new ClassInfoModel(
     dd);
     console.log("post /v1/admin/counters 3");
    return classm.save(function( err) {
    if( !err ) {
        console.log("no error");
        console.log(classm);
        return response.send(classm);
    } else {
        console.log( err );
        return response.send('ERROR');
    }
});
    });
    app.post( '/v1/class/timetable/:id', function( request, response ) {
        console.log("storeStudentInfo");
console.log(request.params.id);
console.log(request.body);
console.log(request.body.timetable);
ClassInfoModel.update({ '_id':request.params.id},
    {
        timeTable:request.body.timetable
    },
        function( err ) {
        if( !err ) {
            console.log( 'storetimetable created' );
       //     callback(request,response);
            return response.send('SUccess');;
        } else {
        console.log( 'storeVendorInfo error' );
            console.log( err );
            return response.send('ERROR');
        }
    });
        
          });
function storeSchoolInfo(request,response,callback,params)
{
console.log("storeSchoolInfo");
console.log(request.params.id);
console.log(request.body);
SchoolModel.update({ 'username':request.params.id},
    {
        phone:request.body.phone ,
        name:request.body.name ,
        email:request.body.email
        },
        function( err ) {
        if( !err ) {
            console.log( 'storeSchoolInfo created' );
            callback(request,response);
            return ;
        } else {
        console.log( 'storeVendorInfo error' );
            console.log( err );
            return response.send('ERROR');
        }
    });
}
app.post( '/v1/student/info/:id', function( req, res ) {
    // if(checkVendorApiAunthaticated(req,1) == false && req.isAuthenticated() == false)
    // {
    //     return res.send("Not aunthiticated").status(403);
    // }
      console.log("storestudentInfo post");
      console.log(req.body);
      storeStudentInfo(req,res,function(req,res){
               console.log("storestudentInfo success");
               
            });
    
            
      });


app.post( '/v1/student/result/:id/:id2', function( request, response ) {
        console.log("storeStudentInfo");
        console.log(request.params.id);
        //console.log(request.body);
       // console.log(request.body.timetable);
        SchoolModel.update({ 'studentInfo._id':request.params.id2},
        {
            $set:{"studentInfo.phone":request.params.id}
        },
    //result:[{subject_name:String, date_of_exam:String,score:String,status:String,title:String,action:String}],
       
        function( err ) {
        if( !err ) {
            console.log( 'storetimetable created' );
       //     callback(request,response);
            return response.send('SUccess');;
        } else {
        console.log( 'storeVendorInfo error' );
            console.log( err );
            return response.send('ERROR');
        }
    });
});
app.post( '/v1/student/name/:id/:id2', function( request, response ) {
    console.log("storeStudentInfo");
    console.log(request.params.id);
    //console.log(request.body);
   // console.log(request.body.timetable);
    SchoolModel.update({ 'studentInfo._id':request.params.id2},
    {
        $set:{"studentInfo.phone":request.params.id}
    },
//result:[{subject_name:String, date_of_exam:String,score:String,status:String,title:String,action:String}],
   
    function( err ) {
    if( !err ) {
        console.log( 'storetimetable created' );
   //     callback(request,response);
        return response.send('SUccess');;
    } else {
    console.log( 'storeVendorInfo error' );
        console.log( err );
        return response.send('ERROR');
    }
});
});

function storeStudentInfo(request,response,callback,params)
{
console.log("storeStudentInfo 11");
console.log(request.params.id);
console.log(request.body);
SchoolModel.update({ 'username':request.params.id},
{ $push: {studentInfo: {$each:[{name: request.body.name,  phone:request.body.phone,email:request.body.email}] }}},
    
        function( err ) {
        if( !err ) {
            console.log( 'storeStudentInfo created' );
            callback(request,response);
            return ;
        } else {
        console.log( 'storeVendorInfo error' );
            console.log( err );
            return response.send('ERROR');
        }
    });
}
function registerVendor(req, res, next) {
    console.log("/registerVendor");
    console.log(req.body.email);
    var hotel_id = "R";
    var res = getNextSequence('school',function(data) {
  
      hotel_id = hotel_id + data.sequence;
      console.log(hotel_id);
  
        var vendorInfo = new SchoolModel({
          username:req.body.email,
          id:hotel_id
        });
        vendorInfo.save( function( err ) {
          if( !err ) {
                console.log( 'registerVendor created' );
                console.log(req.body.email);
                    req.session.save(function (err) {
                      if (err) {
                          console.log( 'registerVendor save error' );
                        return next(err);
                      }
                      console.log( 'registerVendor save complete' );
                    });
                return ;
                } else {
                  console.log( 'registerVendor error' );
                  console.log( err );
                  return response.send('ERROR');
                }
          });
      });
  };
//module.exports = router;
}
