<script lang="ts">
    import { learningLangStore, numOfWordsStore, categoryStore, messageStore, userLangStore } from '../../stores/paramsStore';
	import { useApi } from '$lib/utils/useApi';
    import { contentBuilder } from '$lib/utils/contentBuilder';
    import { getErrorMessage } from '$lib/utils/errors';

    let isLoading = false;

    const callApi = async () => {
        isLoading = true;
        $messageStore = "Carregando...";

        try {
            let content: string = new contentBuilder()
                .setLearningLang($learningLangStore)
                .setUserLang($userLangStore)
                .setCategory($categoryStore)
                .setNumOfWords($numOfWordsStore)
                .build();

            const result = await useApi(content);
            
            if (typeof result === 'string') {
                const parsedResult = JSON.parse(result);
                $messageStore = parsedResult;
            } else {
                $messageStore = getErrorMessage(result);
                console.error('API Error:', result);
            }
        } catch (e) {
            $messageStore = "Erro ao processar a resposta";
            console.error('Unexpected error:', e);
        } finally {
            isLoading = false;
        }
    }
</script>

<button
    on:click={callApi} 
    class="flex items-center h-10 space-x-2 px-3 py-2 bg-gray-900 rounded hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
    disabled={isLoading}
>
    {#if isLoading}
        <span class="text-slate-100">Gerando...</span>
    {:else}
        <span class="text-slate-100">Gerar Palavras</span>
    {/if}
</button>