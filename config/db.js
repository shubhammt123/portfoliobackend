const {Sequelize} =  require("sequelize");

const sequelize = new Sequelize("users","root","n3u3da!",{host : "localhost",dialect : "mysql"});

module.exports = sequelize;