# 🚀 AI Code Visualizer

> An AI-powered full-stack web application that analyzes source code, explains its functionality, identifies bugs, suggests optimizations, and maintains a history of previous analyses.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![Google OAuth](https://img.shields.io/badge/OAuth-Google-red?logo=google)
![Gemini](https://img.shields.io/badge/AI-Google_Gemini-blueviolet)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 📌 Overview

AI Code Visualizer is a full-stack MERN application that helps developers understand and improve their code using Generative AI.

Users can securely sign in using Email/Password or Google Authentication, submit code through a Monaco editor, receive detailed AI-generated analysis, and revisit previous analyses through a personalized history page.

The project focuses on combining modern web development practices with AI to create a practical developer productivity tool.

---

# ✨ Features

- 🔐 JWT Authentication
- 🔑 Google Sign-In (OAuth 2.0)
- 👤 Email Registration & Login
- 💻 Monaco Code Editor
- 🤖 AI-Powered Code Analysis using Google Gemini
- 📖 Code Explanation
- ⚡ Time Complexity Analysis
- 💾 Space Complexity Analysis
- 🐞 Bug Detection
- 🚀 Optimized Code Suggestions
- 🔍 Dry Run Generation
- 📚 Analysis History
- 🛡️ Admin Support
- 📱 Responsive UI

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router
- Axios
- Monaco Editor
- Google OAuth

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcrypt.js
- Google Gemini API

---

# 🏗 Architecture

```
React Frontend
       │
       │ REST API
       ▼
Node.js + Express Backend
       │
       ├──────── Google Gemini API
       │
       ▼
MongoDB Atlas
```

---
# 📂 Folder Structure

```
AI-Code-Visualizer
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   └── server.js
│
├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   └── App.jsx
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Akash1072004/AI-Code-Visualizer.git
```

## Backend

```bash
cd backend
npm install
npm run dev
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# 🔐 Environment Variables

## Backend

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET

GEMINI_API_KEY=YOUR_GEMINI_API_KEY

GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
```

## Frontend

```env
VITE_API_URL=http://localhost:5000

VITE_GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
```

---

# 🚀 Future Roadmap

This project is actively being improved. Planned enhancements include:

## 🤖 AI Features

- AI-powered code debugging assistant
- AI-generated unit test cases
- Code quality scoring
- Security vulnerability analysis
- Multi-model AI support (Gemini, GPT, Claude)

## 💻 Developer Experience

- Support for additional programming languages
- Export analysis as PDF
- One-click code formatting
- Syntax-aware optimization suggestions
- Dark/Light themes

## 📊 Productivity

- Search and filter analysis history
- Favorite analyses
- Delete history
- Personal coding statistics dashboard

## 🌍 Collaboration

- Share analysis via public links
- Team workspaces
- Collaborative editing
- Comments on analyses

## ☁ Deployment

- Docker support
- CI/CD with GitHub Actions
- Production monitoring
- Progressive Web App (PWA)

---

# 🎯 Learning Outcomes

Through this project I gained practical experience in:

- Designing a scalable MERN architecture
- Building secure authentication using JWT and Google OAuth
- Integrating Large Language Models into real applications
- Designing MongoDB schemas
- Developing REST APIs
- Creating responsive React applications
- Managing protected routes
- Working with third-party APIs
- Building production-ready full-stack applications

---

# 🎯 Career Goal

I am currently focused on becoming a Software Engineer by strengthening my foundations in:

- Data Structures & Algorithms
- Competitive Programming
- Full-Stack Development
- Artificial Intelligence Integration
- System Design

My goal is to build software that is scalable, reliable, and impactful while continuously improving as an engineer through real-world projects and problem solving.

---

# 👨‍💻 Author

**Akash Kumar**

B.Tech Information Technology

Rajkiya Engineering College, Banda

GitHub:
https://github.com/Akash1072004

LinkedIn:
(https://www.linkedin.com/in/akashkumarzx/)

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.