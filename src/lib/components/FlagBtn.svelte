<script lang="ts">
    import { goto } from "$app/navigation";
    import { learningLangStore } from "../../stores/paramsStore";
    
    export let countryCode: string;
    export let translate : string;
    export let label: string;

    const changeLanguage = (translate: string) => {
        learningLangStore.set(translate);
    };

    const handleClick = () => {
        changeLanguage(translate);
        goto(`/vocabulary`);
    };
</script>
  
<button 
    on:click={handleClick} 
    class="flex items-center h-10 space-x-2 px-3 py-2 bg-gray-900 rounded shadow-lg transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-xl hover:bg-gray-800"
>
    <img src={`https://flagcdn.com/16x12/${countryCode}.png`} alt={countryCode} class="w-5 h-auto" />
    <span class="text-white">{label}</span>
</button>
