<script lang="ts">
    import { onMount } from 'svelte';
    import { translateStore } from '../../stores/translateStore';

    let translate: string;

    onMount(() => {
        const unsubscribe = translateStore.subscribe(value => {
            translate = value;
        });

        return () => unsubscribe();
    });
</script>

<main>
    <p class="text-2xl">OI, VOCE ESTA NA PAGINA VACABULARY: {translate}</p>
</main>