import { Template } from 'meteor/templating';
import '/imports/ui/components/alert-modal/alert-modal.js';
import './alert-system.html';

Template.Pages_alertSystem.onCreated(function() {
  Session.set('currentPage', 'alertSystem')
});

Template.Pages_alertSystem.helpers({

});

Template.Pages_alertSystem.events({
  'click button': function() {

  }
});