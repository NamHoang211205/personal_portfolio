# Personal Portfolio

A personal portfolio website built with React and Vite to showcase experience, selected projects, testimonials, and contact details.

## Overview

This project is a single-page portfolio application with a modern UI, animated sections, and a contact form powered by EmailJS. It is designed to present professional background, technical skills, and project highlights in a clean, responsive layout.

## Features

- Responsive single-page portfolio layout
- Hero, About, Projects, Testimonials, Experience, and Contact sections
- Reusable UI components and shared layout sections
- Contact form integration using EmailJS
- Built with Vite for fast local development and production builds

## Tech Stack

- React 19
- Vite (via `rolldown-vite`)
- Tailwind CSS 4
- Lucide React
- EmailJS
- ESLint

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

The app will start on the local Vite development server.

## Environment Variables

The contact form uses EmailJS. Create a `.env.local` file in the project root and define:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Without these values, the contact form will not be able to send messages.

## Available Scripts

- `npm run dev` starts the development server
- `npm run build` creates a production build in `dist/`
- `npm run preview` serves the production build locally
- `npm run lint` runs ESLint checks

## Build for Production

```bash
npm run build
```

## License

This project is for personal portfolio use. Add a license here if you plan to distribute it publicly.
