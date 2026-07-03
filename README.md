# SPA Website

A modern Single Page Application built with React, Vite, Tailwind CSS, and i18n support for Arabic and English.

## Features

- ⚡️ Vite for fast development and building
- ⚛️ React 18
- 🎨 Tailwind CSS for styling
- 🌍 Internationalization (i18n) with Arabic and English support
- 📱 Responsive design
- 🔍 ESLint for code quality
- 🚀 GitHub Pages deployment ready

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Build and deploy to GitHub Pages

## Deployment to GitHub Pages

1. Make sure your repository is set up on GitHub
2. Update the `base` path in `vite.config.js` to match your repository name (currently set to `/website/`)
3. Run the deployment command:

```bash
npm run deploy
```

This will build your app and deploy it to the `gh-pages` branch of your repository.

4. In your GitHub repository settings, go to Pages and set the source to the `gh-pages` branch.

## Project Structure

```
website/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images, fonts, etc.
│   ├── components/  # Reusable components
│   ├── pages/       # Page components
│   ├── locales/     # Translation files
│   ├── App.jsx      # Main app component
│   ├── main.jsx     # Entry point
│   └── index.css    # Global styles
├── .eslintrc.cjs    # ESLint configuration
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js   # Vite configuration
└── package.json     # Dependencies
```

## Internationalization

The app supports two languages:

- English (default)
- Arabic (with RTL support)

Language can be switched using the language switcher in the header.

## License

MIT
