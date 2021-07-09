<h1>
plugformac.com site <img src="./public/favicon.ico" alt="Plug for Mac logo" align="left">
</h1>

> Repository for the [plugformac.com](https://plugformac.com) site

## Installing / Getting started

Here's what you need to fire this site up locally

```shell
$ gh repo clone wulkano/plugformac.com
$ cd plugformac.com && yarn install
```

This clones the repo and installs dependencies. After that, run

```shell
$ yarn dev
```

To start the Next.js development server.

## Developing

### Built With

The site is built with [Next.js v10](https://nextjs.org/docs) and [Tailwind v2](https://tailwindcss.com/).

### Prerequisites

- `node` >=v12
- `yarn` or `npm`

### Building

We swap out React for Preact in production builds to save bandwidth.
See [`./next.config.js`](https://github.com/wulkano/plugformac.com/blob/main/next.config.js) for more info.

### Deploying / Publishing

Hosted on Vercel. Just push/merge with main and your changes are live 🎉

## Licensing

TODO
