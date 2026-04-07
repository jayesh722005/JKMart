React + Vite

This template provides a minimal and fast setup to build React applications using Vite, with Hot Module Replacement (HMR) and basic ESLint configuration.

⚡ Available Plugins

Currently, two official plugins are supported for React Fast Refresh:

@vitejs/plugin-react
Uses Babel (or OXC when used with rolldown-vite)
@vitejs/plugin-react-swc
Uses SWC for faster compilation
🧠 React Compiler

The React Compiler is not enabled by default due to its impact on development and build performance.
If you want to enable it, refer to the official React documentation.

📏 ESLint Configuration

For production-grade applications, it is recommended to:

Use TypeScript
Enable type-aware linting rules

You can check the official TypeScript template for guidance on integrating TypeScript and typescript-eslint into your project.

🚀 Getting Started
npm install
npm run dev
📦 Build for Production
npm run build