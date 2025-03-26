import { CohereClientV2 } from 'cohere-ai';
import { type ApiError, ApiErrorType } from './errors';
import { correctResult } from './correctJson';

const api_key = import.meta.env.VITE_API_KEY;

const cohere = new CohereClientV2({
    token: api_key
});

interface ApiResponse {
    words: Array<{
        entry: string;
        out: string;
        speak: string;
    }>;
}

export const useApi = async (content: string): Promise<string | ApiError> => {
    try {
        const response = await cohere.chat({
            model: 'command-r-plus',
            messages: [
                {
                    role: "system", 
                    content: `You are a translator assistant that translates words from a given language to another language, using a specific format.
                    Client: 2 random food words in en translated to pt-br and how to pronounce
                    Assistant: {"words": [{"entry": "cake", "out": "bolo", "speak": "quei-ke"}, {"entry": "pizza", "out": "pizza", "speak": "pi-zza"}]}
                    Client: 2 random animals words in pt-br translated to en and how to pronounce
                    Assistant: {"words": [{"entry": "cachorro", "out": "dog", "speak": "ka-chor-roh"}, {"entry": "gato", "out": "cat", "speak": "ga-toh"}]}`
                },
                {
                    role: 'user',
                    content: content,
                },
            ],
        });

        if (!response.message?.content) {
            return {
                type: ApiErrorType.INVALID_RESPONSE,
                message: 'No response content received from API',
                details: response
            };
        }

        const text = response.message.content[0].text;
        const correctedText = correctResult(text);
        
        // Validate the response format
        try {
            const parsed = JSON.parse(correctedText) as ApiResponse;
            if (!parsed.words || !Array.isArray(parsed.words)) {
                return {
                    type: ApiErrorType.INVALID_RESPONSE,
                    message: 'Invalid response format from API',
                    details: parsed
                };
            }
        } catch (e) {
            return {
                type: ApiErrorType.JSON_PARSE_ERROR,
                message: 'Failed to parse API response',
                details: e
            };
        }

        return correctedText;
    } catch (error) {
        if (error instanceof Error) {
            if (error.message.includes('network') || error.message.includes('connect')) {
                return {
                    type: ApiErrorType.NETWORK_ERROR,
                    message: error.message,
                    details: error
                };
            }
            return {
                type: ApiErrorType.API_ERROR,
                message: error.message,
                details: error
            };
        }
        return {
            type: ApiErrorType.UNKNOWN_ERROR,
            message: 'An unexpected error occurred',
            details: error
        };
    }
};