import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './alert-modal.html';

let sirenAlert = false;
let textAlert = false;
let radioAlert = false;
let tvAlert = false;

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
    return true;
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
        .modal({detachable: false})
        .modal('attach events', `.second.modal.${instance.data.id} .approve`)
    ;
    //confirm alerts modal
    $(`.second.modal.${instance.data.id}`)
        .modal({
          detachable: false,
          closable: false,
        })
        .modal('attach events', `.first.modal.${instance.data.id} .approve`)
    ;
    //select alert types modal
    $(`.first.modal.${instance.data.id}`)
        .modal({
          detachable: false,
          closable: false
        })
        .modal('show');
  },
  'change #siren'(e, t) {
    console.log("something is checked or unchecked");
  },
  'change #text'(e, t) {
    if (document.getElementById('text').checked)
      textAlert = true;
    else
      textAlert = false;
  },
  'change #radio'(e, t) {
    if (document.getElementById('radio').checked)
      radioAlert = true;
    else
      radioAlert = false;
  },
  'change #tv'(e, t) {
    if (document.getElementById('tv').checked)
      tvAlert = true;
    else
      tvAlert = false;
  },
});