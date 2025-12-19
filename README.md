# Davinciyatech React App

A simple React.js homepage with a header component matching the Davinciyatech design. Built with Vite and Tailwind CSS.

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The app will open at [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
davinciyatech/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── components/
│   │   └── Header.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md
```

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

## Features

- Responsive header with logo, navigation links, and CTA button
- Modern, clean design matching the Davinciyatech brand
- Sticky header that stays at the top when scrolling
- Fast development experience with Vite
- Utility-first styling with Tailwind CSS

