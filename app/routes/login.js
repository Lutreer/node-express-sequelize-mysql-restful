/**
 * Created by leasong on 17/5/8.
 */
var express = require('express')
var router = express.Router()


// login 路由要做登录，包括分配token
router.post('/user', function (req, res, next) {

    debugger
    res.json(req.body)
})


module.exports = router
