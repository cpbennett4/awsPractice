module.exports = {
  apps: [{
    name: 'awsPractice',
    script: 'server/app.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-193-52-171.us-west-1.compute.amazonaws.com',
      key: '~/.ssh/id_rsa',
      ref: 'origin/master',
      repo: 'git@github.com:cpbennett4/awsPractice.git',
      path: '/home/ubuntu/awsPractice',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
};