# 🚀 John Jeslhee's Portfolio Website

A modern, sleek, and interactive personal portfolio website showcasing my journey as a Computer Science student and aspiring web developer. Built with a focus on clean design, smooth animations, and responsive user experience.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Website Status](https://img.shields.io/badge/Website-Live-brightgreen)](https://jeslhee.xyz)
[![Made with HTML/CSS/JS](https://img.shields.io/badge/Made%20with-HTML%2FCSS%2FJS-orange)]()

---

## ✨ Features

### 🎨 Design Highlights
- **Dark theme with lime green accents** - Modern aesthetic with high contrast
- **Custom cursor animations** - Smooth interactive cursor that expands on hover
- **Glass-morphism effects** - Backdrop blur and frosted glass elements
- **Responsive layout** - Works perfectly on mobile, tablet, and desktop
- **Noise overlay texture** - Subtle grain effect for depth
- **Smooth scroll animations** - Fade-up and slide-in transitions

### 📱 Sections
| Section | Description |
|---------|-------------|
| **Home** | Hero section with animated profile, social links, and CTA buttons |
| **About** | Personal background, education, and professional journey |
| **Skills** | Comprehensive tech stack organized by Frontend, Backend, and Tools |
| **Projects** | Featured projects with details, tech stacks, and image lightbox |
| **Contact** | Modal contact form powered by Formspree for easy messaging |

### 🎯 Interactive Features
- **Project Lightbox** - Click "View Project" to browse screenshot galleries
- **Contact Modal** - Elegant popup form for direct messaging
- **Mobile Navigation** - Hamburger menu for responsive mobile experience
- **Social Integration** - LinkedIn, GitHub, and email links in hero section
- **Smooth scrolling** - Anchor links with scroll-behavior: smooth

---

## 🛠️ Tech Stack

### Core Technologies
| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic markup and structure |
| **CSS3** | Modern styling with CSS Grid & Flexbox |
| **JavaScript (ES6+)** | Interactive functionality and DOM manipulation |
| **Google Fonts** | Syne (display) + DM Sans (body) typography |
| **BoxIcons** | Icon library for socials and UI elements |

### Full Stack Experience showcased
#### Frontend
- React 18 + TypeScript
- Tailwind CSS
- Vite
- Radix UI

#### Backend
- Node.js + Express
- PostgreSQL + Redis
- Google Apps Script
- Prisma ORM

#### DevOps & Tools
- Docker & Docker Compose
- Keycloak (SSO)
- Git & GitHub
- OpenAI/Anthropic/Gemini APIs

---

## 📂 Project Structure

```
MY PAGE/
├── index.html              # Main HTML file
├── Main.css               # All styles and animations
├── function.js            # JavaScript interactivity
├── LICENSE                # MIT License
├── README.md              # This file!
└── Images/
    ├── favi/              # Favicons and PWA icons
    ├── me/                # Profile photos
    ├── stack/             # Technology logos
    └── projects/          # Project screenshots
```

### Key Files Explained

#### `index.html` [c:\Users\John Jeslhee\Projects\MY PAGE\index.html](file:///c:/Users/John%20Jeslhee/Projects/MY%20PAGE/index.html)
- Semantic HTML5 structure
- All sections properly organized
- Formspree integration for contact form
- External CDNs for fonts and icons
- Lightbox and modal markup

#### `Main.css` [c:\Users\John Jeslhee\Projects\MY PAGE\Main.css](file:///c:/Users/John%20Jeslhee/Projects/MY%20PAGE/Main.css)
- CSS custom properties for theming
- CSS Grid and Flexbox layouts
- Custom cursor animations
- Responsive media queries
- Keyframe animations for fade effects
- Noise overlay and glass-morphism effects

#### `function.js`
- Custom cursor tracking
- Mobile hamburger menu
- Lightbox gallery functionality
- Contact modal management
- Form submission handling
- Scroll animations

---

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Basic web server or just open `index.html` directly

### Local Development
1. **Clone the repository**
   ```bash
   git clone https://github.com/JeslheeDelrosario/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your browser, or
   - Use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Visit** `http://localhost:8000` in your browser

### Customization Guide
1. **Update personal info** - Edit `index.html` to change name, bio, education
2. **Add projects** - Add new project cards in the Projects section
3. **Modify colors** - Update CSS variables in `:root` in Main.css
4. **Change images** - Replace images in the Images/ directory
5. **Update contact form** - Replace Formspree endpoint with your own

---

## 📸 Featured Projects

### 🎮 Just.3d
A simple webpage built with HTML, CSS, and JavaScript featuring 3D visual elements and smooth interactive animations.

### 💼 Payroll Management System (Internship)
An automation web app using Google Apps Script, JavaScript, Bootstrap, and REST APIs for seamless payroll processing.

### 🤖 TISA - Towards Intelligent Student Assistance (Thesis)
An AI-powered learning management system with:
- AI Tutor with context-aware conversations
- Keycloak SSO authentication
- Calendar & task management
- Weather integration
- Admin dashboard

### ✅ ListaGo - Modern To-Do List
Comprehensive task management app with:
- Project organization
- Multiple views (dashboard, today, upcoming)
- LocalStorage persistence
- Glassmorphism UI design

---

## 🎨 Design System

### Color Palette
```css
--bg: #0a0a0a;           /* Main background */
--surface: #111111;      /* Card surfaces */
--border: #1e1e1e;       /* Border color */
--text: #f0ece4;          /* Primary text */
--muted: #6b6760;         /* Secondary text */
--accent: #c8f542;        /* Lime green accent */
```

### Typography
- **Display Font**: Syne (Bold weights for headings)
- **Body Font**: DM Sans (Light weights for content)
- **Letter spacing**: Modern typographic scaling with clamp() for responsiveness

---

## 📱 Responsive Breakpoints

| Breakpoint | Devices | Adjustments |
|------------|---------|-------------|
| `> 900px` | Desktop | Full layout, hero panel right-aligned |
| `600px - 900px` | Tablet | Hero panel stacked, grid adjusts |
| `< 600px` | Mobile | All sections stacked, hamburger menu |

---

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile (Android)

---

## 📬 Contact Form Setup

The contact form uses [Formspree](https://formspree.io/) for handling submissions. To use it:
1. Create an account at Formspree.io
2. Create a new form
3. Replace the `action` attribute in `index.html` with your Formspree endpoint
4. Start receiving messages!

```html
<form id="contact-form" action="https://formspree.io/f/your-form-id" method="post">
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License
Copyright (c) 2026 Jeslhee Del Rosario

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
```

---

## 🔗 Links

- **GitHub**: [@JeslheeDelrosario](https://github.com/JeslheeDelrosario)
- **LinkedIn**: [John Jeslhee Del Rosario](https://www.linkedin.com/in/john-jeslheedelrosario/)
- **Email**: delrosariojohnjeslhee@gmail.com

---

## 🙏 Acknowledgments

- Fonts from [Google Fonts](https://fonts.google.com/)
- Icons from [BoxIcons](https://boxicons.com/)
- Form handling by [Formspree](https://formspree.io/)
- Inspiration from modern portfolio designs across the web

---

<p align="center">
  Built with 💚 by John Jeslhee M. Del Rosario
</p>