const sequelize = require("../config/db");
const {DataTypes} = require("sequelize");

const userSchema = sequelize.define("User",{
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    userName : {
        type : DataTypes.STRING(40),
    }
},{
    tableName : "ease",
    timestamps : true
});

module.exports = {userSchema};