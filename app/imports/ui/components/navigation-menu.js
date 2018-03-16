import { Template } from 'meteor/templating';

import './navigation-menu.html';

Template.Components_navigationMenu.onCreated(function () {

});

Template.Components_navigationMenu.helpers({

});

Template.Components_navigationMenu.events({
  'click .item'(event, instance) {
    $('.item').each(function() {
      $(this).removeClass('active');
    });

    $(event.target).addClass('active');
  }
});