module.exports = {
  
  friendlyName: 'Get all available Sermons',

  description: 'Get all available Sermons',

  inputs: {},

  exits: {},

  fn: async function(inputs, exits) {
    sails.log.info(`Getting all sermons..`);

    const url = sails.config.custom.sermons.host;

    try {
      return exits.success(await sails.helpers.getData(url));
    } catch (err) {
      sails.log(err);
      return exits.success(err);
    }
  }

};
