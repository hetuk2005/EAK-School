# EAK International School

A responsive admissions landing page for EAK International School's 2027–28 academic session. The site is built with React and JavaScript, with Vite for development and production builds and Tailwind CSS for styling.

## Getting started

### Requirements

- Node.js 18 or newer
- npm

### Install and run

```bash
npm install
npm run dev
```

Vite prints the local URL after the development server starts (usually `http://localhost:5173`).

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Create an optimized production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Check the source with Oxlint. |

## What's included

- Responsive navigation with admissions enquiry and campus visit actions.
- School overview, academic programs, campus facilities, admissions steps, dates, documents, fees, testimonials, and FAQs.
- Interactive enquiry, visit scheduling, admissions team, and facility detail dialogs.
- Interactive fee estimate, document checklist, FAQ filters, and facilities filters.
- Floating quick actions and toast feedback.

## Project structure

```text
src/
  components/   Page sections, navigation, and dialogs
  data/         School content and display data
  assets/       Images and other static assets
  App.jsx       Main page composition and shared dialog state
  main.jsx      React application entry point
  index.css     Global styles and Tailwind CSS setup
```

## Technology

- React 19 with JavaScript and JSX
- Vite
- Tailwind CSS 4
- Lucide React icons
- Canvas Confetti

## Production build

Run `npm run build`, then use `npm run preview` to inspect the generated site. The output is written to `dist/` and can be deployed to a static hosting service such as Vercel or Netlify.
