<script lang="ts">
    import { onMount } from 'svelte';
    import { translateStore } from '../../stores/translateStore';
	import { useApi } from '$lib/utils/useApi';
    import { correctResult } from '$lib/utils/correctJson';
    import WordsInput from '$lib/components/WordsInput.svelte';
    
    let translateLang: string;
    let message: any = null;
    

    onMount(() => {
        const unsubscribe = translateStore.subscribe(value => {
            translateLang = value;
        });

        useApi().then(result => {
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
                {entry} {translate} {pronounce}
            </div>
        {/each}
    {:else}
        <p>Carregando...</p>
    {/if}
</main>