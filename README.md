# URL Shortener - Frontend

This is the frontend for the URL Shortener application built with React.js.
It supports URL shortening, redirection via subdomains, click analytics, and user authentication.

<!-- 🌐 Live Preview
---------------
Coming soon... -->

🚀 Features
-----------
- 🔐 JWT-based Authentication (Login/Register)
- 🔗 Shorten long URLs
- 📊 View click analytics for each shortened URL
- 📋 Copy shortened link to clipboard
- 🌍 Subdomain-based routing (e.g. url.localhost:5173/abcd12)
- 🧭 Dashboard for authenticated users
- ⚙️ Built with Vite + Tailwind CSS + React Router

📦 Tech Stack
-------------
- React.js (v19)
- Vite
- Tailwind CSS
- React Router DOM
- React Icons
- Day.js
- copy-to-clipboard
- React Hot Toast

<!-- 📁 Folder Structure
-------------------
src/
├── components/          # All UI components like Navbar, Footer, etc.

├── pages/               # Page-level components (Landing, Login, Register, Dashboard)

├── utils/               # Helper functions (subdomain parsing, etc.)
├── AppRouter.jsx        # Routes for main domain (www)
├── SubDomainRouter.jsx  # Routes for subdomain (e.g., /:shortUrl)
├── App.jsx              # Entry point with subdomain routing logic
├── constant.js          # List of subdomain configs -->


| Path                     | Description                                                |
|--------------------------|------------------------------------------------------------|
| `src/components/`        | All UI components like Navbar, Footer, etc.                |
| `src/pages/`             | Page-level components (Landing, Login, Register, Dashboard)|
| `src/utils/`             | Helper functions (e.g., subdomain parsing)                 |
| `src/AppRouter.jsx`      | Routes for the main domain (`www`)                         |
| `src/SubDomainRouter.jsx`| Routes for subdomains (e.g., `/shortUrl`)                 |
| `src/App.jsx`            | Entry point with subdomain routing logic                   |
| `src/constant.js`        | Subdomain configuration list                               |


🛠️ Setup Instructions
----------------------

1. Clone the repository

$ git clone https://github.com/your-username/url-shortener-frontend.git
$ cd url-shortener-frontend

2. Install dependencies

$ npm install --legacy-peer-deps

(Use --legacy-peer-deps for React 19 compatibility)

3. Create .env file

.env
-----
VITE_REACT_FRONT_END_URL=http://localhost:5173
VITE_REACT_SUBDOMAIN=http://url.localhost:5173

4. Start development server

$ npm run dev

📌 Subdomain Setup for Localhost

Add the following line to your hosts file:

127.0.0.1 url.localhost

Windows: C:\Windows\System32\drivers\etc\hosts  
Linux/macOS: /etc/hosts

<!-- 📸 Screenshots
--------------
(Add screenshots here: dashboard, analytics view, copy feature, etc.) -->

🤝 Contributing
---------------
Pull requests are welcome. For major changes, please open an issue first.

📄 License
----------
MIT License

🧑‍💻 Author
-----------
Siddharth Singh  
📧 siddharth.singh0403@gmail.com  
🔗 https://github.com/Siddharth-04
