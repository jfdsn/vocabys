<script lang="ts">
    import { messageStore } from '../../stores/paramsStore';
    import WordsInput from '$lib/components/WordsInput.svelte';
	import { onMount } from 'svelte';

    onMount(() => {
        $messageStore = null;
    })
</script>

<main>
    <WordsInput />
    {#if !$messageStore}
        <span>Aguardando escolha do usuário</span>
    {:else if $messageStore == "Loading"}
        <p>Carregando...</p>
    {:else}
        {#each $messageStore.words as { entry, out, speak }}
            <div class="text-2xl">
                {entry} - {out} - {speak}
            </div>
        {/each}
    {/if}
</main>