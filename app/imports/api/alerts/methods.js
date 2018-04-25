import { Meteor } from 'meteor/meteor'

Meteor.methods({
    'alerts.sendSms'(recipient, message) {
        let sid = Meteor.settings.private.TWILIO_LIVE_SID;
        let token = Meteor.settings.private.TWILIO_LIVE_TOKEN;
        let number = Meteor.settings.private.TWILIO_NUMBER;

        if (!sid || !token || !number) return;

        let twilio = Twilio(sid, token)
        twilio.sendSms({
            to: recipient,
            from: number,
            body: message,
        }, (err, res) => {
            console.log(res)
        })
    },

    'alerts.sendEmail'(recipient, message) {
        Email.send({
            to: recipient,
            from: `John Doe <${Meteor.settings.private.EMAIL_USERNAME}`,
            subject: 'Hello',
            html: `<p>${message}</p>`
        });
    }
})