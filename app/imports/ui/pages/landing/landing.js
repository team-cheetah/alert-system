import { Accounts } from 'meteor/accounts-base';
import './landing.html'

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});
