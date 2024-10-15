<script lang="ts">
    import { messageStore } from '../../stores/paramsStore';
	import { onMount } from 'svelte';

    onMount(() => {
        $messageStore = null;
    })
</script>

<div class="flex justify-center mt-4 text-slate-100">
    {#if !$messageStore}
        <span class="text-xl">Aguardando escolha do usuário</span>
    {:else if $messageStore == "Loading"}
        <span class="text-xl">Carregando...</span>
    {:else if $messageStore == "Error"}
        <span class="text-xl">Oops! Ocorreu algum erro. Tente novamente.</span>
    {:else}
    <table class="min-w-fit table-auto border-collapse text-xl bg-gray-900">
        <thead>
          <tr>
            <th class="border px-4 py-2">Palavra</th>
            <th class="border px-4 py-2">Tradução</th>
            <th class="border px-4 py-2">Pronúncia</th>
          </tr>
        </thead>
        <tbody>
            {#each $messageStore.words as { entry, out, speak }}
                <tr>
                    <td class="border px-4 py-2">{out}</td>
                    <td class="border px-4 py-2">{entry}</td>
                    <td class="border px-4 py-2">{speak}</td>
                </tr>
            {/each}
        </tbody>
      </table>
    {/if}
</div>