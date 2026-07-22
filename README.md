<div align="center">
  <img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/logo/accredian-logo.webp" alt="Accredian Logo" width="250" />
  
  <br/>
  <br/>

  <h1>🎯 Accredian Enterprise Clone</h1>
  
  <p>
    <b>A pixel-perfect, highly performant, and responsive enterprise landing page clone.</b><br/>
    Built for speed, scalability, and seamless user experience.
  </p>

  <p>
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
    <a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" /></a>
    <a href="https://react-hook-form.com/"><img src="https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white" alt="React Hook Form" /></a>
  </p>

  <br/>
</div>

---

## 🚀 Live Demo & Links

> **Reference URL:** [https://enterprise.accredian.com/](https://enterprise.accredian.com/)

- 🌐 **Live Deployment**: `[Insert Your Vercel Link Here]`
- 🐙 **GitHub Repository**: `[Insert Your GitHub Repo Link Here]`

---

## 🛠️ Setup & Installation

Get the project running locally in less than 2 minutes.

### 1. Clone & Install
```bash
# Clone the repository
git clone [Your-Repo-Link]

# Navigate into the directory
cd accredian-clone

# Install dependencies
npm install
```

### 2. Environment Variables
Create a `.env.local` file in the root of your project and configure the following keys:
```env
# Database Connection (MongoDB Atlas)
MONGODB_URI=your_mongodb_atlas_connection_string

# Email Automation (Nodemailer via Gmail)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
```

### 3. Run Development Server
```bash
npm run dev
```
Navigate to `http://localhost:3000` to view the application.

---

## 📂 Project Architecture

This project strictly follows the scalable **Next.js App Router** architecture.

<details>
<summary><b>Click to expand the full folder structure</b></summary>
<br/>

```text
accredian-clone/
├── src/
│   ├── app/                  # App Router (Pages, Layouts, API Routes)
│   │   ├── api/enquire/      # ⚙️ Backend API Route for Lead Capture
│   │   ├── globals.css       # 🎨 Global Tailwind styling
│   │   ├── layout.jsx        # 📄 Root HTML layout & SEO Metadata
│   │   └── page.jsx          # 🏠 Main landing page
│   │
│   ├── components/           # Domain-Specific & Layout Components
│   │   ├── ui/               # 🧩 Primitive / Atomic UI Components
│   │   │   ├── Button.jsx        
│   │   │   └── SectionHeader.jsx 
│   │   ├── AccredianEdge.jsx # Major section component
│   │   ├── CATFramework.jsx  # Major section component
│   │   ├── EnquireModal.jsx  # Complex form modal component
│   │   └── ... 
│   │
│   ├── constants/            # Data Layer
│   │   └── index.js          # Static arrays (FAQs, Testimonials, Courses)
│   │
│   ├── lib/                  # Utility functions
│   │   └── mongodb.js        # Mongoose connection pooling
│   │
│   └── models/               # Database Schemas
│       └── Lead.js           # Mongoose schema for the form
```
</details>

### 🧩 Why `components/ui/`? (Atomic Design)
You will notice that `Button.jsx` and `SectionHeader.jsx` are placed inside a dedicated `ui/` subdirectory. This strictly follows the **Atomic Design Principle** (popularized by modern libraries like *shadcn/ui*):
- **`components/`**: Contains "Macro" or domain-specific chunks (e.g., `Hero`, `Navbar`, `FAQs`).
- **`components/ui/`**: Contains "Micro" or primitive components that are purely generic, stateless, and reusable across the entire application (e.g., a generic `Button`). This keeps the repository highly organized as the application scales.

---

## 🧠 Approach Taken

### 1. Component Modularity & Data Separation
I focused heavily on creating DRY (Don't Repeat Yourself) code. Rather than duplicating header layouts across 8+ sections, I engineered a highly flexible `<SectionHeader />` component. 

Furthermore, I strictly separated the **Data Layer** from the **UI Layer**. All static content arrays (`FAQS`, `TESTIMONIALS`) were extracted into `src/constants/index.js`. The UI components now strictly handle rendering logic, while the constants act as a single source of truth.

### 2. Mobile-First & CSS Native Behaviors
The original site relied heavily on bulky JavaScript libraries for carousels. To maximize performance and **Core Web Vitals**, I replaced these with **CSS Native Snap Scrolling** (`snap-x`, `snap-mandatory`). This provides the exact same UX (smooth mobile swiping) but with zero JavaScript parsing overhead.

### ⭐ 3. Bonus Feature: Full-Stack Lead Capture & Email Automation
I exceeded the baseline requirements by implementing a highly resilient Lead Capture system natively in Next.js using Route Handlers (`/api/enquire`).
- **Validation**: Strict client/server validation using **Zod** and `react-phone-input-2`.
- **Database**: Securely stores leads in a **MongoDB Atlas** cloud cluster.
- **Email Automation**: Instantly dispatches a personalized HTML welcome email to the user via **Nodemailer**.
- **Global Event Dispatching**: The `<Button />` component uses native `window.dispatchEvent` to globally trigger the lead modal without prop-drilling or bulky React Context providers.

---

## 🤖 AI Usage Explanation

As per the assignment requirements, AI tools were utilized to accelerate development while maintaining strict architectural control.

#### ✅ Where AI Helped:
- **Asset & Boilerplate Extraction**: Quickly scraped raw text content, SVG links, and core Tailwind hex codes from the reference site.
- **Data Structuring**: Rapidly mapped raw unstructured FAQ and Testimonial text into clean JSON arrays for the constants file.
- **Regex & Zod Boilerplate**: Generated the base Zod schema for standardizing international phone number validation.
- **Nodemailer Setup**: Generated the basic SMTP configuration object and HTML wrapper for the automated email.

#### 🛠️ What I Modified & Engineered Manually:
- **Component Architecture**: I manually broke down the monolithic page into modular chunks and specifically engineered the global `SectionHeader` and `Button` systems using Atomic Design.
- **Responsive Layout Tweaks**: I manually rewrote the mobile CSS grid systems (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) and fixed complex `z-index` layering issues (specifically fixing the phone dropdown overlapping).
- **TypeScript to JavaScript Conversion**: Manually stripped down unnecessary TS interfaces to plain JS to maintain a cleaner, simpler codebase focused purely on execution.
- **Performance Optimizations**: I manually stripped out unnecessary `framer-motion` layout animations, prioritizing CSS-native transitions and Next.js `<Image />` optimization to prevent CLS (Cumulative Layout Shift).

---

## 📈 Improvements with More Time

If given an additional 48 hours, I would implement the following enterprise-grade improvements:

1. **State Management**: Integrate a lightweight global store (like *Zustand*) to handle modal states, which scales better than `window.dispatchEvent`.
2. **Rate Limiting**: Add `@upstash/ratelimit` (Redis) to the `/api/enquire` route to prevent spam bots from flooding the MongoDB cluster and Email SMTP.
3. **Skeleton Loaders**: Implement React Suspense boundaries and Skeleton loaders for the testimonial cards to improve perceived load times.
4. **End-to-End Testing**: Write a *Cypress* or *Playwright* test suite simulating a user navigating the landing page, opening the modal, and submitting a lead.
5. **Dark Mode**: Configure Tailwind's `dark:` modifier variants to support a seamless system-wide dark mode.
