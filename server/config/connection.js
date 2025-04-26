const mongoose = require('mongoose');


mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/travel-planner',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => console.log("db working fine"));

module.exports = mongoose.connection;
