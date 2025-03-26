<script lang="ts">
    import { userLangStore } from "../../stores/paramsStore";
    import { createEventDispatcher } from 'svelte';
    
    const dispatch = createEventDispatcher();
    
    export let isMobile = false;
    export let onClose = () => {};
    
    let isMenuOpen = false;
    
    const languages = [
        { code: 'pt-br', name: 'Português', flag: 'br' },
        { code: 'en', name: 'English', flag: 'us' },
        { code: 'fr', name: 'Français', flag: 'fr' },
        { code: 'es', name: 'Español', flag: 'es' },
        { code: 'ja', name: '日本語', flag: 'jp' },
        { code: 'ko', name: '한국어', flag: 'kr' }
    ];

    const setLanguage = (langCode: string) => {
        userLangStore.set(langCode);
        dispatch('languageChange', { langCode });
        isMenuOpen = false;
        if (!isMobile) {
            onClose();
        }
    };

    $: currentLanguage = languages.find(lang => lang.code === $userLangStore) || languages[0];

    const toggleMenu = () => {
        if (!isMobile) {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                onClose();
            }
        }
    };
</script>

{#if isMobile}
    <div class="pt-2 border-t border-gray-700">
        <div class="px-3 py-2">
            <span class="block text-sm text-gray-400 mb-2">Select Language</span>
            <div class="grid grid-cols-2 gap-2">
                {#each languages as lang}
                    <button
                        class="flex items-center space-x-2 px-3 py-2 text-white hover:bg-gray-800 rounded"
                        on:click={() => setLanguage(lang.code)}
                    >
                        <img 
                            src={`https://flagcdn.com/16x12/${lang.flag}.png`} 
                            alt={lang.name}
                            class="w-5 h-auto"
                        />
                        <span>{lang.name}</span>
                    </button>
                {/each}
            </div>
        </div>
    </div>
{:else}
    <div class="relative">
        <button 
            class="flex items-center space-x-2 text-white hover:text-gray-400"
            on:click={toggleMenu}
        >
            <img 
                src={`https://flagcdn.com/16x12/${currentLanguage.flag}.png`} 
                alt={currentLanguage.name}
                class="w-5 h-auto"
            />
            <span class="text-lg font-semibold">{currentLanguage.name}</span>
        </button>
        
        {#if isMenuOpen}
            <div class="absolute right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-lg py-2">
                {#each languages as lang}
                    <button
                        class="w-full px-4 py-2 text-left text-white hover:bg-gray-800 flex items-center space-x-2"
                        on:click={() => setLanguage(lang.code)}
                    >
                        <img 
                            src={`https://flagcdn.com/16x12/${lang.flag}.png`} 
                            alt={lang.name}
                            class="w-5 h-auto"
                        />
                        <span>{lang.name}</span>
                    </button>
                {/each}
            </div>
        {/if}
    </div>
{/if} 