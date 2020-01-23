var mongoose = require('mongoose'),
    user = require("../models/user");
var connection = mongoose.connect('mongodb://us:1234@cluster0-shard-00-00-trc4t.gcp.mongodb.net:27017,cluster0-shard-00-01-trc4t.gcp.mongodb.net:27017,cluster0-shard-00-02-trc4t.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', {
    useMongoClient: true
});

connection.on("open", function(ref) {
    console.log("Connected to mongo server.");
    user.find({ userName: 'admin' }, function(err, data) {
        if (err) {
            console.log("Error on Admin Find: ",err);
        } else {
            if (data.length === 0)
                createAdmin();
            else console.log("Admin already created");
        }
    });
//esta parte no les sirve
    function createAdmin() {
        var model = new user({ name: 'Admin', userName: 'admin', password: 'admin', role: 'Admin',telefono:'00',apellido:'Hola',cedula:'ss' });
        model.save(function(err, result) {
            if (err) {
                console.log("error on Admin creation: ", err);
                return;
            }
            console.log("Admin created:");
        });
    }
});

module.exports = connection;