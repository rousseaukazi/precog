# Precog Future Explorer

This project contains a minimal Next.js application that visualizes a tree of hypothetical futures. Each node includes a probability and you can navigate down the tree using number key hotkeys. As you traverse, a branch is drawn on the page so you can trace the steps taken.

## Development

1. Install dependencies (requires internet access):
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

The initial data lives in `src/data/fakeTree.ts`. It now defines five prebuilt paths,
each 25 levels deep, so the demo loads instantly. You can modify or extend these
paths to model additional futures.
