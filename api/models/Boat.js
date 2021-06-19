/**
 * Boat.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    name: {type: 'string', required: true, },
    year: {type: 'number', required: true, },
    engineSerialNumber: {type: 'string', required: true, columnName: 'engine_serial_number', },
    description: {type: 'string', required: true, },
    length: {type: 'number', required: true, },
    address: {type: 'string', required: true, },
    zipCode: {type: 'string', required: true, columnName: 'zip_code', },
    city: {type: 'string', required: true, },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    jobs: {
      collection: 'job',
      via: 'boatId'
    },
    boatSubtypeId: {
      model: 'boatSubtype'
    },
    userId: {
      model: 'user'
    }

  },
  tableName: 'boat',

};

