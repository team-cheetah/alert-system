import { Template } from 'meteor/templating';

import './alert-system.html';

Template.Pages_alertSystem.onCreated(function() {

});

Template.Pages_alertSystem.helpers({

});

Template.Pages_alertSystem-.events({
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