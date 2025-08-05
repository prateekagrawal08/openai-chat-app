const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: messages,
    stop: ['\n']
})
