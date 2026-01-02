<div align="center">
  <img src="docs/assets/copy.svg" alt="logo" width="150" height="150" />

## Solana Next.js Template
</div>

A polished, full-stack template combining a Next.js frontend with Solana smart contract scaffolding (Anchor + Rust). Designed to help developers bootstrap dapps with authentication, on-chain programs, and a modern developer experience.

- **Purpose:** Starter project for building Solana-powered web apps using Next.js + TypeScript.
- **Monorepo:** Uses a lightweight monorepo layout (apps, packages, utils) for clear separation of concerns.

## Table of Contents

- [Project Overview](#project-overview)
- [What’s Included](#whats-included)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running (Development)](#running-development)
- [Configuration](#configuration)
- [Key Files](#key-files)
- [Development & Testing](#development--testing)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This repository provides:

- A Next.js web application (`apps/web`) with TypeScript, Tailwind CSS, and opinionated project structure for fast UI development.
- A Solana smart-contract workspace (`apps/contracts`) using Anchor and Rust as a starting point for on-chain programs and tests.
- Utility packages under `packages/` and `utils/` to share types and helper code across apps.

The template is intended for building production-ready dapps while keeping the developer experience smooth and repeatable.

## What’s Included

- Next.js + TypeScript frontend scaffold
- Tailwind CSS for styling and PostCSS config
- Anchor + Rust program scaffold with example `lib.rs`
- Basic tests for contracts and example integration test
- Linting and workspace TypeScript configuration

## Technologies

- Next.js (App Router) + React + TypeScript
- Tailwind CSS, PostCSS
- Anchor (Rust) for Solana programs
- Turborepo-style monorepo layout
- Node.js, npm / yarn

## Prerequisites

- Node.js (LTS recommended)
- npm or yarn
- Rust toolchain (rustup, cargo)
- Solana CLI (`solana`) and Anchor CLI (`anchor`) for local development and testing

## Installation

Clone and install dependencies at the repository root:

```bash
git clone https://github.com/tejks/nextjs-solana-template
cd nextjs-solana-template
npm install
# or
# yarn
```

Install Rust and Anchor if you plan to work with the on-chain programs.

## Running (Development)

Frontend (Next.js dev server):

```bash
cd apps/web
npm run dev
```

Contracts (Anchor local validator + tests):

```bash
cd apps/contracts
anchor test
```

If this monorepo uses a workspace tool (turbo/lerna/etc.), you can also run workspace scripts from the root when configured.

## Configuration

Environment variables and runtime configuration are stored in `apps/web/.env` or referenced in `apps/web/src/config`.

Example `.env` values:

```env
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
NEXT_PUBLIC_SOLANA_NETWORK=devnet
```

Ensure Anchor and Solana CLI are configured for your target cluster when running contract tests or deploying.

## Key Files

- [apps/web](apps/web) — Next.js application
- [apps/contracts](apps/contracts) — Anchor / Rust programs and tests
- [packages/types](packages/types) — shared TypeScript types
- [utils](utils) — utility helpers
- [tsconfig.json](tsconfig.json) — TypeScript workspace configuration
- [turbo.json](turbo.json) — monorepo task configuration (if present)

## Development & Testing

- Run the Next.js dev server for UI development: `npm run dev` inside `apps/web`.
- Use `anchor test` to run program tests (requires Solana local validator / Anchor setup).
- Add unit tests and integration tests as needed; include CI steps for running linters, builds, and tests.

Recommended commands (examples):

```bash
# from repo root (if scripts are setup)
npm run dev:web      # start web dev server
npm run test:contracts # run Anchor tests
npm run build:web    # build frontend
```

## Contributing

Thank you for contributing! This project follows common open-source contribution workflows:

- Open an issue for bugs or feature requests.
- Fork the repository and create a feature branch: `feature/your-feature`.
- Write clear, focused commits and a descriptive PR description.
- Ensure the project builds and tests pass locally.
- Add or update documentation as needed.

Please follow the code style used across the repo and run linters/formatters before creating a PR.

If you would like, create a `CONTRIBUTING.md` file to document your preferred contributor guidelines and PR checklist.

## License

This template is provided under the MIT License. See the `LICENSE` file for full terms.
