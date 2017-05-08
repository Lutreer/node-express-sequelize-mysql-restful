/**
 * Created by leasong on 17/4/28.
 */
"use strict";

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        id:{
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        userName: {
            type: DataTypes.STRING(40),
            allowNull: true,
        },
        account:DataTypes.STRING(18),//varchar(18) 默认 255
        phone:DataTypes.STRING(11),
        password:DataTypes.STRING(18),
        sex:DataTypes.INTEGER(1),
        photo:DataTypes.TEXT
    }, {
        tableName:'user',
        comment: '用户登录信息',// 备注
        classMethods: {
            associate: function(models) {
                User.hasMany(models.Address, {
                    foreignKey: 'userId'
                })
            }
        }
    });


    return User;
};