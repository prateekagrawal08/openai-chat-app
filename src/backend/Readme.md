npm init -y
npm install express openai cors dotenv


Common Errors

Error: `fetch` is not defined as a global; Either pass `fetch` to the client, `new OpenAI({ fetch })` or polyfill the global, `globalThis.fetch = fetch`


Why?
The new OpenAI SDK expects the global fetch API, which is available natively in Node.js v18+.

If you’re on Node v16 or below, fetch does not exist globally.
