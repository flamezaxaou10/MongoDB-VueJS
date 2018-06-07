var mongoose = require('mongoose');
var Userchema = new mongoose.Schema({
  user: String,
  pass: String
});
module.exports = mongoose.model('User', Userchema);
