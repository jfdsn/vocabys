<script lang="ts">
    import FlagBtn from "./FlagBtn.svelte";
    
    const buttons = [
        { countryCode: 'us', translate: 'en', label: 'English' },
        { countryCode: 'br', translate: 'pt-br', label: 'Português' },
        { countryCode: 'fr', translate: 'fr', label: 'Français' },
        { countryCode: 'es', translate: 'es', label: 'Español' },
        { countryCode: 'it', translate: 'it', label: 'Italiano'},
        { countryCode: 'kr', translate: 'ko', label: '한국어' },
        { countryCode: 'jp', translate: 'ja', label: '日本語' },
        { countryCode: 'cn', translate: 'cn', label: '中国人'}
    ];
</script>

<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 p-4 w-full max-w-4xl mx-auto">
    {#each buttons as { countryCode, translate, label }}
        <FlagBtn
            countryCode={countryCode}
            translate={translate}
            label={label}
        />
    {/each}
</div>
