<script lang="ts">
    import { messageStore } from '../../stores/paramsStore';
	import { onMount } from 'svelte';
    import type { MessageStore, Word, MessageStoreType } from '../../stores/paramsStore';

    onMount(() => {
        $messageStore = null;
    });

    $: isError = typeof $messageStore === 'string' && 
        ($messageStore === "Error" || 
         $messageStore === "Erro ao processar a resposta" ||
         ($messageStore as string).indexOf("Erro") > -1);

    $: isLoading = $messageStore === "Carregando...";

    $: isValidResponse = $messageStore && 
        typeof $messageStore === 'object' && 
        'words' in $messageStore && 
        Array.isArray(($messageStore as MessageStore).words);

    $: typedMessageStore = isValidResponse ? ($messageStore as MessageStore) : null;
</script>

<div class="flex justify-center mt-4 text-slate-100">
    {#if !$messageStore}
        <span class="text-xl">Aguardando escolha do usuário</span>
    {:else if isLoading}
        <span class="text-xl">Carregando...</span>
    {:else if isError}
        <span class="text-xl">{$messageStore}</span>
    {:else if isValidResponse && typedMessageStore}
        <table class="min-w-fit table-auto border-collapse text-xl bg-gray-900">
            <thead>
                <tr>
                    <th class="border px-4 py-2">Palavra</th>
                    <th class="border px-4 py-2">Tradução</th>
                    <th class="border px-4 py-2">Pronúncia</th>
                </tr>
            </thead>
            <tbody>
                {#each typedMessageStore.words as { entry, out, speak }}
                    <tr>
                        <td class="border px-4 py-2">{out}</td>
                        <td class="border px-4 py-2">{entry}</td>
                        <td class="border px-4 py-2">{speak}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {:else}
        <span class="text-xl">Formato de resposta inválido</span>
    {/if}
</div>