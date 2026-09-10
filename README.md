# Portfolio Website

A responsive personal portfolio website built with plain HTML, CSS, and JavaScript. The site uses a modular section-based layout, a dark visual system with lime accents, and interactive project and skills browsing.

This README intentionally does not include the portfolio owner's name, email address, social profiles, personal domain, or other identifying contact details. Review the content and assets in the site before sharing the repository publicly.

## Features

### Visual design

- Responsive layouts for desktop, tablet, and mobile screens
- Dark theme with lime accent colors
- Custom cursor and hover states on larger screens
- Glass-style surfaces, noise textures, decorative shapes, and animated transitions
- Google Fonts typography using Syne and DM Sans
- BoxIcons for interface and social icons

### Home section

- Artistic hero layout with decorative shapes, stars, scribbles, and a profile image
- Availability badge, calls to action, and social link controls
- Animated metrics for projects, technologies, and years of coding
- Particle canvas animation with connected particles
- Scrolling technology marquee
- Scroll indicator and responsive navigation

### Interactive sections

- About section with tabbed content
- Skills section with category filters for front-end, back-end, DevOps, AI, APIs, and languages
- Projects section with filters for thesis, personal, and professional work
- Expandable project cards with technology details and feature lists
- Project screenshot lightbox with previous/next controls and image counter
- Contact and email modals with asynchronous form submission
- Mobile navigation menu and active navigation state while scrolling

## Featured projects

- **TISA - AI-Powered LMS**: A university learning platform with AI tutoring, Keycloak SSO, academic scheduling, task management, and administration tools.
- **ListaGo - Task Manager**: A responsive task management app with project organization, multiple views, dashboard statistics, and LocalStorage persistence.
- **Payroll Automation**: An internship project focused on automating payroll workflows with web technologies and external APIs.
- **Just.3d - Interactive Website**: A personal experiment using 3D visual elements and interactive web animations.

## Technology

| Technology | Use |
| --- | --- |
| HTML5 | Page structure and reusable section partials |
| CSS3 | Layout, responsive design, animations, effects, and theming |
| JavaScript | Section loading, navigation, filters, modals, lightbox, particles, and counters |
| Google Fonts | Syne and DM Sans |
| BoxIcons | Icons used throughout the interface |
| Formspree | Optional form submission service configured in the modal markup |

The portfolio content showcases technologies including React, TypeScript, JavaScript, Node.js, Express, PostgreSQL, Redis, Docker, Keycloak, OpenAI, Gemini, Git, HTML, CSS, and Tailwind CSS. These are displayed as portfolio skills and project technologies; they are not all dependencies of this static site.

## Project structure

```text
MY PAGE/
├── index.html              # Page shell and dynamic section loader
├── index.old.html          # Previous monolithic page, kept for reference
├── function.js             # Site interactions and animations
├── Main.css                # Main stylesheet
├── sections/
│   ├── navbar.html         # Site navigation
│   ├── hero.html           # Home section and hero content
│   ├── about.html          # About section
│   ├── skills.html         # Skills and technology filters
│   ├── projects.html       # Project cards and project filters
│   ├── footer.html         # Footer content
│   └── modals.html         # Contact, email, and lightbox markup
├── Images/
│   ├── favi/               # Favicon and web app icons
│   ├── me/                 # Profile images
│   ├── stack/              # Technology icons
│   └── projects/           # Project screenshots
├── LICENSE
├── TODO.md
└── README.md
```

## How it works

`index.html` provides the page shell and loads the HTML files listed in `sectionFiles` from the `sections/` directory. After all sections are inserted into the page, it loads `function.js`, which attaches the event handlers and starts the interactive features.

The page must be served through a local web server because the browser blocks the section `fetch()` requests when the page is opened directly with a `file://` URL.

## Run locally

Prerequisites:

- A modern web browser
- A local static web server

From the project directory, start one of these servers:

```bash
# Python
python -m http.server 8000

# Node.js
npx serve

# PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in a browser.

## Customization

1. Edit the content in `sections/`.
2. Update colors, layout, and responsive rules in `Main.css`.
3. Add or replace images in `Images/`.
4. Update the `sectionFiles` array in `index.html` when adding a new section.
5. Update the form action in `sections/modals.html` if a Formspree endpoint is used.
6. Replace personal links, text, and images with your own values before publishing.

## Privacy checklist before sharing

- Remove or replace names, email addresses, phone numbers, and physical locations.
- Review social links and form endpoints in `sections/hero.html` and `sections/modals.html`.
- Check image metadata and filenames for identifying information.
- Review profile photos and project screenshots before publishing them.
- Search the repository for personal domains, usernames, and email addresses.
- Remove unused archives or copies that may contain older personal information.

## Browser support

The site targets current versions of Chrome, Firefox, Safari, and Edge, including modern mobile browsers. JavaScript and network access to the local server are required for the modular sections and interactive features.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## Credits

- Fonts: [Google Fonts](https://fonts.google.com/)
- Icons: [BoxIcons](https://boxicons.com/)
- Form handling: [Formspree](https://formspree.io/)
