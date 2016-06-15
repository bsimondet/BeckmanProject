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
      firstname: 'User',
      lastname: 'User',
      email: 'test@test.com',
      password: 'test',
      schoolName: 'Sauk Rapids-Rice'
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
      active: true,
      leaderboard: [{
        studentName: "Tony Stark",
        score: 100
      }, {
        studentName: "Steve Rogers",
        score: 100000000000
      }, {
        studentName: "Bruce Banner",
        score: 46.2
      }, {
        studentName: "Thor",
        score: 42
      }, {
        studentName: "Natasha Romanoff",
        score: 20000
      }, {
        studentName: "Clint Barton",
        score: 2
      }]
    }, {
      name: "Atlantic Middle School",
      state: "IA",
      city: "Atlantic",
      active: true,
      leaderboard: [{
        studentName: "Tony Stark",
        score: 100
      }, {
        studentName: "Steve Rogers",
        score: 100000000000
      }, {
        studentName: "Bruce Banner",
        score: 46.2
      }, {
        studentName: "Thor",
        score: 42
      }, {
        studentName: "Natasha Romanoff",
        score: 20000
      }, {
        studentName: "Clint Barton",
        score: 2
      }]
    }, {
      name: "Charlotte Country Day School",
      state: "NC",
      city: "Charlotte",
      active: true,
      leaderboard: [{
        studentName: "Tony Stark",
        score: 100
      }, {
        studentName: "Steve Rogers",
        score: 100000000000
      }, {
        studentName: "Bruce Banner",
        score: 46.2
      }, {
        studentName: "Thor",
        score: 42
      }, {
        studentName: "Natasha Romanoff",
        score: 20000
      }, {
        studentName: "Clint Barton",
        score: 2
      }]
    }, {
      name: "Minnetonka Middle West",
      state: "MN",
      city: "Minnetonka",
      active: true,
      leaderboard: [{
        studentName: "Tony Stark",
        score: 100
      }, {
        studentName: "Steve Rogers",
        score: 100000000000
      }, {
        studentName: "Bruce Banner",
        score: 46.2
      }, {
        studentName: "Thor",
        score: 42
      }, {
        studentName: "Natasha Romanoff",
        score: 20000
      }, {
        studentName: "Clint Barton",
        score: 2
      }]
    }, {
      name: "Our Lady of the Presentation",
      state: "MO",
      city: "Lee's Summit",
      active: true,
      leaderboard: [{
        studentName: "Tony Stark",
        score: 100
      }, {
        studentName: "Steve Rogers",
        score: 100000000000
      }, {
        studentName: "Bruce Banner",
        score: 46.2
      }, {
        studentName: "Thor",
        score: 42
      }, {
        studentName: "Natasha Romanoff",
        score: 20000
      }, {
        studentName: "Clint Barton",
        score: 2
      }]
    },
    {
      name: "Red Oak Middle School",
      state: "NC",
      city: "Red Oak",
      active: true,
      leaderboard: [{
        studentName: "Tony Stark",
        score: 100
      }, {
        studentName: "Steve Rogers",
        score: 100000000000
      }, {
        studentName: "Bruce Banner",
        score: 46.2
      }, {
        studentName: "Thor",
        score: 42
      }, {
        studentName: "Natasha Romanoff",
        score: 20000
      }, {
        studentName: "Clint Barton",
        score: 2
      }]
    }, {
      name: "Sauk Rapids-Rice Middle School",
      state: "MN",
      city: "Sauk Rapids",
      active: true,
      leaderboard: [{
        studentName: "Tony Stark",
        score: 100
      }, {
        studentName: "Steve Rogers",
        score: 100000000000
      }, {
        studentName: "Bruce Banner",
        score: 46.2
      }, {
        studentName: "Thor",
        score: 42
      }, {
        studentName: "Natasha Romanoff",
        score: 20000
      }, {
        studentName: "Clint Barton",
        score: 2
      }]
    })
  })
