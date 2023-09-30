const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// function logGets (req, res, next){
//   if(req.method === "GET"){
//     console.log(`=================GETTTTIINNGGNG+++++++++++++++++++`)
//   }
//   next()
// }

// app.use(logGets)
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => 
  console.log(`App listening on port ${PORT}!`)
  );
});

//gerardoperez@Gerardos-Air Develop % npm install
// npm WARN deprecated sequelize@5.22.5: Please update to v6 or higher! A migration guide can be found here: https://sequelize.org/v6/manual/upgrade-to-v6.html
