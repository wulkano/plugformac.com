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

It's worth noting that we swap out React for Preact in production builds to save bandwidth.
See [#8](https://github.com/wulkano/plugformac.com/pull/8) for more info.

### Deploying / Publishing

Hosted on Vercel via their Github plugin. Just push/merge with master and your changes are live 🎉

## Licensing

TODO
