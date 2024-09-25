<script lang="ts">
    import { goto } from "$app/navigation";
    import { translateStore } from "../../stores/translateStore";
    
    export let countryCode: string;
    export let translate : string;
    export let label: string;

    const changeLanguage = (translate: string) => {
        translateStore.set(translate);
    };

    const handleClick = () => {
        changeLanguage(translate);
        goto(`/vocabulary`);
    };
</script>
  
<button on:click={handleClick} class="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800">
    <img src={`https://flagcdn.com/16x12/${countryCode}.png`} alt={countryCode} class="w-5 h-auto" />
    <span>{label}</span>
</button>