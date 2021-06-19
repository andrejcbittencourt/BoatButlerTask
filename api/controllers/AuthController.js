/**
 * LoginController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const passport = require('passport');

module.exports = {

  process: function (req, res) {
    passport.authenticate('local', (err, user, info) => {
      if ((err) || (!user)) {
        return res.view('pages/login', {
          error: (info['message']!==null)?info['message']:'Bad credentials',
        });
      }
      req.logIn(user, (err) => {
        req.session.userId = user.id;
        req.session.email = user.email;


        if (err) {res.send(err);}

        return res.redirect('/dashboard');

      });
    })(req, res);
  },

};

