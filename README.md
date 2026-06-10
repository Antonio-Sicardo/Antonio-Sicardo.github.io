# Antonio Reyes — Developer Portfolio

Personal portfolio website built with the [Hyperspace](https://html5up.net/hyperspace) template by HTML5 UP, customized to present my profile, projects, and skills as a Java Full-Stack Web Developer.

---

## 🌐 Live Site

> _Add your deployment URL here (GitHub Pages, Netlify, etc.)_

---

## 📋 Table of Contents

- [About](#about)
- [Sections](#sections)
- [Projects Featured](#projects-featured)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup](#setup)
- [Customization](#customization)
- [License](#license)

---

## About

This is a static personal portfolio site designed to present my background, featured projects, technical skills, and contact information. It is built on top of the Hyperspace free template by HTML5 UP and extended with custom styles and JavaScript functionality.

---

## Sections

| Section | Description |
|---|---|
| **Who am I** | Introduction, profile photo, and personal summary |
| **My Projects** | Featured development projects with descriptions and links |
| **My Super Skills** | Technical and methodological skill blocks |
| **Get in Touch** | Contact form with `mailto:` integration and social links |

---

## Projects Featured

### JAVASPORTS E-Commerce Platform — Hackathon 2026
E-commerce platform for affordable specialized sportswear, developed as part of the Generation Hackathon 2026.
- **Role:** Front-End Developer
- **Stack:** HTML5, CSS3, JavaScript, Bootstrap, Git & GitHub
- **Details:** [`projectJAVASPORTS.html`](./projectJAVASPORTS.html)

### Caliope — Literary Social Network Platform
Full-stack social networking platform for publishing, discovering, reviewing, and rating literary works. Developed as a Java Full Stack Bootcamp capstone project.
- **Role:** Product Owner · Scrum Master · Full-Stack Developer
- **Stack:** Java, HTML5, CSS3, JavaScript, Bootstrap, MySQL, Git & GitHub
- **Details:** [`projectCaliope.html`](./projectCaliope.html)

---

## Tech Stack

**Languages**
- Java · JavaScript · HTML5 · CSS3

**Libraries & Frameworks**
- Bootstrap · jQuery

**Tools**
- Git & GitHub · MySQL · Adobe Illustrator

**Methodologies**
- Scrum · Agile · Lean Six Sigma Yellow Belt · Sustainable Project Management

---

## Project Structure

```
portfolio/
│
├── index.html                  # Main page
├── projectJAVASPORTS.html      # JAVASPORTS project detail page
├── projectCaliope.html         # Caliope project detail page
│
├── assets/
│   ├── css/
│   │   ├── main.css            # Hyperspace base styles (do not edit)
│   │   ├── custom.css          # Custom styles (profile photo, overrides)
│   │   └── noscript.css        # Fallback styles when JS is disabled
│   │
│   └── js/
│       ├── main.js             # Hyperspace base scripts (do not edit)
│       ├── jquery.email.js     # Contact form mailto integration
│       └── ...                 # Other Hyperspace scripts
│
├── images/
│   ├── img_RASR.png            # Profile photo
│   ├── javasportsLogoCopy2.jpeg
│   └── caliopeLogo.jpeg
│
└── files/
    └── AntonioReyesCVATSV00.pdf   # Downloadable CV
```

---

## Setup

This is a fully static site — no build tools or package managers required.

**To run it locally:**

```bash
git clone https://github.com/Antonio-Sicardo/<repo-name>.git
cd <repo-name>
```

Then open `index.html` in your browser, or use a local server:

```bash
# With VS Code — install Live Server extension, then click "Go Live"

# With Python
python -m http.server 8000
```

**To deploy:**
- [GitHub Pages](https://pages.github.com/) — push to a `gh-pages` branch or configure from `main`
- [Netlify](https://netlify.com/) — drag and drop the project folder

---

## Customization

All personal modifications are isolated in two files to keep the original template untouched:

| File | Purpose |
|---|---|
| `assets/css/custom.css` | Profile photo styles and any visual overrides |
| `assets/js/jquery.email.js` | Contact form `mailto:` behavior |

> ⚠️ Avoid editing `main.css` or `main.js` directly — those are the original Hyperspace files. Place any changes in the `custom.*` files instead.

---

## License

The base template **Hyperspace** is free for personal and commercial use under the [Creative Commons Attribution 3.0 license](https://html5up.net/license).

All custom content — text, images, project descriptions, and code modifications — is authored by **Antonio Reyes** © SIRR. All rights reserved.
