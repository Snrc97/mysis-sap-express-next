module.exports = {
    apps: [
      // Next.js (Frontend)
      {
        name: 'frontend',
        cwd: './frontend',
        script: 'npm',
        args: 'start',
        env: {
          NODE_ENV: 'production',
          PORT: 3000
        }
      },
      // Express.js (Backend)
      {
        name: 'backend',
        cwd: './backend',
        script: 'index.js', // or 'npm start' if using package.json
        env: {
          NODE_ENV: 'production',
          PORT: 8000
        }
      }
    ]
  };