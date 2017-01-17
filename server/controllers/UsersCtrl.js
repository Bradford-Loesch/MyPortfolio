var mongoose = require('mongoose'),
    User = mongoose.model('User');

function UserController() {
    this.index = function(req, res) {
        User.find({}, function(err, response) {
            if (err) {
                console.log(err);
            }
            else {
                res.json(response);
            }
        });
    }
    this.show = function(req, res) {
        User.findOne({_id: req.params.id}, function(err, response) {
            if (err) {
                console.log(err);
            }
            else {
                res.json(response);
            }
        });
    }
    this.create = function(req, res) {
        var VARIABLENAMEInstance = new User(req.body);
        VARIABLENAMEInstance.created = new Date();
        VARIABLENAMEInstance.save(function(err){
            if(err){
                console.log(err);
            }
            else {
                console.log("Succesfully saved item");
                res.json({Operation: 'Success'})
            }
        });
    }
    this.update = function(req, res) {
        User.update({_id: req.params.id}, req.body, function(err){
            if(err){
                console.log(err);
            }
            else {
                console.log("Succesfully updated item");
                res.json({Operation: 'Success'})
            }
        });
    }
    this.delete = function(req, res) {
        User.remove({_id: req.params.id}, function(err){
            if(err){
                console.log(err);
            }
            else {
                console.log("Succesfully deleted item");
                res.json({Operation: 'Success'})
            }
        })
    }
}

module.exports = new UserController();
