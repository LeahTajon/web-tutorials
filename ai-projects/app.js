const API_KEY = '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'

async function fetchData() {
    const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: "hello, how are you today?",
            max_tokens: 7 
        })
    })
    const data = await response.json()
    console.log(data)
}

fetchData()
