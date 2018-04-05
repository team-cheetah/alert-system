import { Template } from 'meteor/templating';

import './alert-modal.html';

Template.Components_alertModal.onCreated(function () {

});

Template.Components_alertModal.helpers({});

Template.Components_alertModal.events({
  'click button'(event, instance) {
    // $('.coupled.modal')
    //     .modal({
    //       allowMultiple: false
    //     })
    // ;
    //confirmation modal
    $(`.third.modal.${instance.data.id}`)
        .modal('attach events', '.second .approve')
    ;
    //confirm alerts modal
    $(`.second.modal.${instance.data.id}`)
        .modal('setting', 'closable', false)
        .modal('attach events', '.first .approve')
    ;
    //select alert types modal
    $(`.first.modal.${instance.data.id}`)
        .modal('show')
        .modal({
          closable: false
        });
  }
});