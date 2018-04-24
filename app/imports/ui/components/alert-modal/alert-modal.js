import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import '../../../api/alerts/methods.js';

import './alert-modal.html';

Session.setDefault('sirenAlert', false);
Session.setDefault('textAlert', false);
Session.setDefault('radioAlert', false);
Session.setDefault('tvAlert', false);
Session.setDefault('pass', false);
Session.setDefault('path', false);

Template.Components_alertModal.onCreated(function () {

});

Template.Components_alertModal.onDestroyed(function () {
  $('.modal').remove();
})

Template.Components_alertModal.helpers({
  'sirenCheck': function() {
    return Session.get('sirenAlert');
  },
  'textCheck': function() {
    return Session.get('textAlert');
  },
  'radioCheck': function() {
    return Session.get('radioAlert');
  },
  'tvCheck': function() {
    return Session.get('tvAlert');
  },
  'passCheck': function() {
    return Session.get('pass');
  },
  'pathCheck': function() {
    return Session.get('path');
  }
});

Template.Components_alertModal.events({
  'click button'(event, instance) {
    Meteor.call('alerts.sendSms', (res) => {
      //console.log(res)
    });
    // $('.coupled.modal')
    //     .modal({
    //       allowMultiple: false
    //     })
    // ;
    //confirmation modal
    /*
    $(`.third.modal.${instance.data.id}`)
        .modal({detachable: false})
        .modal('attach events', `.second.modal.${instance.data.id} .approve`)
    ;*/
    $(`.fifth.modal.${instance.data.id}`)
        .modal({
          detachable: false,
          closable: false,
          onApprove: function() {
            return true;
          }
        })
        .modal('attach events', `.second.modal.${instance.data.id} .approve`)
    ;
    $(`.fourth.modal.${instance.data.id}`)
        .modal({
          detachable: false,
          closable: false,
          onApprove: function() {
            return true;
          }
        })
        .modal('attach events', `.third.modal.${instance.data.id} .approve`)
    ;
    //password modal
    $(`.third.modal.${instance.data.id}`)
        .modal({
          detachable: false,
          closable: false,
          onDeny : function() {
            return true;
          },
          onApprove: function () {
            if ($("input:password").val() === "admin") {
              Session.set('pass', false);
              return true;
            } else {
              Session.set('pass', true);
              return false;
            }
          }
        })
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
          closable: false,
          onApprove: function() {
            if (window.location.pathname.match("/alert-system")) {
              Session.set('path', true);
            } else {
              Session.set('path', false);
            }
            console.log(Session.get('path'));
          }
        })
        .modal('show');
  },
  'change #siren'(e, t) {
    console.log(window.location.pathname);
    if ($('#siren').is(':checked'))
      Session.set('sirenAlert', true);
    else
      Session.set('sirenAlert', false);
  },
  'change #textMsg'(e, t) {
    if ($('#textMsg').is(':checked'))
      Session.set('textAlert', true);
    else
      Session.set('textAlert', false);
  },
  'change #radio'(e, t) {
    if ($('#radio').is(':checked'))
      Session.set('radioAlert', true);
    else
      Session.set('radioAlert', false);
  },
  'change #tv'(e, t) {
    if ($('#tv').is(':checked'))
      Session.set('tvAlert', true);
    else
      Session.set('tvAlert', false);
  },
});