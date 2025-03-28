<script lang='ts'>
    import { onMount } from "svelte";
    import LanguageSelector from "../components/LanguageSelector.svelte";
    import { _, locale } from 'svelte-i18n';
    
    let isScrolled: boolean = false;
    let isMenuOpen: boolean = false;
    
    const handleScroll = (): void => {
        isScrolled = window.scrollY > 50;
    };

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
    };

    const handleLanguageChange = (event: CustomEvent) => {
        isMenuOpen = false;
    };

    onMount(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });
</script>

<header class={`fixed w-full top-0 left-0 transition-colors duration-300 p-4 sm:p-6 z-50 ${isScrolled ? 'bg-gray-900 bg-opacity-90' : 'bg-transparent'}`}>
    <div class="max-w-full mx-auto flex justify-between items-center">
        <div class="text-3xl sm:text-5xl font-bold text-white">
            <a href="/">Vocabys</a>
        </div>
        
        <!-- Desktop navigation -->
        <nav class="hidden md:flex items-center space-x-6">
            <ul class="flex space-x-6 text-lg font-semibold text-white">
                <li><a href="/" class="px-3 py-2 border-b-2 border-transparent hover:border-white hover:text-gray-400">{$_('nav.home') || 'Home'}</a></li>
                <li><a href="/#about" class="px-3 py-2 border-b-2 border-transparent hover:border-white hover:text-gray-400">{$_('nav.about') || 'About'}</a></li>
                <li><a href="/#start" class="px-3 py-2 border-b-2 border-transparent hover:border-white hover:text-gray-400">{$_('nav.getStarted') || 'Get Started'}</a></li>
            </ul>

            <!-- Desktop language selector -->
            <LanguageSelector 
                isMobile={false}
                onClose={() => {}}
                on:languageChange={handleLanguageChange}
            />
        </nav>

        <!-- Mobile menu button -->
        <button 
            class="md:hidden text-white p-2"
            on:click={toggleMenu}
            aria-label="Toggle menu"
        >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {#if isMenuOpen}
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                {:else}
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                {/if}
            </svg>
        </button>
    </div>

    <!-- Mobile navigation -->
    {#if isMenuOpen}
        <nav class="absolute top-full left-0 w-full bg-gray-900 bg-opacity-95 md:hidden">
            <ul class="flex flex-col p-4 space-y-4 text-lg font-semibold text-white">
                <li><a href="/" class="block px-3 py-2 hover:text-gray-400" on:click={() => isMenuOpen = false}>{$_('nav.home') || 'Home'}</a></li>
                <li><a href="/#about" class="block px-3 py-2 hover:text-gray-400" on:click={() => isMenuOpen = false}>{$_('nav.about') || 'About'}</a></li>
                <li><a href="/#start" class="block px-3 py-2 hover:text-gray-400" on:click={() => isMenuOpen = false}>{$_('nav.getStarted') || 'Get Started'}</a></li>
                
                <!-- Mobile language selector -->
                <li>
                    <LanguageSelector 
                        isMobile={true}
                        onClose={() => {}}
                        on:languageChange={handleLanguageChange}
                    />
                </li>
            </ul>    
        </nav>
    {/if}
</header>