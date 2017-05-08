/**
 * Created by leasong on 17/4/28.
 */

var express = require('express');
var router = express.Router();
var User = require('../models').User

/* GET users listing. */
router.get('/create', function(req, res, next) {
  debugger

    // var user = User.build({
    //     userName: '小---明',
    //     account: '技术部',
    //     phone:"13848484",
    //     password:"23423r2r232r23r23r",
    //     sex:2,
    //     photo:"sfsfsdfsdfsdfsdfsdfsdfsfsdfsdfsfsdf"
    // })
    // user.save()

// User.findAll().then(function (res) {
//     res
//     debugger
// })

// 方法2：直接操作db
//     var user = User.create({
//         userName: '小明',
//         account: '技术部',
//         phone:"13848484",
//         password:"23423r2r232r23r23r",
//         sex:2,
//         photo:"sfsfsdfsdfsdfsdfsdfsdfsfsdfsdfsfsdf"
//     }).then(function(){
//       debugger
//     });
    debugger
  res.send('respond with a rrrrrrrresources');
});

module.exports = router;
