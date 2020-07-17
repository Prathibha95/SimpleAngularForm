const mongoose = require("mongoose");

const User = mongoose.model("User");

module.exports.submit = (req, res, next) => {
  var user = new User();
  user.fname = req.body.fname;
  user.lname = req.body.lname;
  user.address = req.body.address;
  user.phone = req.body.phone;
  user.email = req.body.email;
  user.save((err, doc) => {
    if (!err) res.send(doc);
    else {
      if (err.code == 11000)
        res.status(422).send(["Duplicate email adrress found."]);
      else return next(err);
    }
  });
};
