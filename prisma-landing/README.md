# Prisma - Visual Arts Studio Landing Page

A dark, moody, and cinematic landing page for a creative studio built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Features

- **Hero Section**: Full-viewport video background with navbar and animated giant heading
- **About Section**: Scroll-linked text reveal animation with mixed typography styles
- **Features Section**: Grid of feature cards with staggered entrance animations
- **Dark, Moody Design**: Black background with warm cream (#DEDBC8) accent color
- **Smooth Animations**: Powered by Framer Motion and scroll-triggered effects
- **Fully Responsive**: Mobile-first design with Tailwind CSS breakpoints

## Tech Stack

- **Vite** - Lightning fast build tool
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Installation

```bash
cd prisma-landing
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── WordsPullUp.tsx          # Text animation component
│   ├── WordsPullUpMultiStyle.tsx # Multi-style text animation
│   └── AnimatedLetter.tsx       # Scroll-linked letter animation
├── sections/
│   ├── Hero.tsx                 # Hero section with video
│   ├── About.tsx                # About section
│   └── Features.tsx             # Features grid
├── App.tsx                      # Main app component
├── main.tsx                     # Entry point
└── index.css                    # Global styles & utilities
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  primary: '#DEDBC8', // Warm cream
}
```

### Fonts

Fonts are loaded in `index.html` from Google Fonts:
- **Almarai** - Global default (weights: 300, 400, 700, 800)
- **Instrument Serif** - Italic accents

### Videos & Images

Replace video URLs in `Hero.tsx` and `Features.tsx` with your own content.

## License

MIT
