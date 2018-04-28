import { Meteor } from 'meteor/meteor';
import { Logs } from './logs.js';

if (Meteor.isServer) {
  Meteor.publish('logs.all', function() {
    return Logs.find();
  });
}
