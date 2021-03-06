'use strict';

import mongoose from 'mongoose';

var SchoolSchema = new mongoose.Schema({
  name: String,
  state: String,
  city: String,
  active: Boolean,
  leaderboard: [{
    studentName: String,
    score: Number
  }]
});

export default mongoose.model('School', SchoolSchema);
