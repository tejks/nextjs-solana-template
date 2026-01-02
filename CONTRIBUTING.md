# Contributing

Thank you for your interest in improving this template. This document describes the preferred workflow, contribution standards, and a short PR checklist to make reviews fast and predictable.

## Table of Contents

- Purpose
- Getting started
- Branching & commit messages
- Pull request checklist
- Code style & testing
- Reporting issues
- Maintainers & communication
- License

## Purpose

This repository is a template to bootstrap Next.js + Solana (Anchor) projects. Contributions should improve usability, documentation, examples, developer experience, or add well-scoped features.

## Getting started

1. Fork the repository and clone your fork.
2. Install dependencies from the repo root: `npm install` (or `yarn`).
3. Run the web dev server: `cd apps/web && npm run dev`.
4. Run contract tests locally with Anchor: `cd apps/contracts && anchor test` (requires Rust, Solana CLI, Anchor).

## Branching & commit messages

- Use descriptive branch names: `feature/<short-description>`, `fix/<short-description>`, `docs/<short-description>`.
- Keep commits small and focused. Squash WIP commits with `git rebase -i` before merging.
- Commit messages should include a short subject and, if needed, a short body.

Example:

```
feat: add example wallet adapter setup

Adds initial wallet adapter wiring and example connect button.
```

## Pull request checklist

Before requesting a review, ensure the PR:

- [ ] Has a clear title and description explaining why the change is needed.
- [ ] Is limited in scope (one feature/bugfix per PR).
- [ ] Builds locally and passes relevant tests.
- [ ] Includes updates to documentation if behaviour or APIs changed.
- [ ] Includes tests for new behaviour where practical.
- [ ] Follows TypeScript types and linter rules.

Label PRs appropriately (e.g., `enhancement`, `bug`, `docs`).

## Code style & testing

- Follow the existing project style (TypeScript, ESLint rules, Prettier if configured).
- Run linters and formatters before creating a PR: `npm run lint`, `npm run format` (if available).
- Add unit or integration tests for non-trivial logic. Place shared types in `packages/types`.

## Reporting issues

- Open a clear issue with a descriptive title and steps to reproduce.
- Include environment details (OS, Node version, Anchor/Solana versions) and relevant logs or error messages.
- For feature requests, explain the use-case and suggested API or UX.

## Maintainers & communication

- Be respectful and constructive in discussions.
- If you'd like to get involved as a maintainer, open an issue describing your interest and relevant experience.

## License

By contributing, you agree that your contributions will be licensed under the project's MIT License.

---

If you'd like, I can also add a short `CODE_OF_CONDUCT.md`, a more detailed PR template, or wire GitHub Actions CI templates. Which would you prefer next?