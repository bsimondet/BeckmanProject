/**
 * School model events
 */

'use strict';

import {EventEmitter} from 'events';
import School from './School.model';
var SchoolEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
SchoolEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  School.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    SchoolEvents.emit(event + ':' + doc._id, doc);
    SchoolEvents.emit(event, doc);
  }
}

export default SchoolEvents;
