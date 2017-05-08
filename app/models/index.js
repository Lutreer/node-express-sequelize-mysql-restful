/**
 * Created by leasong on 17/4/28.
 */
var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var DB_CONFIG = require("../../config/db.json")[env];


var sequelize = new Sequelize(DB_CONFIG.database, DB_CONFIG.username, DB_CONFIG.password, {
    host: DB_CONFIG.host,
    dialect: DB_CONFIG.dialect,
    // 数据库连接池
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    },
    define: {
        timestamps: true,// 启用该配置后会自动添加createdAt、updatedAt两个字段
        underscored: true,// createAt => create_at
        underscoredAll: true //表名也默认由驼峰变下划线
    }
});
var db = {};

fs
.readdirSync(__dirname)
.filter(function (file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
})
.forEach(function (file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
});

// 模型关联关系
Object.keys(db).forEach(function (modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;