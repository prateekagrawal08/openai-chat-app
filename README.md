# React + Express + OpenAI Chat API Boilerplate

This project demonstrates a simple full-stack setup:
- **Frontend**: React app (create-react-app or Vite)
- **Backend**: Node.js with Express, acting as a secure proxy to the OpenAI API
- **API**: OpenAI’s GPT (e.g., `gpt-3.5-turbo`), for chatbot or AI text generation

---

## Features

- Secure OpenAI API usage (API key never exposed to frontend)
- CORS configured for smooth local development
- Easy switch of backend port if 5050 is in use
- Includes example for `/api/chat` POST endpoint

## Open API Key 
- Add a .env file inside backend folder
- Generate API Key from https://platform.openai.com/api-keys
- Add like OPENAI_API_KEY=key inside .env file

## FrontEnd
### bash
- npm start

## Back End
### bash
npm start
- Path src/backend

## Note
The new OpenAI SDK expects the global fetch API, which is available natively in Node.js v18+.

If you’re on Node v16 or below, fetch does not exist globally.
