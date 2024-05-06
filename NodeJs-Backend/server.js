const express = require("express");
const cors = require("cors");




const app = express();
const PORT = process.env.PORT || 8080;

var corsOptions = {
    origin: "http://localhost:8080"
  };

app.use(cors(corsOptions));
  

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/listing.routes')(app);




// DATABASE CONFIGURATION.....
const db = require("./models");
const Role = db.role;

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});



// db.sequelize.sync().then(() => {
//   console.log('Drop and Resync Db');
//   initial();
// });

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}






// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Sublease Marketplace application." });
  });



  
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});