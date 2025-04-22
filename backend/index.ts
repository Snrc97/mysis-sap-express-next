import app from './src/app.js';
import { Sequelize } from 'sequelize';
// Sync database and start server
const PORT = process.env.PORT || 3000;
const sequelize = new Sequelize('mysql::memory:'); // Example using SQLite in memory
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

