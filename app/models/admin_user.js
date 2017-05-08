/**
 * Created by leasong on 17/4/28.
 */
"use strict";

module.exports = function (sequelize, DataTypes) {
    var AdminUser = sequelize.define('AdminUser', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        userName: {
            type: DataTypes.STRING(40),
            allowNull: true,
        },
        account: DataTypes.STRING(18),//varchar(18) 默认 255
        phone: DataTypes.STRING(11),
        password: DataTypes.STRING(64),
        sex: DataTypes.INTEGER(1),
        photo: DataTypes.TEXT,
        lastLoginAt: DataTypes.dateTime
    }, {
        tableName: 'admin_user',
        comment: '管理员登录信息',// 备注
        classMethods: {}
    });


    return User;
};