const router = require('express').Router();
let User = require('../models/Users');

router.route('/add').post((req, res) => {
    const Name = Number(req.body.Id);
    const Email = req.body.Title;
    const Age = Number(req.body.year);
    const Contact = Number(req.body.Rating);
    const newUser = new Movie({
      Name,
      Email,
      Age,
      Contact,
    });
  
    newUser.save()
    .then(() => res.status(200).send("User added "))
    .catch(err => res.status(400).json('Error: ' + err));
  });


  module.exports = router;