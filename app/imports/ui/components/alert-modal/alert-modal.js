import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './alert-modal.html';

sirenAlert = false;
textAlert = false;
radioAlert = false;
tvAlert = false;

Template.Components_alertModal.onCreated(function () {

});

Template.Components_alertModal.onDestroyed(function () {
  $('.modal').remove();
})

Template.Components_alertModal.helpers({
  'sirenCheck': function() {
    return sirenAlert;
  },
  'textCheck': function() {
    return textAlert;
  },
  'radioCheck': function() {
    return radioAlert;
  },
  'tvCheck': function() {
    return tvAlert;
  },
});

Template.Components_alertModal.events({
  'click button'(event, instance) {
    // $('.coupled.modal')
    //     .modal({
    //       allowMultiple: false
    //     })
    // ;
    //confirmation modal
    $(`.third.modal.${instance.data.id}`)
        .modal('attach events', `.second.modal.${instance.data.id} .approve`)
    ;
    //confirm alerts modal
    $(`.second.modal.${instance.data.id}`)
        .modal('setting', 'closable', false)
        .modal('attach events', `.first.modal.${instance.data.id} .approve`)
    ;
    //select alert types modal
    $(`.first.modal.${instance.data.id}`)
        .modal('show')
        .modal({
          closable: false
        });
  },
  'click #siren': function() {
    if (document.getElementById('siren').checked) {
      sirenAlert = true;
      console.log("siren is checked");
    }
    else
      sirenAlert = false;
  },
  'change #text': function() {
    if (document.getElementById('text').checked)
      textAlert = true;
    else
      textAlert = false;
  },
  'change #radio': function() {
    if (document.getElementById('radio').checked)
      radioAlert = true;
    else
      radioAlert = false;
  },
  'change #tv': function() {
    if (document.getElementById('tv').checked)
      tvAlert = true;
    else
      tvAlert = false;
  },
});