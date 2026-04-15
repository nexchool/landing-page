/** PM2 config for EC2: Next.js on port 7000 (nginx in Docker proxies here). */
module.exports = {
  apps: [
    {
      name: "landing-page",
      cwd: "/home/ec2-user/main-web/landing-page",
      script: "./node_modules/next/dist/bin/next",
      args: "start -p 7000",
      interpreter: "node",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
