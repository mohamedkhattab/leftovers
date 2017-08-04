var Product = require('../models/product');

module.exports = {
    create: function(obj) {
        var newProduct = new Product(obj);
        var result = false;
        newProduct.save(function(err) {
            console.log('new Product saved successfully!');
            result = true;
        });

        return result;
    },

    //returns the user object if found and null if not found
    retrieveAll: function(callback) {
        var result = null;

        query = Product.where({ email: Email });
        query.find(function(err, users) {
            //TO-DO: change in production
            if(err) console.error(err);
            if(users) result = users;

            return callback(result);
        });
    },

    retrieveById: function(id, callback) {
        User.findById(id, function (err, user) {
            if(err) console.error(err);
            return callback(user);
        });
    },

    update: function(email, newVals) {
        this.retrieve(email, function(user) {
            for (var attr in newVals) {
                if (obj.hasOwnProperty(attr)) user[attr] = newVals[attr];
            }

        });
    },

    delete: function(email, vals, drop, callback) {
        if(drop) {
            this.retrieve(email, function(user) {
                if(user) {
                    user.remove(function() {
                        return callback(true);
                    });
                }

                return callback(false);
            });
        }
    }
};
