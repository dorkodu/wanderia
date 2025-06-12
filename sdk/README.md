# Wanderia SDK

A decentralized web and crypto SDK in pure TypeScript, designed for open source and npm publishing. Built with Bun.

## Features

- Pure TypeScript, no build step required for local usage
- Decentralized web and crypto utilities
- Ready for npm publishing
- Import directly as `@sdk/index` in monorepo setups

## Usage

### Local (Monorepo)

```ts
import { ... } from '@sdk/index'
```

### As an npm package

```sh
bun add @wanderia/sdk
```

```ts
import { ... } from '@wanderia/sdk'
```

## Development

- Use Bun for scripts and dependency management
- All source code in `src/`

## License

MIT
