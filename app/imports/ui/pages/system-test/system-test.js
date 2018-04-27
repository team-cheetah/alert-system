import { Template } from 'meteor/templating';
import '/imports/ui/components/alert-modal/alert-modal.js';
import './system-test.html';

Template.Pages_systemTest.onCreated(function() {
  Session.set('currentPage', 'systemTest')
});

Template.Pages_systemTest.helpers({

});

Template.Pages_systemTest.events({
  'click button': function() {

  }
});