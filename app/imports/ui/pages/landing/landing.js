import { Accounts } from 'meteor/accounts-base';
import './landing.html'

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});


Template.Pages_landing.onCreated(function() {
  Session.set('currentPage', 'landing')
});
