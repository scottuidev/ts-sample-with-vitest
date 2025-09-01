# ts-sample-with-vitest

A sample TypeScript project demonstrating basic TypeScript features and unit testing with [Vitest](https://vitest.dev/).

## Features

- TypeScript configuration
- Example source code
- Unit tests using Vitest

## Getting Started

**Install dependencies**

```bash
npm install
```

**Run in dev mode**

```bash
npm run dev
```

**Run tests**

```bash
npm test
```

**Run tests in watch mode**

```bash
npm run test:watch
```

**Build the project**

```bash
npm run build
```

This will create a dist directory containing the compiled JavaScript files.

**Run built assets**

build first (`npm run build`)

```bash
npm start
```

## Project Structure

- `src/` — TypeScript source files
- `src/__test__/` — Unit tests
- `tsconfig.json` — TypeScript configuration
- `vitest.config.ts` — Vitest configuration

--Stop here--

## Commands to create this from scratch

```bash
mkdir ts-sample-with-vitest
cd ts-sample-with-vitest
npm init -y
npm install -D typescript tsx @types/node vitest
npx tsc --init
mkdir src
mkdir src/__test__
```

#### Edit `package.json` and add scripts (and set this to be an ES module)

```JSON
"main": "dist/index.js",
"type": "module",
"scripts": {
  "clean": "rm -rf dist",
  "dev": "tsx watch src/index.ts",
  "start": "node build/index.js",
  "build": "tsc",
  "test": "vitest run",
  "test:watch": "vitest"
  },
```

When “type” is set to "module", the type field allows a package to specify all .js files within are ES modules. If the "type" field is omitted or set to "commonjs", all .js files are treated as CommonJS.

#### Configure `tsconfig.json` for ESM and vitest

```JSON
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    "paths": { "@/*": ["./src/*"] }, // allow imports using @
    "target": "esnext",
    "types": ["vitest/globals"],
  },
  "exclude": ["node_modules", "dist", "./vitest.config.ts"]
}
```

#### Create vitest config `vitest.config.ts`

```TypeScript
/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  // Allows imports using @ in tests
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: 'node',
    globals: true,
  },
});
```

#### Create a sample TypeScript file `src/index.ts`

```TypeScript
export const sampleFunction = (a: number, b: number): number => {
  return a + b;
};
export default sampleFunction;
```

#### Add a test

```TypeScript
import { describe, it, expect } from "vitest";
import { sampleFunction } from "@/index.js";

describe("sampleFunction test", () => {
  it("should return the correct value", () => {
    expect(sampleFunction(2, 3)).toBe(5);
  });
});
```
