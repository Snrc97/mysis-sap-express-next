import app from './app.js';
import { databaseManager, sequelize } from './app/config/database.js';
// Sync database and start server

await databaseManager.syncAll().then((result) => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
