const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

async function findById(id, fn) {
  let userId = await User.findOne(id);
  if(userId){
    return fn(null ,userId);
  }

}

async function findByUsername(u, fn) {

  try {
    let user = await User.findOne({email: u});

    if(user){

      return fn(null , user);
    }else{
      return fn(null , false);
    }
  }
  catch (e) {
    console.log(e);
  }

}

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  findById(id, (err, user) => {
    done(err, user);
  });
});


passport.use(new LocalStrategy(
  ((username, password, done) => {

    process.nextTick(() => {
      findByUsername(username, (err, user) => {
        if (err)
          return done(null, err);

        bcrypt.compare(password, user.password, (err, res) => {
          if (!res)
            return done(null, false, {
              message: 'Invalid Password'
            });

          return done(null, user, {
            message: 'Logged In Successfully'
          });
        });
      })
    });
  })
));
