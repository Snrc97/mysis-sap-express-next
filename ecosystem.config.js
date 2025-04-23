module.exports = {
    apps: [
      // Next.js (next)
      {
        name: 'next',
        cwd: './next',
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
        cwd: './backend/default',
        script: 'npm',
        args: 'start',
        env: {
          NODE_ENV: 'production',
          PORT: 8000
        }
      }
    ]
  };