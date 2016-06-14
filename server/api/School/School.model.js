'use strict';

import mongoose from 'mongoose';

var SchoolSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('School', SchoolSchema);
