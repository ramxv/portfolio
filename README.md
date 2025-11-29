# Personal Portfolio

A modern, interactive personal portfolio website built with Next.js 16, featuring a blog system, 3D visualizations, and smooth animations.

## ✨ Features

- **Interactive About Section** - Personal introduction with 3D technology stack visualization
- **Project Showcase** - Display of featured projects with detailed information
- **Blog System** - MDX-powered blog with automatic reading time calculation and excerpts
- **Timeline Component** - Animated vertical timeline for experience and education
- **Toast Notifications** - Global notification system for user feedback
- **3D Visualizations** - Interactive force graph using Three.js
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Type-Safe** - Full TypeScript support throughout the project

## 🛠️ Tech Stack

### Core

- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety

### Styling & UI

- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Headless UI](https://headlessui.com/) - Unstyled, accessible UI components

### Content & Blog

- [Contentlayer](https://contentlayer.dev/) - Content SDK for type-safe content
- [MDX](https://mdxjs.com/) - Markdown with JSX support
- [remark-gfm](https://github.com/remarkjs/remark-gfm) - GitHub Flavored Markdown
- [rehype-slug](https://github.com/rehypejs/rehype-slug) - Add IDs to headings
- [rehype-autolink-headings](https://github.com/rehypejs/rehype-autolink-headings) - Add links to headings

### 3D & Visualizations

- [Three.js](https://threejs.org/) - 3D graphics library
- [react-force-graph-3d](https://github.com/vasturiano/react-force-graph-3d) - 3D force-directed graphs

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Note:** This project requires webpack instead of Turbopack due to Contentlayer compatibility. The dev script automatically uses `--webpack` flag.

### Building for Production

```bash
pnpm build
pnpm start
```

## 📁 Project Structure

```text
portfolio/
├── content/              # MDX blog posts
│   └── blog/
├── public/              # Static assets
│   ├── profile.png
│   └── dot-pattern.svg
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── blog/
│   ├── components/      # React components
│   │   ├── shared/      # Reusable components
│   │   ├── ui/          # UI primitives
│   │   └── ...          # Feature components
│   ├── contexts/        # React contexts
│   ├── lib/             # Utility functions
│   └── styles/          # Global styles
├── contentlayer.config.ts  # Contentlayer configuration
├── next.config.ts       # Next.js configuration
└── tsconfig.json        # TypeScript configuration
```

## 📝 Adding Blog Posts

Create a new MDX file in `content/blog/`:

```mdx
---
title: "Your Post Title"
date: "2024-01-01"
description: "Optional custom excerpt"
---

Your content here...
```

The blog system automatically generates:

- URL-friendly slugs
- Reading time estimates
- Excerpts (from description or first 30 words)
- Heading anchors with links

## 🎨 Customization

### Updating Personal Information

- **About Me**: Edit `src/components/aboutMe.tsx`
- **Projects**: Edit `src/components/projects.tsx`
- **Contact**: Edit `src/components/contactMe.tsx`
- **Profile Image**: Replace `public/profile.png`

### Styling

Global styles are in `src/styles/globals.css`. The project uses Tailwind CSS 4 with custom configuration.

### Tech Stack Graph

Modify the 3D graph data in `src/components/aboutMe.tsx` to showcase your technology stack.

## 🔧 Configuration

### Path Aliases

The project uses TypeScript path aliases for cleaner imports:

- `@/components/*` - Components
- `@/contexts/*` - React contexts
- `@/lib/*` - Utility libraries
- `@/styles/*` - Styles
- `@/content/*` - Content files
- `@/contentlayer/generated` - Generated Contentlayer types

## 📦 Scripts

- `pnpm dev` - Start development server with webpack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🌐 Deployment

This project can be deployed on:

- [Vercel](https://vercel.com) (recommended)
- [Netlify](https://netlify.com)
- Any platform supporting Next.js

Make sure to set the build command to `pnpm build --webpack` or `npm run build`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

This is a personal portfolio, but feel free to fork it and customize it for your own use!

---

Built with ❤️ using Next.js and React