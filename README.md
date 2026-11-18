# Parshant Yadav — SDE & Full-Stack AI Engineer Portfolio

A world-class, ultra-minimalist developer portfolio website engineered with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Aceternity UI Matrix Trail Canvas**. Inspired by the high-impact clean aesthetics of modern engineering portfolios.

---

## 🌟 Key Features

- **⚡ Real-Time Decimal Age Ticker**: Dynamic live counter (`been here for 23.xxxxxxxxx years`) updating with 50ms decimal precision.
- **👨‍💻 Minimalist Developer Hero**: Clean typography, circular avatar with live emerald status indicator (*"Available for work"*), and quick action pills.
- **📊 GitHub Activity Heatmap**: Interactive 6-month commit contribution graph with month markers and contribution tooltips.
- **💼 Work & Education Timeline**: Clean organization cards with custom dark badge icons, `@Organization ↗` external link arrows, dates, and locations.
- **🖥️ Featured Projects in macOS Mockups**: Interactive macOS browser window frames with colored traffic light controls, metric badges, and **Deep Architecture** modal breakdowns.
- **🟢 Interactive Matrix Trail Spotlight**: Custom HTML5 canvas digital rain with a hover spotlight beam that awakens characters only where the cursor hovers.
- **📱 Floating macOS Dock Navigation**: Centered bottom floating dock with smooth icon magnification on hover and a live Matrix Trail toggle (`>_`).
- **🤖 Interactive AI Assistant**: Built-in digital twin chat widget answering visitor questions about Parshant's background, projects, and availability.
- **📬 Direct Connect Hub**: 1-click email copy, WhatsApp chat, and clean contact form with instant validation.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations & Canvas**: HTML5 Canvas API, CSS Keyframes, Glassmorphism
- **Hosting**: Ready for 1-click deployment on [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Parshant786yadav/NEW-PORTFOLIO.git
cd NEW-PORTFOLIO
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css         # Custom animations, glassmorphism & tailwind layers
│   │   ├── layout.tsx          # Meta tags, SEO, fonts, OpenGraph configuration
│   │   └── page.tsx            # Main portfolio assembly
│   ├── components/
│   │   ├── FloatingDock.tsx    # macOS style bottom dock navigation
│   │   ├── HeroMinimal.tsx     # Hero section with live ticking decimal age
│   │   ├── GitHubActivity.tsx  # GitHub contribution heatmap
│   │   ├── ExperienceList.tsx  # Work & education timeline cards
│   │   ├── FeaturedProjects.tsx# macOS browser mockup project cards
│   │   ├── ProjectModal.tsx    # Deep-dive architecture modal dialog
│   │   ├── SkillsMinimal.tsx   # Categorized skills matrix
│   │   ├── ContactMinimal.tsx  # Direct email copy, WhatsApp & message form
│   │   ├── Footer.tsx          # Real-time Gurgaon IST clock & copyright
│   │   ├── AIChatWidget.tsx    # Interactive digital twin AI chatbot
│   │   └── ui/
│   │       └── matrix-trail.tsx# Aceternity-style matrix digital rain canvas
│   └── data/
│       └── portfolioData.ts    # Centralized portfolio data (projects, skills, bio)
├── components.json             # Shadcn configuration
├── tailwind.config.ts          # Tailwind theme & color extensions
└── tsconfig.json               # TypeScript configuration
```

---

## 👤 Author

**Parshant Yadav**  
*SDE & Full-Stack AI Engineer*  
- **Website**: [parshantyadav.com](https://parshantyadav.com)
- **LinkedIn**: [linkedin.com/in/parshant786](https://www.linkedin.com/in/parshant786)
- **GitHub**: [github.com/Parshant786yadav](https://github.com/Parshant786yadav)
- **WhatsApp**: [+91 8826448907](https://wa.me/918826448907)
- **Email**: [parshant786yadav@gmail.com](mailto:parshant786yadav@gmail.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
