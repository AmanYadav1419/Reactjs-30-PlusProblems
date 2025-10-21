# React.js Practice Problems Collection 🚀

A comprehensive collection of **35 React.js practice problems** designed to help developers master React concepts from beginner to advanced levels. Each problem focuses on specific React features and real-world scenarios.

## 📋 Table of Contents

- [React.js Practice Problems Collection 🚀](#reactjs-practice-problems-collection-)
  - [📋 Table of Contents](#-table-of-contents)
  - [🎯 Overview](#-overview)
  - [🛠 Technology Stack](#-technology-stack)
  - [📋 Prerequisites](#-prerequisites)
  - [🚀 Installation \& Setup](#-installation--setup)
  - [📚 Practice Problems](#-practice-problems)
    - [Beginner Level (1-10)](#beginner-level-1-10)
    - [Intermediate Level (11-20)](#intermediate-level-11-20)
    - [Advanced Level (21-35)](#advanced-level-21-35)
  - [🎮 How to Run Problems](#-how-to-run-problems)
    - [Example:](#example)
  - [➕ Adding New Problems](#-adding-new-problems)
  - [🤝 Contributing](#-contributing)
    - [Contribution Guidelines:](#contribution-guidelines)
  - [📄 License](#-license)
  - [🎯 Learning Path Recommendations](#-learning-path-recommendations)
    - [For Beginners:](#for-beginners)
    - [For Intermediate Developers:](#for-intermediate-developers)
    - [For Advanced Developers:](#for-advanced-developers)

## 🎯 Overview

This repository contains a curated collection of React.js practice problems that progressively build your understanding of React concepts. Each problem is self-contained with its own component and focuses on specific React features like:

- **State Management** (useState, useReducer)
- **Side Effects** (useEffect)
- **Context API** (React Context)
- **Routing** (React Router)
- **API Integration** (Fetch, Axios)
- **Form Handling**
- **Component Composition**
- **Custom Hooks**
- **Performance Optimization**

## 🛠 Technology Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.2.0
- **Styling**: Tailwind CSS 3.4.3
- **State Management**: Redux Toolkit 2.2.3
- **Routing**: React Router DOM 6.23.1
- **HTTP Client**: Axios 1.7.2
- **Development**: ESLint, PostCSS, Autoprefixer

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 16.0 or higher)
- **npm** or **yarn** package manager
- Basic understanding of JavaScript ES6+
- Familiarity with React concepts

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Reactjs-30-PlusProblems
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 📚 Practice Problems

### Beginner Level (1-10)

| Problem | Component | Description | Key Concepts |
|---------|-----------|-------------|-------------|
| **1** | [HelloWorld](./src/components/1st-Problem/HelloWorld.jsx) | Display "Hello World" message | Basic JSX, Component Structure |
| **2** | [CounterApp](./src/components/2nd-problem/CounterApp.jsx) | Counter with increment/decrement buttons | useState Hook, Event Handling |
| **3** | [FormInput](./src/components/3rd-Problem/FormInput.jsx) | Real-time form input display | Controlled Components, useState |
| **4** | [ListComponent](./src/components/4th-Problem/ListComponent.jsx) | Display list of items | Array.map(), JSX Lists |
| **5** | [ToggleSwitch](./src/components/5th-Problem/ToggleSwitch.jsx) | Basic toggle switch component | Conditional Rendering, useState |
| **6** | [FetchDataFromAPI](./src/components/6th-Problem/FetchDataFromAPI.jsx) | Fetch and display API data | useEffect Hook, API Integration |
| **7** | [TimerCountDown](./src/components/7th-Problem/TimerCountDown.jsx) | Countdown timer component | useEffect, setInterval, Cleanup |
| **8** | [ToDoListApp](./src/components/8th-Problem/ToDoListApp.jsx) | Simple todo list with add/remove | Array Manipulation, useState |
| **9** | [BackgroundChange](./src/components/9th-Problem/BackgroundChange.jsx) | Dynamic background color changer | Dynamic Styling, useState |
| **10** | [BasicRoute](./src/components/10th-Problem/BasicRoute.jsx) | Basic routing setup | React Router, Navigation |

### Intermediate Level (11-20)

| Problem | Component | Description | Key Concepts |
|---------|-----------|-------------|-------------|
| **11** | [RandomQuote](./src/components/11th-Problem/RandomQuote.jsx) | Random quote generator | API Integration, useEffect |
| **12** | [FileUploader](./src/components/12th-Problem/FileUploader.jsx) | File upload component | File Handling, FormData |
| **13** | [BasicLoginAndRegistrationForm](./src/components/13th-Problem/BasicLoginAndRegistrationForm.jsx) | Login and registration forms | Form Validation, Multiple Forms |
| **14** | [WeatherApp](./src/components/14th-Problem/WeatherApp.jsx) | Weather information display | Geolocation API, External APIs |
| **15** | [SearchBarFilter](./src/components/15th-Problem/SearchBarFilter.jsx) | Search bar with filtering | Array Filtering, Real-time Search |
| **16** | [PaginationComponent](./src/components/16th-Problem/PaginationComponent.jsx) | Pagination for large datasets | Data Pagination, State Management |
| **17** | [ColorPicker](./src/components/17th-Problem/ColorPicker.jsx) | Interactive color picker | Color Manipulation, Event Handling |
| **18** | [NavigationMenu](./src/components/18th-Problem/NavigationMenu.jsx) | Responsive navigation menu | Responsive Design, CSS Styling |
| **19** | [DarkandLightTheme](./src/components/19th-Problem/DarkandLightTheme.jsx) | Theme switching system | Context API, Theme Management |
| **20** | [ShoppingCart](./src/components/20th-Problem/ShoppingCart.jsx) | Shopping cart functionality | Context API, Complex State |

### Advanced Level (21-35)

| Problem | Component | Description | Key Concepts |
|---------|-----------|-------------|-------------|
| **21** | [CounterWithReducer](./src/components/21th-Problem/CounterWithReducer.jsx) | Counter using useReducer | useReducer Hook, State Logic |
| **22** | [ToDowithReducer](./src/components/22th-Problem/ToDowithReducer.jsx) | Todo app with useReducer | Complex State Management, useReducer |
| **23** | [PaginationWithReducer](./src/components/23th-Problem/PaginationWithReducer.jsx) | Pagination with useReducer | Advanced State Management |
| **24** | [UserAuthenticationSystem](./src/components/24th-Problem/UserAuthenticationSystem.jsx) | Complete auth system | Authentication, Protected Routes |
| **25** | [DragableComponentWithReducer](./src/components/25th-Problem/DragableComponentWithReducer.jsx) | Draggable component | Drag & Drop, Mouse Events |
| **26** | [LocalizationSystem](./src/components/26th-Problem/LocalizationSystem.jsx) | Multi-language support | Internationalization, Context |
| **27** | [MultipleAPIdataFetch](./src/components/27th-Problem/MultipleAPIdataFetch.jsx) | Multiple API data fetching | Promise.all, Concurrent Requests |
| **28** | [MultipleStateInSingleState](./src/components/28th-Problem/MultipleStateInSingleState.jsx) | Complex state management | State Consolidation, Object State |
| **29** | [ImageGallery](./src/components/29th-Problem/ImageGallery.jsx) | Interactive image gallery | Image Handling, Modal Components |
| **30** | [DifferentRoutePages](./src/components/30th-Problem/DifferentRoutePages.jsx) | Multi-page routing | Advanced Routing, Nested Routes |
| **31** | [FAQ](./src/components/31th-Probem/FAQ.jsx) | FAQ accordion component | Accordion UI, Conditional Display |
| **32** | [OTPcreation](./src/components/32th-Problem/OTPcreation.jsx) | OTP input component | Input Validation, Security |
| **33** | [Stepper](./src/components/33th-Problem/Stepper.jsx) | Multi-step form stepper | Step Navigation, Form Wizards |
| **34** | [Tabs](./src/components/34th-Problem/Tabs.jsx) | Tabbed interface component | Tab Navigation, Content Switching |
| **35** | [GridLight](./src/components/35th-Problem/GridLight.jsx) | Interactive grid light game | Game Logic, Animation, Timers |

## 🎮 How to Run Problems

1. **Navigate to the specific problem** in `src/components/[Problem-Number]-Problem/`
2. **Uncomment the component** in `src/App.jsx`:
   ```jsx
   // Uncomment the line for the problem you want to test
   import ProblemComponent from "./components/[Problem-Number]-Problem/ComponentName";
   
   function App() {
     return (
       <div>
         <ProblemComponent />
       </div>
     );
   }
   ```
3. **Save the file** and the component will render in your browser
4. **Comment out** the component when done testing

### Example:
```jsx
// To test the Counter App (Problem 2)
import CounterApp from "./components/2nd-problem/CounterApp";

function App() {
  return (
    <div>
      <CounterApp />
    </div>
  );
}
```

## ➕ Adding New Problems

To add a new practice problem to this collection:

1. **Create a new folder** in `src/components/` following the naming convention:
   ```
   src/components/[Number]th-Problem/
   ```

2. **Add your component file** with a descriptive name:
   ```jsx
   // src/components/36th-Problem/YourComponent.jsx
   import React from 'react';
   
   const YourComponent = () => {
     return (
       <div>
         {/* Your component implementation */}
       </div>
     );
   };
   
   export default YourComponent;
   ```

3. **Update App.jsx**:
   ```jsx
   // Add import
   import YourComponent from "./components/36th-Problem/YourComponent";
   
   // Add to JSX
   function App() {
     return (
       <div>
         {/* 36th Problem */}
         <YourComponent />
       </div>
     );
   }
   ```

4. **Update this README** by adding your problem to the appropriate difficulty section

5. **Follow the existing patterns**:
   - Add problem description as a comment
   - Use proper naming conventions
   - Include key concepts covered
   - Add proper error handling where applicable

## 🤝 Contributing

Contributions are welcome! Please feel free to:

- Add new practice problems
- Improve existing solutions
- Fix bugs or issues
- Enhance documentation
- Suggest new problem ideas

### Contribution Guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-problem`)
3. Follow the existing code structure and naming conventions
4. Add proper comments and documentation
5. Test your changes thoroughly
6. Submit a pull request with a clear description

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Learning Path Recommendations

### For Beginners:
Start with problems 1-10 to build fundamental React knowledge

### For Intermediate Developers:
Focus on problems 11-20 to learn advanced patterns and API integration

### For Advanced Developers:
Tackle problems 21-35 to master complex state management and advanced React patterns

---

**Happy Coding! 🚀**

*This collection is designed to grow with your React skills. Each problem builds upon previous concepts while introducing new challenges.*
