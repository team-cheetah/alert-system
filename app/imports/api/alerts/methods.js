import { Meteor } from 'meteor/meteor'

if (Meteor.isServer) {
    Meteor.methods({
        'alerts.sendSms'(temp, message) {
            let sid = Meteor.settings.private.TWILIO_LIVE_SID;
            let token = Meteor.settings.private.TWILIO_LIVE_TOKEN;
            let number = Meteor.settings.private.TWILIO_NUMBER;
            let recipient = Meteor.settings.private.TWILIO_RECIPIENT;

            console.log(sid, token, number)

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

        'alerts.sendEmail'(temp, message) {
            let recipient = Meteor.settings.private.EMAIL_RECIPIENT;

            Email.send({
                to: recipient,
                from: `John Doe <${Meteor.settings.private.EMAIL_USERNAME}>`,
                subject: 'EMERGENCY',
                html: `<p>${message}</p>`
            });
        }
    })
}
