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

<div class="flex flex-wrap space-x-3 p-4">
    {#each buttons as { countryCode, translate, label }}
        <FlagBtn
            countryCode={countryCode}
            translate={translate}
            label={label}
        />
    {/each}
</div>
