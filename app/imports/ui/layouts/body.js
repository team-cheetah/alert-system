import { Template } from 'meteor/templating';

import './body.html';
import '../components/navigation-menu.js';


Template.Layouts_body.onCreated(function() {

});

Template.Layouts_body.helpers({
  check1 : "Warning Siren",
  check2 : "Text Message",
  check3 : "Radio Broadcast",
  check4 : "Television Broadcast",
});

Template.Layouts_body.events({
});