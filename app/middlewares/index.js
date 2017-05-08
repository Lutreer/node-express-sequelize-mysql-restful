/**
 * Created by leasong on 17/5/8.
 */
var logger = require('morgan');// 在控制台中，显示req请求的信息
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// 对顺序敏感
module.exports = [
    logger('dev'),
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),
    cookieParser()
]