var express = require('express');
var router = express.Router();
var Realm = require('../util/realm');

/* GET home page. */
router.get('/', (req, res, next) => {


  var users = Realm.UserRealm
      .objects('User')
      .sorted('date', true);

  res.send({
      success : true,
      data: users
  })
});

router.get('/:name', (req, res) => {

  var name = req.params.name;

  var user = Realm.UserRealm
      .objects('User')
      .filtered(`name = "${name}"`)
      .sorted('date', true);


  res.send({
      success : true,
      data : user
  });

});

router.post('/', (req, res) => {

  var name = req.body.title;
  var email = req.body.email;
  var tel = req.body.tel;

  Realm.UserRealm.write( () => {
      Realm.UserRealm.create('User', {
          name : name,
          email : email,
          tel : tel,
          date : new Date()
      });
  });

  res.send({
    success : true
  });
});

module.exports = router;
