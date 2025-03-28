
const app = require('./src/app');

const config = require("./config");

const { sequelize } = require('./src/models');


// Sync database and start server
const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
;
