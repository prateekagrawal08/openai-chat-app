
# 🚀 React + Express + OpenAI Chat API Boilerplate

A robust full-stack template for building AI-powered chat and text applications using:
- **Frontend:** React (create-react-app or Vite)
- **Backend:** Node.js + Express (as a secure proxy)
- **API:** OpenAI’s GPT models (e.g., `gpt-3.5-turbo`)

---

## ✨ Features

- **Secure API key** handling (never exposed to the frontend)
- **CORS configured** for smooth local development
- **Port flexibility** (backend defaults to 5050, easy to change)
- **Ready-to-use** `/api/chat` POST endpoint for AI conversations
- **Sample prompt scripts** for translation and summarization in `src/prompts`

---

## 🗝️ OpenAI API Key Setup

1. **Get your OpenAI API Key:**
   - Go to [OpenAI API Keys page](https://platform.openai.com/api-keys) and generate a new key.

2. **Create a `.env` file** in the `backend` directory (never commit this file!):
   ```
   OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

---

## 🖥️ Project Structure

```
/
├── public/          # Static assets
├── src/
│   ├── App.js       # React app
│   ├── backend/     # Express server (proxy to OpenAI)
│   └── prompts/     # Example prompt scripts
└── ...
```

---

## 🚦 Quickstart

### 1. **Backend**

```bash
cd src/backend
npm install
npm start
```
- Runs Express API server at `http://localhost:5050`.

### 2. **Frontend**

```bash
npm install
npm start
```
- Runs React dev server at `http://localhost:3000`.
- Make sure API requests point to `http://localhost:5050/api/chat`.

---

## 🔥 Example API Request (from React or curl)

```js
fetch('http://localhost:5050/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: 'Say hello!' }
    ]
  })
})
  .then(res => res.json())
  .then(data => console.log(data));
```

Or via terminal:
```bash
curl -X POST http://localhost:5050/api/chat   -H "Content-Type: application/json"   -d '{"messages":[{"role":"user","content":"Hello!"}]}'
```

---

## 🧪 Sample Prompt Scripts

Example scripts live in `src/prompts` and demonstrate different tasks:

```bash
node src/prompts/translate.js   # Translate English to Spanish
node src/prompts/summarize.js   # Summarize a paragraph
node src/prompts/podcast.js     # Recommend a podcast episode with Supabase
```

Ensure your `OPENAI_API_KEY` is available in the environment when running these. For `podcast.js`, also set `SUPABASE_URL` and `SUPABASE_KEY`.

---

## ⚠️ Node.js Version Requirement

- **Node.js v18+ is required.**  
  The OpenAI SDK expects the global `fetch` API, available natively in Node.js 18 and above.
- To check your version:
  ```bash
  node -v
  ```
- To upgrade, use [nvm](https://github.com/nvm-sh/nvm):
  ```bash
  nvm install 18
  nvm use 18
  ```

---

## 🐞 Common Issues & Troubleshooting

- **Error: `fetch` is not defined as a global**
  > Solution: Upgrade Node.js to v18+.  
  > Alternative: Polyfill fetch (not recommended).

- **CORS error**
  > Solution: Ensure backend uses `app.use(cors({ origin: 'http://localhost:3000' }));` and that both servers are running.

- **Push blocked due to secrets**
  > Solution: Remove secrets from git history using `git filter-repo` and always use `.gitignore` for `.env`.

- **Port already in use**
  > Solution: Change the backend `PORT` in `server.js` or kill the process using that port.

---

## 🔐 Security Best Practices

- **Never commit your `.env` file or API keys**—add them to `.gitignore`.
- Always run backend as a proxy, never expose your OpenAI key in frontend code.
- Rotate your API keys regularly.

---

## 📄 License
This project is shared for educational and reference purposes.  
You may view, use, and distribute this code freely.  
Attribution is appreciated but not required.  
No warranty is provided.

---

> **Need help?**  
> Open an issue in this repo, or ask for guidance!

