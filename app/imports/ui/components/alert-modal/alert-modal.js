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
        .modal({ closable: false });
  },
  'change #siren'() {
    console.log("clicked siren");
    if (document.getElementById('siren').checked)
      textAlert = true;
    else
      textAlert = false;
  },
  'change #textMsg'() {
    console.log("clicked text");
    if (document.getElementById('textMsg').checked)
      textAlert = true;
    else
      textAlert = false;
  },
  'change #radio': function() {
    console.log("clicked radio");
    if (document.getElementById('radio').checked)
      radioAlert = true;
    else
      radioAlert = false;
  },
  'change #tv': function() {
    console.log("clicked tv");
    if (document.getElementById('tv').checked)
      tvAlert = true;
    else
      tvAlert = false;
  },
});