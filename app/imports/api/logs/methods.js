import { Meteor } from 'meteor/meteor'
import { Logs } from './logs.js';

if (Meteor.isServer) {
    Meteor.methods({
        'logs.insert'(user, type) {
            console.log(user)
            console.log(type)
            return Logs.insert({
              user: user,
              type: type,
              timestamp: new Date()
            });
        },
    })
}
