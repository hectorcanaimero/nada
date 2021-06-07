module.exports = {
  apps: [{
    name: 'condorV2.2',
    script: './dist/condor-v2/server/main.js',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '500M',
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    },
  }, ],
};
