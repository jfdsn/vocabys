<script lang="ts">
    import '../global.css';
    import Header from '$lib/layouts/Header.svelte';
    import Footer from '$lib/layouts/Footer.svelte';
    import '../lib/i18n';
    import I18nProvider from "$lib/components/I18nProvider.svelte";
</script>

<I18nProvider>
    <Header />
    <main class="min-h-screen bg-[url('/sun-tornado.svg')] bg-cover bg-no-repeat ">
        <div class="pt-20 pb-20">
            <slot />
        </div>
    </main>
    <Footer />
</I18nProvider>