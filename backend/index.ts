import app from './src/app.js';
import { sequelize } from './src/models/index.ts';
import BaseModel from './src/models/BaseModel';
// Sync database and start server
const PORT = process.env.PORT || 3000;
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

