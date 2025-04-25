# Lesego Kebokilwe – Business Systems Analyst Portfolio

A dynamic, responsive portfolio website showcasing Lesego’s projects, skills, and an interactive chatbot. Built with Bootstrap 5, Vanilla JavaScript, and BotUI, this site can be deployed in minutes via GitHub Pages.

---

## 🔗 Live Demo

(https://LesegoKbBlanda.github.io/bsa-portfolio/)

---

## 🗂️ Repository Structure

```
portfolio/
├── index.html            # Home page
├── about.html            # About Me section
├── projects.html         # Portfolio hub with filters
├── project.html          # Individual project template
├── skills.html           # Skills breakdown
├── resume.html           # Downloadable resume
├── contact.html          # Contact form & links
│
├── assets/
│   ├── css/styles.css    # Custom CSS (colors, glow buttons)
│   ├── js/main.js        # Navbar, testimonials & data loaders
│   ├── js/projects.js    # Renders project cards & filters
│   ├── js/chatbot.js     # BotUI integration
│   └── img/              # Placeholder and thumbnail images
│
└── data/
    ├── projects.json     # Project metadata
    ├── testimonials.json  # Testimonial entries
    └── knowledgebase.json# Chatbot Q/A pairs
```

---

## 🚀 Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/bsa-portfolio.git
   cd bsa-portfolio
   ```

2. **Serve locally**
   - Open `index.html` directly in your browser,
   - Or use a simple HTTP server (e.g., `npx http-server .`)

3. **Deploy to GitHub Pages**
   - Push to a GitHub repo named `bsa-portfolio` (or `your-username.github.io` for root)
   - In GitHub settings → Pages → set branch to `main` / root folder

---

## ✨ Features

- **Responsive layout** with Bootstrap 5’s grid & utilities
- **Vibrant, neon-inspired palette** and glowy, rounded buttons
- **Data-driven** projects & testimonials via JSON
- **Interactive chatbot** (BotUI) backed by `data/knowledgebase.json`
- **No build step**—pure HTML, CSS & JS for instant deployment

---

## 🛠️ Customization

- **Projects** → `data/projects.json`
- **Testimonials** → `data/testimonials.json`
- **Chatbot Q/A** → `data/knowledgebase.json`
- **Colors** → CSS variables in `assets/css/styles.css`

---

## 📖 Usage

- **Add a new project:** append an object in `data/projects.json` with `slug`, `title`, `thumbnail`, and `category`.
- **Edit bio:** update `<p>` tags in `about.html`.
- **Train the bot:** add `{ "question": "...", "answer": "..." }` entries to `data/knowledgebase.json`.

---

## 🙌 Contributing

Contributions are welcome! Please open an issue or submit a PR.

---

## 📄 License

This project is open source under the MIT License. See [LICENSE](LICENSE) for details.


