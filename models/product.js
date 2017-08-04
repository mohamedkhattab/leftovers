var mongoose  = require('../lib/dbconnect');

var schema = mongoose.Schema;

var productSchema = new schema({
  name:  String,
  photo: String,
  locations: [String],
  tags: [String],
  likes: Number,
  dislikes: Number,
  reviews: [{ name: String, body: String, date: Date }],
  date: { type: Date, default: Date.now },
  sponsered: Boolean
});

var product = mongoose.model('product', productSchema);

module.exports = product;
