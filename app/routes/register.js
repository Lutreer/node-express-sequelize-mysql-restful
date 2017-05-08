/**
 * Created by leasong on 17/5/8.
 */
var express = require('express')
var router = express.Router()


// login 路由要做登录，包括分配token
router.post('', function (req, res, next) {
    var params = req.body
    var password = params.password

    var cryptoPassword = crypto.createHash("md5").update(password).digest("hex");
    debugger
    res.json(req.body)
})


module.exports = router
