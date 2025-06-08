<h1 align="center">Nexspro</h1>

<p align="center">
  <strong>Fullstack project — Vue 3 + Rails API</strong><br />
  A personal hub to showcase, centralize, and evolve projects, streams, and resources.
</p>

<p align="center">
  <a href="https://github.com/nexspro/nexspro">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/nexspro/nexspro?style=flat-square" />
  </a>
  <a href="https://github.com/nexspro/nexspro/blob/main/LICENSE">
    <img alt="License" src="https://img.shields.io/github/license/nexspro/nexspro?style=flat-square" />
  </a>
  <a href="https://nexspro.com">
    <img alt="Live" src="https://img.shields.io/badge/demo-live-green?style=flat-square" />
  </a>
</p>

---

## 🚀 Features

- ⚙️ **Backend**: Ruby on Rails API-only, secure and optimized
- 🌐 **Frontend**: Vue 3 + Vite, built for interactivity and performance
- 🎨 **UI**: Tailwind CSS + dark/light theme toggle
- 🔐 **Auth**: JWT + API-first authentication
- 🧪 **Test stack**: RSpec, Vitest, optional E2E ready
- 📦 **Ready for production** (VPS, CI, caching…)

---

## 🖥 Demo

🌍 [https://nexspro.com](https://nexspro.com)

_(En cours de développement — preview disponible sur demande)_

---

## 🛠 Tech Stack

| Layer      | Stack                                    |
|------------|------------------------------------------|
| Frontend   | Vue 3, Vite, Pinia, Tailwind CSS         |
| Backend    | Ruby on Rails 8 (API), Rodauth, Postmark |
| Database   | PostgreSQL                               |
| Auth       | JWT + refresh tokens                     |
| Deployment | OVH VPS, Kamal (bientôt)                 |

---

## 📦 Installation

```bash
# Frontend
cd frontend
npm install
npm run dev

# Backend
cd backend
bundle install
rails db:setup
rails s

📁 Project Structure

nexspro/
├── backend/       → Rails API-only
├── frontend/      → Vue 3 + Vite
└── README.md

🧑‍💻 Author

Michael minot    
GitHub: @nexspro
LinkedIn: @nexspro

📄 License
This project is under MIT License.

