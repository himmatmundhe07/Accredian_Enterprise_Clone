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

## 🌐 Live Demo

- **Live URL:** [accredian-enterprise-clone-lemon-two.vercel.app](https://accredian-enterprise-clone-lemon-two.vercel.app)
- **Repository:** [https://github.com/himmatmundhe07/Accredian_Enterprise_Clone](https://github.com/himmatmundhe07/Accredian_Enterprise_Clone)
- **Reference:** [enterprise.accredian.com](https://enterprise.accredian.com/)

---

## ✨ Features

- **Responsive Landing Page:** Adapts seamlessly across mobile, tablet, and desktop viewports.
- **Reusable UI Components:** Extracted repeating patterns into generic atomic components.
- **Smooth Navigation:** CSS-native snap scrolling for carousels without heavy JS libraries.
- **Full-Stack Lead Capture:** Custom API routes integrated directly with MongoDB Atlas.
- **Form Validation:** Strict schema validation using Zod for robust data integrity.
- **Automated Emails:** Instant Nodemailer HTML emails dispatched upon form submission.
- **Optimized Assets:** Utilized Next.js `<Image />` for automatic format optimization and lazy loading.
- **SEO Metadata:** Configured OpenGraph tags, canonical links, and dynamic `robots.txt`.

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 15 |
| **Language** | JavaScript |
| **Styling** | Tailwind CSS |
| **Routing** | App Router |
| **Forms** | React Hook Form |
| **Validation** | Zod |
| **Database** | MongoDB Atlas |
| **Deployment** | Vercel |

---

## 💻 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/himmatmundhe07/Accredian_Enterprise_Clone.git
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

## 🔑 Environment Variables

Create a `.env.local` file in the root of your project and configure the following:

```env
# Database Connection (MongoDB Atlas)
MONGODB_URI=your_mongodb_atlas_connection_string

# Email Automation (Nodemailer via Gmail)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
```

---

## 📂 Folder Structure

```text
src
│
├── app
│   ├── api/enquire    # API Route (Lead Capture & Nodemailer)
│   ├── globals.css    # Global Tailwind styles
│   ├── layout.jsx     # Root HTML layout & SEO metadata
│   └── page.jsx       # Main landing page composition
│
├── components
│   ├── ui             # Reusable primitive components (Button, SectionHeader)
│   └── ...            # Domain-specific section components
│
├── constants
│   └── index.js       # Static data dictionaries (FAQs, Courses, Testimonials)
│
├── lib
│   └── mongodb.js     # Database connection pooling & caching
│
└── models
    └── Lead.js        # Mongoose data schema
```

---

## 🧠 Design Decisions

- **Atomic Design Principles:** Used reusable components (like `<SectionHeader />`) to dramatically reduce duplicate code and standardize spacing.
- **Data & UI Separation:** Stored static content arrays separately from the UI layer to maintain a single source of truth.
- **Mobile-First CSS:** Built the layout from the ground up for mobile devices first, scaling up for desktop using Tailwind `md:` and `lg:` prefixes.
- **Asset Optimization:** Optimized image loading using the native HTML `<img>` tag for SVGs and Next.js `<Image />` for heavy WebP assets to prevent Cumulative Layout Shift (CLS).
- **Zero-JS Carousels:** Used native CSS snap-scrolling instead of heavy JavaScript carousel libraries (like Swiper.js) to improve Core Web Vitals and parsing speed.

---

## 🔌 API Documentation

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

## 🤖 AI Usage

### AI Tools Used
- ChatGPT
- Antigravity

### Where AI Helped
- Extracting raw text content, SVG links, and core Tailwind hex codes from the reference site.
- Rapidly converting unstructured text into clean JSON arrays for the constants file.
- Generating boilerplate Zod schemas for email validation.
- Generating basic Nodemailer SMTP wrapper configuration.

### Manual Work & Core Engineering
- **Component Architecture:** Architected the scalable folder structure using Atomic Design principles and manually broke down the monolithic page into modular React components.
- **Backend & Database Logic:** Designed the Mongoose database schema, implemented the connection pooling logic, and wrote the server-side validation routing for the lead capture system.
- **State & Event Management:** Implemented a robust global event dispatcher mechanism to trigger the lead capture modal natively without relying on heavy context providers.
- **Responsive Layout Engineering:** Engineered the complex CSS grid systems and Tailwind flexbox structures to ensure pixel-perfect responsiveness across all devices.
- **Bug Fixing:** Manually managed complex z-index layering issues and fixed absolute positioning bugs on mobile dropdowns.
- **Performance Optimization:** Prioritized CSS-native transitions over JS animation libraries to maximize Lighthouse performance scores.

---

## 🚧 Challenges

### Responsive Layout Layering
The reference website uses multiple nested absolute layouts that required significant restructuring to look clean on mobile devices. Ensuring dropdown menus (like the country code selector) didn't clip beneath neighboring components required meticulous z-index management.

### Component Reusability
Instead of repeating similar section layouts across 8 different areas of the page, identifying the core visual patterns and extracting them into highly flexible UI components (`<SectionHeader />`) took careful upfront planning.

### Full-Stack Validation
Managing complex form state with nested inputs and ensuring strict Zod validation seamlessly synced between the client (React Hook Form) and the backend (Next.js API route).

---

## 📈 Future Improvements

- **Dark Mode:** Implement `next-themes` for a seamless system-wide dark mode toggle.
- **Global State Management:** Transition modal state handling from `window.dispatchEvent` to a lightweight global store like Zustand.
- **End-to-End Testing:** Write a Playwright test suite to automatically simulate user navigation and lead submissions.
- **API Rate Limiting:** Integrate Upstash (Redis) rate-limiting on the `/api/enquire` route to protect the database from automated spam.

---

## 👤 Author

**Himmat Mundhe**

- 💻 **GitHub:** [himmatmundhe07](https://github.com/himmatmundhe07)
- 🔗 **LinkedIn:** [Himmat Mundhe](https://www.linkedin.com/in/himmat-mundhe/)
- 🌐 **Portfolio:** [himmatmundhe.vercel.app](https://himmatmundhe.vercel.app/)
- 🧠 **LeetCode:** [Mundhe_Himmat](https://leetcode.com/u/Mundhe_Himmat/)
- 🐦 **X (Twitter):** [@Himmat_Mundhe](https://x.com/Himmat_Mundhe)
- 🎥 **YouTube:** [@himmatmundhe07](https://www.youtube.com/@himmatmundhe07)

---

## 📄 License

This project was created solely for the Accredian internship assignment. It is not intended for commercial use.
