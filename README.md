# ACM MBU Student Chapter

A premium, interactive web platform for the **Mohan Babu University (MBU) ACM Student Chapter**. The platform serves as the central hub for student developers, researchers, and computing enthusiasts at Mohan Babu University to learn about chapter initiatives, browse upcoming events, explore student projects, access peer resources, discover opportunities, and apply for membership.

Built with **Next.js**, **React**, **Framer Motion**, and **Tailwind CSS**, featuring dark-mode glassmorphic aesthetics, particle animations, and custom interactions.

---

## Features

- **Dynamic Hero Section**: Engaging introduction with interactive particle backgrounds and fluid animation details.
- **Chapter Focus Areas**: Comprehensive details about Global ACM, ACM India, and the local ACM Mohan Babu University Chapter.
- **Events Timeline**: Interactive showcase of upcoming hackathons, tech talks, and hands-on workshops.
- **Projects Registry**: Highlight of open-source and collaborative projects developed by chapter members.
- **Resources Library**: A curated repository of cheat sheets, notes, guides, and learning paths for different domains.
- **Opportunities Portal**: Listing of internships, research positions, coding contests, and scholarship programs.
- **Team Board**: Responsive view of the Executive Board and core contributors leading the chapter.
- **Interactive Blogs**: Student-written articles, tech insights, and chapter update newsletters.
- **Onboarding Form**: Interactive membership application validating details with simulated onboarding verification.

---

## Setup and Installation

Follow these steps to run the ACM MBU Student Chapter website on your local computer.

### System Requirements

- **Node.js**: Version 18.x or higher installed (Version 20.x or higher recommended. Run `node -v` to check).
- **Package Manager**: npm (comes with Node.js) or yarn/pnpm/bun.

### Step-by-Step Setup

1. **Clone the project code**
   ```bash
   git clone https://github.com/mbuacmstudentchapter/acm_chapter_mbu.git
   cd acm_chapter_mbu
   ```
   *(Note: Replace the repository URL if hosting elsewhere)*

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the application**
   ```bash
   npm run dev
   ```
   Now, open your web browser and go to [http://localhost:3000](http://localhost:3000).

4. **Build for production**
   ```bash
   npm run build
   npm run start
   ```

---

## Pre-flight Checklist

| Step | What to Check | Why it is Needed |
| :--- | :--- | :--- |
| 1 | Node.js version is 18.x / 20.x | Prevents configuration and dependency build errors. |
| 2 | `npm install` runs successfully | Installs UI frameworks (`next`, `react`, `framer-motion`, `lucide-react`) and style libraries. |
| 3 | Tailwind configuration checks | Verifies colors (`bg-navy`, `acm-blue`, `acm-cyan`) are loaded correctly in styles. |
| 4 | Development port 3000 is open | Enables running the local server under Next.js defaults. |

---

## Technologies Used

- **Framework**: [Next.js (v14.2.35)](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS (v3.4.1)](https://tailwindcss.com/)
- **Animations**: [Framer Motion (v12.40.0)](https://www.framer.com/motion/)
- **Icons**: [Lucide React (v1.17.0)](https://lucide.dev/)
- **Language**: TypeScript & React (v18)

---

## Contributing

We welcome contributions from ACM members and student developers at MBU!
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/NewFeature`).
3. Commit your changes (`git commit -m 'Add some NewFeature'`).
4. Push to the branch (`git push origin feature/NewFeature`).
5. Open a Pull Request.
