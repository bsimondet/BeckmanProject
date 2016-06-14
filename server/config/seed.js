/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import School from '../api/School/School.model';

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@test.com',
      password: 'test'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });

  School.find({}).remove()
  .then(() => {
    School.create({
      name: "Prairie Point and 9th Grade Academy",
      state: "IA",
      city: "Cedar Point",
      active: true
    }, {
      name: "Atlantic Middle School",
      state: "IA",
      city: "Atlantic",
      active: true
    }, {
      name: "Charlotte Country Day School",
      state: "NC",
      city: "Charlotte",
      active: true
    }, {
      name: "Minnetonka Middle West",
      state: "MN",
      city: "Minnetonka",
      active: true
    }, {
      name: "Our Lady of the Presentation",
      state: "MO",
      city: "Lee's Summit",
      active: true
    },
    {
      name: "Red Oak Middle School",
      state: "NC",
      city: "Red Oak",
      active: true
    }, {
      name: "Sauk Rapids-Rice Middle School",
      state: "MN",
      city: "Sauk Rapids",
      active: true
    })
  })
