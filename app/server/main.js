import { Meteor } from 'meteor/meteor';

import '/imports/api/alerts/methods.js';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.methods({
    'alerts.sendSms'() {
        let sid = Meteor.settings.private.TWILIO_LIVE_SID;
        let token = Meteor.settings.private.TWILIO_LIVE_TOKEN;
        let number = Meteor.settings.private.TWILIO_NUMBER;

        if (!sid || !token || !number) return;

        let twilio = Twilio(sid, token)
        twilio.sendSms({
            to: '+18084629109',
            from: number,
            body: 'test sms message',
        }, (err, res) => {
            console.log(res)
        })
    },

    'alerts.sendEmail'() {

    }
})
});
