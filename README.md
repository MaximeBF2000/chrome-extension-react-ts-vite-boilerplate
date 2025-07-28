# Chrome Extension React TypeScript Vite Boilerplate

A modern Chrome extension boilerplate built with React, TypeScript, Tailwind CSS, and Vite. This template provides a solid foundation for building Chrome extensions with modern web technologies.

## Tech Stack

- **React** - UI framework for building the extension interface
- **TypeScript** - Type-safe JavaScript for better development experience
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Vite** - Fast build tool and development server
- **Chrome Extension APIs** - Native browser extension functionality

## Folder Structure

```
├─ .gitignore
├─ README.md
├─ dist/
├─ index.html
├─ node_modules/
├─ package-lock.json
├─ package.json
├─ public/
│  ├─ manifest.json
│  └─ popup.html
├─ src/
│  ├─ content/
│  │  └─ index.tsx
│  ├─ popup/
│  │  ├─ Popup.tsx
│  │  └─ index.tsx
│  └─ styles/
│     └─ tailwind.css
├─ tailwind.config.js
├─ tsconfig.json
└─ vite.config.ts
```

### Key Directories

- **`src/popup/`** - Contains the popup interface components
- **`src/content/`** - Content scripts that run on web pages
- **`src/styles/`** - Global styles and Tailwind CSS configuration
- **`public/`** - Static assets including the manifest.json file

## Installation & Development

### 1. Clone the Repository

```bash
git clone <repository-url>
cd chrome-extension-react-ts-vite-boilerplate
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Development

Start the development server:

```bash
npm run dev
```

This will start Vite in watch mode, automatically rebuilding the extension when you make changes.

### 4. Install in Chrome

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right corner
3. Click "Load unpacked" and select the `dist` folder from your project
4. The extension should now appear in your extensions list

### 5. Development Workflow

- Make changes to your code in the `src` directory
- The build process will automatically update the `dist` folder
- Refresh the extension in Chrome's extension page to see changes
- For content script changes, you may need to refresh the target web page

## Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder ready for distribution.

## Features

- Hot module replacement during development
- TypeScript support with strict type checking
- Tailwind CSS for rapid UI development
- Optimized production builds
- Chrome extension manifest v3 support
- Content script and popup functionality
