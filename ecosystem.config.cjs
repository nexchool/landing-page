/** PM2 on EC2: Next standalone bundle (no npm ci on the instance). Nginx proxies to port 7000. */
module.exports = {
  apps: [
    {
      name: "landing-page",
      cwd: "/home/ec2-user/main-web/landing-app",
      script: "server.js",
      interpreter: "node",
      env: {
        NODE_ENV: "production",
        PORT: "7000",
        HOSTNAME: "0.0.0.0",
      },
    },
  ],
};
