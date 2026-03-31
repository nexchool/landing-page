/** PM2 config for EC2: Next.js on port 7000 (nginx in Docker proxies here). */
module.exports = {
  apps: [
    {
      name: "landing-page",
      cwd: "/home/ec2-user/landing-page",
      script: "npm",
      args: "run start",
      interpreter: "none",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
