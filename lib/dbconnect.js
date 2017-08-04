var mongoose = require('mongoose');

var constring = "mongodb://mohamed:CERNhadroncollider1@ds129733.mlab.com:29733/leftovers";
mongoose.connect(constring);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // TO-DO
});

module.exports = mongoose;
