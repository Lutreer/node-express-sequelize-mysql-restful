/**
 * Created by leasong on 17/4/29.
 */
"use strict";

module.exports = function(sequelize, DataTypes) {
    var Address = sequelize.define('Address', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        phone: DataTypes.STRING(11),
        userName: DataTypes.STRING(40),
        detail: DataTypes.TEXT,
        isDefault: DataTypes.INTEGER,
        collage: DataTypes.INTEGER,
        userId: DataTypes.INTEGER(11)

    }, {
        tableName: 'address',
        comment: '用户收货地址',// 备注
        classMethods: {

        }
    });

    return Address;
};