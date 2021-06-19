/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const bcrypt = require('bcrypt');
module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    active: {type: 'boolean', required: true, },
    profilePic: {type: 'string', required: true, columnName: 'profile_pic', },
    name: {type: 'string', required: true, },
    email: {type: 'string', required: true, isEmail: true, unique: true, },
    password: {type: 'string', required: true, protect: true, },
    phoneNumber: {type: 'string', required: true, columnName: 'phone_number', },
    address: {type: 'string', required: true, },
    zipCode: {type: 'string', required: true, columnName: 'zip_code', },
    city: {type: 'string', required: true, },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    userRoleId: {
      model: 'userRole'
    },
    jobs: {
      collection: 'job',
      via: 'userId'
    },
    boats: {
      collection: 'boat',
      via: 'userId'
    },
    companies: {
      collection: 'company',
      via: 'userId'
    }

  },
  tableName: 'user',
  customToJSON: function() {
    // Return a shallow copy of this record with the password removed.
    return _.omit(this, ['password'])
  },
  beforeCreate: function (user, cb) {
    if (user.password) {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
          if (err) {
            console.log(err);
            cb(err);
          } else {
            user.password = hash;
            console.log('saving data' + user.password);
            cb();
          }
        });
      });
    }else{
      cb();
    }
  },

};

