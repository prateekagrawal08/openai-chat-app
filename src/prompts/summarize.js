import OpenAI from 'openai'

const openai = new OpenAI({
    dangerouslyAllowBrowser: true
})

const messages = [
    {
        role: 'system',
        content: 'Summarize the user provided text into one short paragraph.'
    },
    {
        role: 'user',
        content: 'Artificial intelligence enables computers to perform tasks that typically require human intelligence, such as visu
al perception, speech recognition, decision-making, and language translation.'
    }
]

const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages
})

console.log(response.choices[0].message.content)
