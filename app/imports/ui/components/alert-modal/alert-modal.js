import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Logs } from '/imports/api/logs/logs.js';

import '../../../api/alerts/methods.js';

import './alert-modal.html';

Session.setDefault('sirenAlert', false);
Session.setDefault('textAlert', false);
Session.setDefault('emailAlert', false);
Session.setDefault('tvAlert', false);
Session.setDefault('pass', false);

function clearChecks() {
  Session.set('sirenAlert', false)
  Session.set('textAlert', false)
  Session.set('emailAlert', false)
  Session.set('tvAlert', false)
}

Template.Components_alertModal.onCreated(function () {
  console.log('onCreated')
  Tracker.autorun(function() {
    Meteor.subscribe('logs.all')
  })
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
  'emailCheck': function() {
    return Session.get('emailAlert');
  },
  'tvCheck': function() {
    return Session.get('tvAlert');
  },
  'passCheck': function() {
    return Session.get('pass');
  },
});

Template.Components_alertModal.events({
  'click button'(event, instance) {

    $(`.third.modal.${instance.data.id}`)
        .modal({
          detachable: false,
          closable: false,
          observeChanges: true,
          duration: 0,
          onDeny : function() {
            clearChecks()
            $('.first.modal input').removeAttr('checked')            
            return true;
          },
          onApprove: function() {
            let password = $(`.third.modal.${instance.data.id} input:password`).val();
            if (password == "admin") {
              console.log('correct password...', 'password:', password)
              Session.set('pass', false);

              if (Session.get('emailAlert')) {
                Meteor.call('alerts.sendEmail', ' ', `EMERGENCY: ${instance.data.type} THIS IS NOT A TEST. PLEASE EVACUATE TO A SAFE AREA.`)
              }

              if (Session.get('textAlert')) {
                Meteor.call('alerts.sendSms', ' ', `EMERGENCY: ${instance.data.type} THIS IS NOT A TEST. PLEASE EVACUATE TO A SAFE AREA.`)
              }


              clearChecks()
              $('.first.modal input').removeAttr('checked')     
              $(".third.modal input:password").val('')  
              Meteor.call('logs.insert', Meteor.user().username, 'Real Alert')    
              
              return true;
            } else {
              console.log('nope! incorrect password...', 'password:', password)

              Session.set('pass', true);
              $(".third.modal input:password").val('')      
              return false;
            }
          }
        })
        // .modal('attach events', `.second.modal.${instance.data.id} .approve`)
    ;
    //confirm alerts modal
    $(`.second.modal.${instance.data.id}`)
        .modal({
          detachable: false,
          closable: false,
          observeChanges: true,
          duration: 0,
          onDeny: function() {
            clearChecks()
            $('.first.modal input').removeAttr('checked')
          },
          onApprove: function() {
            if (Session.get('currentPage') === 'alertSystem') {
              console.log('alertSystem!')
              $(`.third.modal.${instance.data.id}`).modal('show')
            } else {
              if (Session.get('emailAlert')) {
                Meteor.call('alerts.sendEmail', ' ', `This is just a test for: ${instance.data.type}.`)
              }

              if (Session.get('textAlert')) {
                Meteor.call('alerts.sendSms', ' ', `This is just a test for: ${instance.data.type}.`)
              }

              Meteor.call('logs.insert', Meteor.user().username, 'Test Alert')

              clearChecks();
            }
          }
        })
        .modal('attach events', `.first.modal.${instance.data.id} .approve`)
    ;
    //select alert types modal
    $(`.first.modal.${instance.data.id}`)
        .modal({
          detachable: false,
          closable: false,
          observeChanges: true,
          duration: 0,
          onDeny: function() {
            clearChecks()
            $('.first.modal input').removeAttr('checked')
          }
        })
        .modal('show');
  },
  'change .siren'(e, t) {
    if ($('.siren').is(':checked'))
      Session.set('sirenAlert', true);
    else
      Session.set('sirenAlert', false);
  },
  'change .textMsg'(e, t) {
    if ($('.textMsg').is(':checked'))
      Session.set('textAlert', true);
    else
      Session.set('textAlert', false);
  },
  'change .email'(e, t) {
    if ($('.email').is(':checked'))
      Session.set('emailAlert', true);
    else
      Session.set('emailAlert', false);
  },
  'change .tv'(e, t) {
    if ($('.tv').is(':checked'))
      Session.set('tvAlert', true);
    else
      Session.set('tvAlert', false);
  },
});