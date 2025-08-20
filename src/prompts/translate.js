import OpenAI from 'openai'

const openai = new OpenAI({
    dangerouslyAllowBrowser: true
})

const messages = [
    {
        role: 'system',
        content: 'You translate English text into Spanish.'
    },
    {
        role: 'user',
        content: 'The weather is nice today.'
    }
]

const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages
})

console.log(response.choices[0].message.content)
