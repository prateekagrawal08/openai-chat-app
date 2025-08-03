// server.js
const express = require('express');
const OpenAI = require('openai');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/api/chat', async (req, res) => {
    try {
        const { messages } = req.body;
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages,
        });
        res.json(response);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = 5050;
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
