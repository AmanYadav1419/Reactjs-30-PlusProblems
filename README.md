<div align="center">

# React.js Practice Lab: 37+ Real-World Challenges

<p align="center">
  <strong>A production-grade, interactive laboratory featuring 37+ hands-on React.js engineering challenges.</strong><br />
  From foundational JSX and hooks to complex state machines, recursive trees, custom reducers, and interactive games.
</p>

<p align="center">
  <a href="https://github.com/Aman-Yadav1419/Reactjs-30-PlusProblems"><img src="https://img.shields.io/badge/Problems-37%2B%20Challenges-blue?style=for-the-badge&logo=react" alt="Problems Count" /></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-18.2.0-61dafb?style=for-the-badge&logo=react&logoColor=black" alt="React 18" /></a>
  <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-5.2.0-646cff?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-3.4.3-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
  <a href="https://www.framer.com/motion/"><img src="https://img.shields.io/badge/Framer_Motion-11.4.0-ff0055?style=for-the-badge&logo=framer" alt="Framer Motion" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge" alt="License" /></a>
</p>

<p align="center">
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-features--highlights">Features</a> •
  <a href="#-curriculum--problem-catalog">Curriculum</a> •
  <a href="#-how-to-add-a-new-problem">Add New Problem</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-author--connect">Connect</a>
</p>

---

</div>

## 🌟 Overview

The **React.js Practice Lab** is an interactive, browser-based challenge platform designed to take developers from core React primitives to senior-level architectural patterns.

Unlike static coding repositories, every challenge in this project is hooked into a **live interactive runner** with real-time UI previews, source code inspection, multi-file tabs, category filtering, and responsive glassmorphic interfaces built according to strict design taste principles.

---

## ✨ Features & Highlights

- **Live Interactive Playground**: Navigate between challenges instantly with full sub-routing (`/problem/:id`) and animated page transitions.
- **Integrated Code Viewer**: Inspect exact source files (single or multi-file setups) with syntax highlighting right inside the web preview.
- **Glassmorphic Production UI**: Dark-themed, high-contrast design system with zero AI-slop, calibrated spacing, accessible focus rings, and zero pure-black backgrounds (`#09090b`).
- **Comprehensive State Architecture**: Progress from basic `useState` to multi-action `useReducer` engines, context providers, and recursive component trees.
- **Real-World Engineering Challenges**: Includes practical frontend interview questions such as Multi-Step Form Steppers, Matrix Grid Lights, Card Matching Engines, and VS Code-style File Explorers.
- **Fully Responsive & Accessible**: Adheres to strict accessibility guidelines (WCAG) with keyboard navigation, ARIA controls, and fluid mobile layouts.

---

