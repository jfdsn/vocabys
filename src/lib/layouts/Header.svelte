<script lang='ts'>
    import { onMount } from "svelte";
    
    let isScrolled: boolean = false;
    
    const handleScroll= (): void => {
        isScrolled = window.scrollY > 50;
    };

    onMount(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

</script>

<header class={`fixed w-full top-0 left-0 transition-colors duration-300 p-6 ${isScrolled ? 'bg-gray-900 bg-opacity-90' : 'bg-transparent'}`}>
    <div class="max-w-full mx-auto flex justify-between items-center">
        <div class="text-5xl font-bold text-white">
            <a href="/">Vocabys</a>
        </div>
        <nav>
            <ul class="flex space-x-6 text-lg font-semibold text-white">
                <li><a href="/" class="px-3 py-2 border-b-2 border-transparent hover:border-white hover:text-gray-400">Home</a></li>
                <li><a href="/#about" class="px-3 py-2 border-b-2 border-transparent hover:border-white hover:text-gray-400">About</a></li>
                <li><a href="/#start" class="px-3 py-2 border-b-2 border-transparent hover:border-white hover:text-gray-400">Get Started</a></li>
            </ul>    
        </nav>
        <div class="text-white">
            linguas
        </div>
    </div>
</header>