/**
 * Company.js
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
    lat: {type: 'number', required: true, },
    lng: {type: 'number', required: true, },
    logoImageUrl: {type: 'string', required: true, columnName: 'logo_image_url', },
    cvr: {type: 'string', required: true, unique: true, minLength: 10, maxLength: 10, },
    isPaid: {type: 'boolean', required: true, columnName: 'is_paid', },
    isEnabled: {type: 'boolean', required: true, columnName: 'is_enabled', },
    isVisible: {type: 'boolean', required: true, columnName: 'is_visible', },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    jobs: {
      collection: 'job',
      via: 'awardedCompanyId'
    },
    userId: {
      model: 'user'
    },
    proposals: {
      collection: 'proposal',
      via: 'companyId'
    }

  },
  tableName: 'company',

};

