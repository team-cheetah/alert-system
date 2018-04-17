import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '/imports/ui/layouts/body.js';

import '/imports/ui/pages/sample.html';
import '/imports/ui/pages/system-test/system-test.js';
import '/imports/ui/pages/alert-system/alert-system.js'
import '/imports/ui/pages/landing/landing.js'

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.main',
  action() {
    BlazeLayout.render('Layouts_body', { main: 'Pages_landing' });
  },
});

FlowRouter.route('/system-test', {
  name: 'System_Test',
  action() {
    BlazeLayout.render('Layouts_body', { main: 'Pages_systemTest' });
  },
});

FlowRouter.route('/alert-system', {
  name: 'Alert_System_Page',
  action() {
    BlazeLayout.render('Layouts_body', {main: 'Pages_alertSystem'})}

});