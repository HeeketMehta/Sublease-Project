const config = require("../config/db.config.js");



const Sequelize = require("sequelize");







const sequelize = new Sequelize({
  database: "postgres",
  username: "postgres",
  password: "pgdb@1234",
  host: "db",
  port: 5432, 
  //////Database URL://'postgres://postgres:pgdb@1234@localhost:5432/',
  dialect: "postgres",
  dialectOptions: {},
  pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
});



const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;



db.user = require("./user.model")(sequelize, Sequelize);
db.role = require("./role.model")(sequelize, Sequelize);
db.listing = require("./listing.model")(sequelize, Sequelize);




db.role.belongsToMany(db.user, {
  through: "user_roles"
});
db.user.belongsToMany(db.role, {
  through: "user_roles"
});

db.user.belongsToMany(db.listing, {
  through: "user_listing"
});

db.listing.belongsTo(db.user, {
  through: "user_listing"
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;