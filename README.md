This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## EC2 without `npm ci` on the instance

`next.config.ts` uses **`output: "standalone"`**. CI builds on a GitHub runner, copies `public` + `.next/static` into `.next/standalone`, then **rsyncs** that folder to **`/home/ec2-user/main-web/landing-app`**. EC2 only runs **`node server.js`** under PM2 (port **7000**), which avoids heavy installs on small instances (OOM / SSH freezes).

Manual equivalent (build on your laptop, then upload):

```bash
npm ci && npm run build
cp -r public .next/standalone/public
mkdir -p .next/standalone/.next && cp -r .next/static .next/standalone/.next/static
rsync -avz --delete .next/standalone/ ec2-user@HOST:/home/ec2-user/main-web/landing-app/
```

If you must run `npm` over SSH, use **`tmux`** or **`screen`** so a dropped session does not kill the install, and add **swap** or use a larger instance type if the box runs out of RAM.
