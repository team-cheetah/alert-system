import { Template } from 'meteor/templating';

import './alert-system.html';

Template.Pages_systemTest.onCreated(function() {

});

Template.Pages_systemTest.helpers({

});

Template.Pages_systemTest.events({
  'click button'() {
    console.log("Button Clicked");
    $('.coupled.modal')
        .modal({
          allowMultiple: false
        })
    ;
// attach events to buttons
    $('.second.modal')
        .modal('attach events', '.first.modal .button')
    ;
// show first now
    $('#firstModal')
        .modal('show')
    ;
  }
});