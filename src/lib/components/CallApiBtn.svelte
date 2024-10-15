<script lang="ts">
    import { learningLangStore, numOfWordsStore, categoryStore, messageStore } from '../../stores/paramsStore';
	import { useApi } from '$lib/utils/useApi';
    import { correctResult } from '$lib/utils/correctJson'
    import { contentBuilder } from '$lib/utils/contentBuilder';

    const callApi = () => {
        $messageStore = "Loading";

        let content: string = new contentBuilder()
            .setLearningLang($learningLangStore)
            .setUserLang("pt-br")
            .setCategory($categoryStore)
            .setNumOfWords($numOfWordsStore)
            .build()

        useApi(content).then(result => {
            try {
                $messageStore = JSON.parse(correctResult(result));
            }catch(e) {
                $messageStore = "Error"
                console.log(e);
            }
        });
    }
</script>

<button
    on:click={callApi} 
    class="flex items-center h-10 space-x-2 px-3 py-2 bg-gray-900 rounded hover:bg-gray-800"
    >
    <span class="text-slate-100">Gerar Palavras</span>
</button>