<script>
    import '../global.css';
    import Header from '$lib/layouts/Header.svelte';
    import Footer from '$lib/layouts/Footer.svelte';
</script>

<Header />
<main class="min-h-screen bg-[url('/sun-tornado.svg')] bg-cover bg-no-repeat ">
    <div class="pt-20 pb-20">
        <slot />
    </div>
</main>
<Footer />