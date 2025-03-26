<script lang="ts">
    import { messageStore } from '../../stores/paramsStore';
	import { onMount } from 'svelte';
    import type { MessageStore, Word, MessageStoreType } from '../../stores/paramsStore';
    import { _ } from 'svelte-i18n';
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

<div class="flex justify-center mt-4 text-slate-100 w-full px-2 sm:px-4">
    {#if !$messageStore}
        <span class="text-lg sm:text-xl">{$_('vocabulary.waiting')}</span>
    {:else if isLoading}
        <span class="text-lg sm:text-xl">{$_('vocabulary.loading')}</span>
    {:else if isError}
        <span class="text-lg sm:text-xl">{$messageStore}</span>
    {:else if isValidResponse && typedMessageStore}
        <div class="w-full overflow-x-auto">
            <table class="w-full table-auto border-collapse text-base sm:text-xl bg-gray-900">
                <thead>
                    <tr>
                        <th class="border px-2 sm:px-4 py-2 text-left">{$_('vocabulary.word')}</th>
                        <th class="border px-2 sm:px-4 py-2 text-left">{$_('vocabulary.translation')}</th>
                        <th class="border px-2 sm:px-4 py-2 text-left">{$_('vocabulary.pronunciation')}</th>
                    </tr>
                </thead>
                <tbody>
                    {#each typedMessageStore.words as { entry, out, speak }}
                        <tr>
                            <td class="border px-2 sm:px-4 py-2">{out}</td>
                            <td class="border px-2 sm:px-4 py-2">{entry}</td>
                            <td class="border px-2 sm:px-4 py-2">{speak}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
        {:else}
            <span class="text-lg sm:text-xl">{$_('vocabulary.error')}</span>
    {/if}
</div>