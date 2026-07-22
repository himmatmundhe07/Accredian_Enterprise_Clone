<div align="center">
  <img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/logo/accredian-logo.webp" alt="Accredian Logo" width="250" />
  
  <br/>
  <br/>

  <h1>Accredian Enterprise Clone</h1>
  
  <p>
    A responsive enterprise landing page clone built with Next.js and Tailwind CSS.
  </p>

  <p>
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
    <a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" /></a>
  </p>

  <br/>
</div>

## Live Demo

- **Live URL:** `[Insert Your Vercel Link Here]`
- **Repository:** `[Insert Your GitHub Repo Link Here]`
- **Reference:** [https://enterprise.accredian.com/](https://enterprise.accredian.com/)

---

## Features

- Responsive Landing Page
- Reusable UI Components
- Smooth Section Navigation
- API Integration for Lead Capture
- Form Validation (Client & Server)
- Optimized Images
- SEO Metadata
- Error Handling
- Mobile-First Design

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15 |
| Language | JavaScript |
| Styling | Tailwind CSS |
| Routing | App Router |
| Forms | React Hook Form |
| Validation | Zod |
| Database | MongoDB Atlas |
| Deployment | Vercel |

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone [Your-Repo-Link]
   cd accredian-clone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

---

## Environment Variables

Create a `.env.local` file in the root of your project and configure the following:

```env
# Database Connection (MongoDB Atlas)
MONGODB_URI=your_mongodb_atlas_connection_string

# Email Automation (Nodemailer via Gmail)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
```

---

## Folder Structure

```text
src
│
├── app
│   ├── api/enquire    # API Route
│   ├── globals.css    # Global styles
│   ├── layout.jsx     # Root layout & SEO
│   └── page.jsx       # Main landing page
│
├── components
│   ├── ui             # Reusable primitive components (Button, SectionHeader)
│   └── ...            # Domain-specific section components
│
├── constants
│   └── index.js       # Static data (FAQs, Courses, Testimonials)
│
├── lib
│   └── mongodb.js     # Database connection pooling
│
└── models
    └── Lead.js        # Mongoose schema
```

---

## Design Decisions

- Used reusable components (like `<SectionHeader />`) to reduce duplicate code.
- Stored static content arrays separately from the UI layer.
- Built the layout using a mobile-first approach.
- Optimized image loading using the native HTML `<img>` tag and Next.js `<Image />` where appropriate.
- Used native CSS snap-scrolling instead of heavy JavaScript carousel libraries to improve performance.

---

## API Documentation

### POST `/api/enquire`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@gmail.com",
  "phone": "+91 9999999999",
  "company": "Tech Corp",
  "jobTitle": "Developer",
  "experience": "5",
  "goal": "Upskilling",
  "state": "Maharashtra, India"
}
```

**Response:**
```json
{
  "message": "Lead submitted successfully and email sent."
}
```

---

## AI Usage

### AI Tools Used
- ChatGPT
- Antigravity

### Where AI Helped
- Planning folder structure and architecture.
- Extracting raw text content, SVG links, and core color codes from the reference site.
- Converting unstructured text into clean JSON arrays.
- Generating boilerplate Zod schemas for validation.
- Generating basic Nodemailer SMTP configuration.

### Manual Work
- Breaking down the monolithic page into modular React components.
- Designing and implementing the reusable `<SectionHeader />` and `<Button />` systems.
- Refining responsive layouts and fixing mobile CSS grid structures.
- Fixing complex z-index layering issues with absolute positioned dropdowns.
- Optimizing performance by prioritizing CSS-native transitions over JS animation libraries.

---

## Challenges

### Responsive Layout
The reference website uses multiple nested layouts that required significant restructuring to look clean on mobile devices without horizontal scrolling.

### Component Reusability
Instead of repeating similar section layouts across 8 different sections, identifying the common patterns and extracting them into reusable UI components took careful planning.

### Form Validation & State Management
Managing complex form state with nested dropdowns (like the phone country code selector) and ensuring strict Zod validation on both the client and server.

---

## Future Improvements

- Dark Mode implementation.
- Unit and E2E Testing (Playwright).
- Better Accessibility (ARIA labels and keyboard navigation).
- Global State Management (Zustand) to replace native event dispatching for the modal.
- API Rate Limiting to prevent spam submissions.

---

## Author

**Himmat Mundhe**

- GitHub: `[Your GitHub Link]`
- LinkedIn: `[Your LinkedIn Link]`
- Email: himmatmundhe0@gmail.com

---

## License

This project was created solely for the Accredian internship assignment. It is not intended for commercial use.
