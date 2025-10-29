# Calvin Yang's Personal Website

A modern React + TypeScript version of the personal website portfolio.

## Getting Started

### Prerequisites
- Node.js (v20.16.0 or higher)
- npm

### Installation

Install dependencies:
```bash
npm install
```

### Running Locally

Start the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:5173` (or another port if 5173 is occupied).

### Building for Production

Build the production-ready static files:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
react-app/
├── src/
│   ├── components/     # Reusable React components
│   │   ├── Header.tsx
│   │   ├── Menu.tsx
│   │   ├── Footer.tsx
│   │   └── Banner.tsx
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   └── About.tsx
│   ├── App.tsx         # Main app with routing
│   └── main.tsx        # Entry point
├── public/             # Static assets
│   ├── images/
│   ├── assets/
│   └── js/
└── package.json
```

## Features

- ✅ React 19 with TypeScript
- ✅ React Router for navigation
- ✅ Responsive design maintained from original HTML
- ✅ All original functionality preserved
- ✅ Hot module replacement for fast development
- ✅ Modern build tooling with Vite

## Original Assets

All original assets (CSS, images, JavaScript) have been preserved in the `public` folder to maintain the original design and functionality.

## Navigation

- `/` - Home page (work experience and projects)
- `/about` - About me page (education and hobbies)
