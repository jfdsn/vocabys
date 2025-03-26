export enum ApiErrorType {
    NETWORK_ERROR = 'NETWORK_ERROR',
    INVALID_RESPONSE = 'INVALID_RESPONSE',
    JSON_PARSE_ERROR = 'JSON_PARSE_ERROR',
    API_ERROR = 'API_ERROR',
    UNKNOWN_ERROR = 'UNKNOWN_ERROR'
}

export interface ApiError {
    type: ApiErrorType;
    message: string;
    details?: any;
}

export const getErrorMessage = (error: ApiError): string => {
    switch (error.type) {
        case ApiErrorType.NETWORK_ERROR:
            return 'Erro de conexão. Verifique sua internet e tente novamente.';
        case ApiErrorType.INVALID_RESPONSE:
            return 'Resposta inválida do servidor. Tente novamente.';
        case ApiErrorType.JSON_PARSE_ERROR:
            return 'Erro ao processar a resposta. Tente novamente.';
        case ApiErrorType.API_ERROR:
            return 'Erro no serviço. Tente novamente em alguns instantes.';
        case ApiErrorType.UNKNOWN_ERROR:
            return 'Ocorreu um erro inesperado. Tente novamente.';
        default:
            return 'Erro desconhecido. Tente novamente.';
    }
} 