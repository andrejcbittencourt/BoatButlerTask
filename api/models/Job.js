/**
 * Job.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    isEmergency: {type: 'boolean', required: true, columnName: 'is_emergency', },
    title: {type: 'string', required: true, },
    description: {type: 'string', required: true, },
    allowContactByApp: {type: 'boolean', required: true, columnName: 'allow_contact_by_app', },
    canUserBringBoat: {type: 'boolean', required: true, columnName: 'can_user_bring_boat', },
    allowPickingFromSpot: {type: 'boolean', required: true, columnName: 'allow_picking_from_spot', },
    allowRepairOnSpot: {type: 'boolean', required: true, columnName: 'allow_repair_on_spot', },
    allowContactByPhone: {type: 'boolean', required: true, columnName: 'allow_contact_by_phone', },
    allowContactByEmail: {type: 'boolean', required: true, columnName: 'allow_contact_by_email', },
    lat: {type: 'number', required: true, },
    lng: {type: 'number', required: true, },
    price: {type: 'number', required: true, },
    posted: {type: 'boolean', required: true, },
    dueDate: {type: 'string', columnType: 'datetime', required: true, columnName: 'due_date', },
    dueTime: {type: 'string', columnType: 'datetime', required: true, columnName: 'due_time', },
    isDone: {type: 'boolean', required: true, columnName: 'is_done', },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    userId: {
      model: 'user'
    },
    boatId: {
      model: 'boat'
    },
    serviceId: {
      model: 'service'
    },
    awardedCompanyId: {
      model: 'company'
    },
    proposals: {
      collection: 'proposal',
      via: 'jobId'
    }

  },
  tableName: 'job',

};

