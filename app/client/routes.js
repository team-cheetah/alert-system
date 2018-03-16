import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '/imports/ui/layouts/body.js';

import '/imports/ui/pages/sample.html';
import '/imports/ui/pages/system-test/system-test.js';
// Set up all routes in the app

FlowRouter.route('/', {
  name: 'App.main',
  action() {
    BlazeLayout.render('Layouts_body', { main: 'Pages_systemTest' });
  },
});