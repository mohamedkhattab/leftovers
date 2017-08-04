var mongoose  = require('mongoose');

var schema = mongoose.Schema;

var productSchema = new Schema({
  name:  String,
  photo: String,
  locations: [String],
  likes: Number,
  dislikes: Number,
  reviews: [{ name: String, body: String, date: Date }],
  date: { type: Date, default: Date.now },
  sponsered: Boolean
});

var Product = mongoose.model('Product', productSchema);
