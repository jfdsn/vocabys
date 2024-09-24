<script>
    import '../global.css';
    import Header from '$lib/layouts/Header.svelte';
</script>

<Header />
<main class="min-h-screen bg-slate-600 ">
    <div class="pt-20 text-zinc-50">
        <slot />
    </div>
</main>