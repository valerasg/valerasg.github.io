# GEMINI.md

This file provides a comprehensive overview of the `valerasg.github.io` project, its structure, and how to work with it.

## Project Overview

This is a single-page portfolio website for "Sergio's Projects". It is built with **React** and **TypeScript**, and styled with **Tailwind CSS**. The project is set up using **Vite** as a build tool.

The main application logic is in `src/App.tsx`, which renders the main page with a list of featured and other projects. The application's entry point is `src/main.tsx`.

## Building and Running

The following scripts are available in `package.json`:

*   `npm run dev`: Starts the development server with Hot Module Replacement (HMR).
*   `npm run build`: Builds the application for production. This includes running TypeScript compiler (`tsc`) and then `vite build`. The output is generated in the `dist` directory.
*   `npm run lint`: Lints the codebase using ESLint.
*   `npm run preview`: Serves the production build locally for previewing.
*   `npm run test`: Runs the test suite using Vitest.

## Development Conventions

### Styling

The project uses **Tailwind CSS** for styling. Utility classes are used directly in the JSX of the components. The main CSS file is `src/index.css`.

### Linting

**ESLint** is used for linting, with a configuration that supports TypeScript and React. The configuration is in `eslint.config.js`. It uses `@typescript-eslint/eslint-plugin`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`.

### Testing

The project uses **Vitest** for unit and component testing. The test environment is `jsdom`. Test files are located alongside the source files, with a `.test.tsx` extension (e.g., `src/App.test.tsx`). Setup for tests is in `src/setupTests.ts`.

### Deployment

The project is configured for continuous deployment to **GitHub Pages**. The workflow is defined in `.github/workflows/static.yml`. On every push to the `main` branch, the project is built, and the `dist` directory is deployed.
