<script lang="ts">
    import { onMount } from 'svelte';
    import { initI18n } from '../i18n';
    import { locale } from 'svelte-i18n';

    let isInitialized = false;

    onMount(async () => {
        await initI18n();
        isInitialized = true;
    });
</script>

{#if isInitialized}
    <slot />
{:else}
    <div class="fixed inset-0 bg-gray-900 flex items-center justify-center">
        <div class="text-white text-xl">Loading...</div>
    </div>
{/if} 