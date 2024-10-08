<script lang="ts">
    import { onMount } from 'svelte';
    import { learningLangStore } from '../../stores/paramsStore';
	import { useApi } from '$lib/utils/useApi';
    import { correctResult } from '$lib/utils/correctJson'
    import { contentBuilder } from '$lib/utils/contentBuilder';
    import WordsInput from '$lib/components/WordsInput.svelte';

    
    let learningLang: string;
    let message: any = null;
  
    onMount(() => {
        const unsubscribe = learningLangStore.subscribe(value => {
            learningLang = value;
        });

        let content: string = new contentBuilder()
            .setLearningLang(learningLang)
            .setUserLang("pt-br")
            .build()

        useApi(content).then(result => {
            message = JSON.parse(correctResult(result));
        });

        return () => unsubscribe();
    });
</script>

<main>
    <WordsInput />
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