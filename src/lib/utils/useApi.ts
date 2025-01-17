import { CohereClientV2 } from 'cohere-ai';

const api_key = import.meta.env.VITE_API_KEY;

const cohere = new CohereClientV2({
    token: api_key
});

export const useApi = async (content: string) => {
    const response = await cohere.chat({
        model: 'command-r-plus',
        messages: [
        {
            role: "system", 
            content: `You respond skiping introduction, using this JSON format {"words": [{"entry": "word", "out": "translate", "speak": "pronounce"}, {"entry": "word", "out": "translate", "speak": "pronounce"}]}`
        },
        {
            role: 'user',
            content: content,
        },
        ],
    });

    console.log(response)
    if(response.message?.content) return response.message.content[0].text;

    return "";
};