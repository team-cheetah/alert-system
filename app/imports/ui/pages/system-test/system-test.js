import { Template } from 'meteor/templating';

import './system-test.html';

Template.Pages_systemTest.onCreated(function() {

});

Template.Pages_systemTest.helpers({

});

Template.Pages_systemTest.events({
  'click button': function() {
    $('.coupled.modal')
        .modal({
          allowMultiple: false
        })
    ;
    //confirmation modal
    $('.third.modal')
        .modal('attach events', '.second .approve')
    ;
    //confirm alerts modal
    $('.second.modal')
        .modal('setting', 'closable', false)
        .modal('attach events', '.first .approve')
    ;
    //select alert types modal
    $(".first")
        .modal('show')
        .modal({
          closable:false
        });
  }
});