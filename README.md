# My Portfolio

A modern developer portfolio built with Next.js and React to present my profile, skills, featured projects, and contact options in one place.

## Highlights

- Responsive landing page with animated hero section
- About section with tabbed content (skills, education, approach)
- Projects showcase with category filtering and live/demo links
- Contact section with social links and email form
- API route integration for sending messages using Resend

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- Framer Motion
- Resend (email API)
- Lucide React + Heroicons

## Project Structure

```text
app/
  api/send/route.js         # Contact form backend endpoint
  components/
    Navbar.jsx
    HeroSection.jsx
    AboutSection.jsx
    ProjectsSection.jsx
    ProjectCard.jsx
    EmailSection.jsx
    Footer.jsx
  layout.tsx
  page.jsx
public/                     # Portfolio images and static assets
```

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=your_resend_api_key
FROM_EMAIL=your_verified_sender@domain.com
```

### 3) Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - start local development server
- `npm run build` - create production build
- `npm run start` - run production server
- `npm run lint` - run ESLint checks

## Contact Form Flow

The contact form in `EmailSection.jsx` sends a `POST` request to `app/api/send/route.js`.
The API route uses Resend to deliver the email using your environment variables.

## Deployment

Recommended: deploy with [Vercel](https://vercel.com/).

1. Push this repository to GitHub
2. Import the project in Vercel
3. Add `RESEND_API_KEY` and `FROM_EMAIL` in Vercel environment settings
4. Deploy

## License

This project is for personal portfolio use. You may reuse the structure with attribution.
