// Set up a collection to contain player information. On the server,
// it is backed by a MongoDB collection named "players".

Pulses = new Meteor.Collection("pulses");

if (Meteor.isClient) {
  Template.monitor.pulses = function () {
    return Pulses.find({}, {sort: {timestamp: -1}});
  };


  Template.monitor.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
