module.exports = {
  apps: [
    {
      name: 'dev',
      script: 'npm',
      args: 'run start:dev'
    },
    {
      name: 'prod',
      script: 'npm',
      args: 'run start:prod'
    }
  ]
};