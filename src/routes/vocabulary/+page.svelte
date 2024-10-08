<script lang="ts">
    import { onMount } from 'svelte';
    import { learningLangStore, numOfWordsStore, categoryStore } from '../../stores/paramsStore';
	import { useApi } from '$lib/utils/useApi';
    import { correctResult } from '$lib/utils/correctJson'
    import { contentBuilder } from '$lib/utils/contentBuilder';
    import WordsInput from '$lib/components/WordsInput.svelte';

    let message: any = null;

    const callApi = () => {
        let content: string = new contentBuilder()
            .setLearningLang($learningLangStore)
            .setUserLang("pt-br")
            .setCategory($categoryStore)
            .setNumOfWords($numOfWordsStore)
            .build()

        useApi(content).then(result => {
            message = JSON.parse(correctResult(result));
        });
    }
</script>

<main>
    <WordsInput />
    <button on:click={callApi} class="bg-slate-200"> Teste</button>
    {#if message}
        {#each message.words as { entry, translate, pronounce }}
            <div class="text-2xl">
                {entry} - {translate} - {pronounce}
            </div>
        {/each}
    {:else}
        <p>Carregando...</p>
    {/if}
</main>