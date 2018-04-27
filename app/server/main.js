import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  if (Meteor.isServer) {
    console.log('hello')
    const host = Meteor.settings.private.EMAIL_HOST,
          port = Meteor.settings.private.EMAIL_PORT,
          username = Meteor.settings.private.EMAil_USERNAME,
          password = Meteor.settings.private.EMAIL_PASSWORD

    process.env.MAIL_URL = `smtps://${username}:${password}@${host}:${port}`;
    import '/imports/api/alerts/methods.js';
  }
});