## 🛠 Technology Stack

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Runtime & UI** | [React](https://react.dev/) | `^18.2.0` | Core component tree & state model |
| **Build Engine** | [Vite](https://vitejs.dev/) | `^5.2.0` | Lightning-fast HMR and bundle compilation |
| **Routing** | [React Router DOM](https://reactrouter.com/) | `^6.23.1` | Client-side dynamic & nested routing |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `^3.4.3` | Utility-first glassmorphism design system |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) | `^13.4.0` | Fluid physics & layout transitions |
| **Iconography** | [Phosphor Icons](https://phosphoricons.com/) | `^2.1.10` | High-fidelity, consistent SVG icon system |
| **State Layer** | [Redux Toolkit](https://redux-toolkit.js.org/) | `^2.2.3` | Scalable global store & reducer patterns |

---

## 🚀 Quick Start

Follow these simple steps to run the lab locally:

### 1. Clone the repository
```bash
git clone https://github.com/Aman-Yadav1419/Reactjs-30-PlusProblems.git
cd Reactjs-30-PlusProblems
```

### 2. Install dependencies
```bash
npm install
```

### 3. Launch local development server
```bash
npm run dev
```

Navigate to `http://localhost:5173` in your browser. Select any problem card on the landing page to open its interactive runner and code inspector.

### 4. Build for production
```bash
npm run build
```

---

## 📂 Project Structure

```
Reactjs-30-PlusProblems/
├── public/                     # Static public assets
├── src/
│   ├── components/             # Self-contained problem components
│   │   ├── 1st-Problem/        # Problem 01: Hello World
│   │   ├── 2nd-problem/        # Problem 02: Counter App
│   │   ├── ...                 # Problems 03 through 17
│   │   ├── 18th-Problem/       # Problem 18: Responsive Navigation Menu
│   │   ├── 19th-Problem/       # Problem 19: Dark & Light Theme System
│   │   ├── 20th-Problem/       # Problem 20: Shopping Cart with Context
│   │   ├── ...                 # Problems 21 through 29
│   │   ├── 30th-Problem/       # Problem 30: Document Title & Sub-Routes
│   │   ├── 31th-Probem/        # Problem 31: FAQ Accordion
│   │   ├── 32th-Problem/       # Problem 32: OTP Verification Box
│   │   ├── 33th-Problem/       # Problem 33: Multi-Step Stepper
│   │   ├── 34th-Problem/       # Problem 34: Tabbed Interface
│   │   ├── 35th-Problem/       # Problem 35: Interactive Grid Light Game
│   │   ├── 36th-Problem/       # Problem 36: Memory Card Matching Game
│   │   ├── 37th-Problem/       # Problem 37: Recursive File Explorer Tree
│   │   └── shared/             # Shared application components
│   │       ├── CodeViewer.jsx  # Multi-file syntax code inspector
│   │       └── Footer.jsx      # Application-wide responsive footer
│   ├── data/
│   │   └── problems.js         # Central registry & metadata for all problems
│   ├── pages/
│   │   ├── HomePage.jsx        # Gallery grid, filtering & difficulty tracks
│   │   └── ProblemPage.jsx     # Live arena, runner & source code inspector
│   ├── utils/
│   │   └── rawFiles.js         # Raw file content resolver for code viewer
│   ├── App.jsx                 # Application root & client-side routes
│   ├── App.css                 # Global base styles & font configurations
│   ├── index.css               # Tailwind utility and layout directives
│   ├── main.jsx                # React DOM render entry point
│   └── skill.md                # Senior frontend design taste guidelines
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 📚 Curriculum & Problem Catalog

The curriculum is divided into three progressive mastery tracks:

### 🟢 Beginner Track (#01 – #10)
*Fundamental React primitives, JSX composition, event bindings, and lifecycle hooks.*

| # | Challenge | Focus & Key Concepts | Location |
| :-: | :--- | :--- | :--- |
| **01** | **Hello World** | Basic JSX, Component Hierarchy | `src/components/1st-Problem/` |
| **02** | **Counter App** | `useState`, Event Handlers, Limits | `src/components/2nd-problem/` |
| **03** | **Real-Time Input** | Controlled Components, Input State | `src/components/3rd-Problem/` |
| **04** | **List Renderer** | Keys, `Array.map()`, Dynamic Render | `src/components/4th-Problem/` |
| **05** | **Toggle Switch** | Boolean State, Conditional CSS | `src/components/5th-Problem/` |
| **06** | **API Data Fetcher** | `useEffect`, Fetch API, Async State | `src/components/6th-Problem/` |
| **07** | **Countdown Timer** | `setInterval`, Cleanups, Memory Leaks | `src/components/7th-Problem/` |
| **08** | **Todo List App** | Array Immutability, Item Deletion | `src/components/8th-Problem/` |
| **09** | **Background Switcher** | Inline Styles, Dynamic Color State | `src/components/9th-Problem/` |
| **10** | **Basic Route Setup** | React Router Primitives, Sub-views | `src/components/10th-Problem/` |

---

### 🟡 Intermediate Track (#11 – #20)
*External APIs, browser storage, advanced form validation, and context architectures.*

| # | Challenge | Focus & Key Concepts | Location |
| :-: | :--- | :--- | :--- |
| **11** | **Random Quote Engine** | Remote API Fetch, Randomization | `src/components/11th-Problem/` |
| **12** | **File Uploader** | `FileReader`, File Validation, Previews | `src/components/12th-Problem/` |
| **13** | **Auth Form Validator** | Dual Forms, Error States, Regex | `src/components/13th-Problem/` |
| **14** | **Live Weather App** | Geolocation API, Coordinates Fetch | `src/components/14th-Problem/` |
| **15** | **Search Filter** | Substring Matching, Real-time Debounce | `src/components/15th-Problem/` |
| **16** | **Pagination Component** | Slice Math, Page Boundaries, Controls | `src/components/16th-Problem/` |
| **17** | **HEX Color Picker** | Color Systems, Palette Controls | `src/components/17th-Problem/` |
| **18** | **Navigation Drawer** | Responsive Hamburger, ARIA Disclosure | `src/components/18th-Problem/` |
| **19** | **Dark & Light Themes** | React Context API, System Theme State | `src/components/19th-Problem/` |
| **20** | **Shopping Cart Engine** | Cart Context, Quantities, Total Math | `src/components/20th-Problem/` |

---

### 🔴 Advanced Systems Track (#21 – #37)
*Complex state reducers, drag-and-drop mechanics, nested sub-routing, algorithms, and recursive components.*

| # | Challenge | Focus & Key Concepts | Location |
| :-: | :--- | :--- | :--- |
| **21** | **Counter with Reducer** | `useReducer`, Action Types, Dispatch | `src/components/21th-Problem/` |
| **22** | **Todo with Reducer** | Multi-Action Dispatch, Status Filters | `src/components/22th-Problem/` |
| **23** | **Pagination with Reducer** | Complex State Machine, Page Reducer | `src/components/23th-Problem/` |
| **24** | **Authentication System** | Session State, Mock Tokens, Logout | `src/components/24th-Problem/` |
| **25** | **Draggable Component** | Mouse Coordinates, Offset Drag Logic | `src/components/25th-Problem/` |
| **26** | **Localization System** | i18n Dictionary, Locale Context | `src/components/26th-Problem/` |
| **27** | **Multiple API Concurrent** | `Promise.all`, Error Boundaries | `src/components/27th-Problem/` |
| **28** | **Single State Matrix** | Object State Consolidation, Clones | `src/components/28th-Problem/` |
| **29** | **Image Gallery Modal** | Lightbox Dialog, Keyboard Navigation | `src/components/29th-Problem/` |
| **30** | **Nested Route Navigator** | Sub-Route Memory, Document Title Side-Effect | `src/components/30th-Problem/` |
| **31** | **FAQ Accordion** | Expand/Collapse Animations, ARIA | `src/components/31th-Probem/` |
| **32** | **OTP Verification Input** | Auto-focus, KeyDown Navigation, Paste | `src/components/32th-Problem/` |
| **33** | **Multi-Step Stepper** | Wizard Progress, Step Validation | `src/components/33th-Problem/` |
| **34** | **Tabbed Panel Interface** | Active Tab Index, Content Swapping | `src/components/34th-Problem/` |
| **35** | **Matrix Grid Light Game** | Sequence Recording, Auto-Reverse Queue | `src/components/35th-Problem/` |
| **36** | **Memory Match Game** | Grid Shuffle, Turn Trackers, Victory State | `src/components/36th-Problem/` |
| **37** | **Recursive File Explorer** | Tree Recursion, Nested State, Expandable Nodes | `src/components/37th-Problem/` |

---

## ➕ How to Add a New Problem

Adding a new challenge to this laboratory takes only 3 simple steps:

### Step 1: Create your component folder
Create a directory under `src/components/` following the naming convention:
```
src/components/38th-Problem/
└── YourComponentName.jsx
```

Write your React component with modern Tailwind utility classes:
```jsx
// src/components/38th-Problem/YourComponentName.jsx
import React, { useState } from "react";

const YourComponentName = () => {
  const [data, setData] = useState("");

  return (
    <div className="flex flex-col items-center p-6 w-full max-w-md mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 w-full text-center">
        <h2 className="text-white text-lg font-bold">New Challenge</h2>
        <p className="text-zinc-400 text-sm mt-2">Implementation goes here.</p>
      </div>
    </div>
  );
};

export default YourComponentName;
```

### Step 2: Register in `src/data/problems.js`
Open `src/data/problems.js` and append your problem entry to the `problems` array:
```javascript
{
  id: 38,
  title: "Your Challenge Title",
  description: "Clear and concise one-line problem summary.",
  difficulty: "Intermediate", // "Beginner" | "Intermediate" | "Advanced"
  concepts: ["Custom Hook", "State Machine"],
  folder: "38th-Problem",
  component: "YourComponentName",
  files: [
    "src/components/38th-Problem/YourComponentName.jsx",
  ],
},
```

### Step 3: Register lazy import in `src/pages/ProblemPage.jsx`
Open `src/pages/ProblemPage.jsx` and add the lazy-loaded mapping to `componentMap`:
```javascript
const componentMap = {
  // ... existing components
  38: lazy(() => import("../components/38th-Problem/YourComponentName")),
};
```

That's it! The platform automatically:
1. Adds the challenge card to the landing page grid.
2. Updates difficulty counts and track filters.
3. Generates the live interactive preview at `/problem/38`.
4. Plugs all listed files into the multi-file **Code Viewer**.
5. Connects previous/next pagination buttons.

---

## 🤝 Contributing

Contributions are warmly welcomed! If you'd like to contribute new problems, optimize solutions, or enhance accessibility:

1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feature/problem-38-virtual-list`)
3. **Commit** your changes (`git commit -m "feat: add virtual list challenge #38"`)
4. **Push** to the branch (`git push origin feature/problem-38-virtual-list`)
5. **Open** a Pull Request with a clear summary of your problem and implementation

---

## 👨‍💻 Author & Connect

**Aman Yadav**
*Full-Stack Engineer & React Specialist*

[![Portfolio](https://img.shields.io/badge/Portfolio-Aman_Yadav-black?style=for-the-badge&logo=vercel&logoColor=white)](https://aman-yadav1419-portfolio.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-aman--yadav2003-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/aman-yadav2003/)
[![Twitter / X](https://img.shields.io/badge/X-@Aman__Yadav1419-000000?style=for-the-badge&logo=x)](https://x.com/Aman_Yadav1419)
[![GitHub](https://img.shields.io/badge/GitHub-Aman--Yadav1419-181717?style=for-the-badge&logo=github)](https://github.com/Aman-Yadav1419)

- 🌐 **Portfolio**: [aman-yadav1419-portfolio.vercel.app](https://aman-yadav1419-portfolio.vercel.app/)
- 💼 **LinkedIn**: [linkedin.com/in/aman-yadav2003](https://www.linkedin.com/in/aman-yadav2003/)
- 𝕏 **Twitter (X)**: [@Aman_Yadav1419](https://x.com/Aman_Yadav1419)

---

## 📄 License

This repository is licensed under the [MIT License](LICENSE). Feel free to use this codebase for learning, teaching, or interview preparation.

---

<div align="center">

**If you found this repository helpful, please consider giving it a ⭐ star!**<br />
*Every star helps more developers discover and learn React engineering patterns.*

</div>
