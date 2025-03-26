<script lang="ts">
    import { numOfWordsStore, categoryStore } from "../../stores/paramsStore";
    import CallApiBtn from "./CallApiBtn.svelte";

    const categories = [
        {id: 'Food', label: 'Comida'},
        {id: 'Cloth', label: 'Roupa'},
        {id: 'House', label: 'Residência'},
        {id: 'Object', label: 'Objeto'},
        {id: 'Weather', label: 'Clima'},
        {id: 'Work', label: 'Trabalho'},
        {id: 'School', label: 'Escola'},
        {id: 'Nature', label: 'Natureza'},
        {id: 'Animal', label: 'Animal'},
        {id: 'Sentiment', label: 'Sentimento'},
        {id: 'City', label: 'Cidade'},
        {id: 'Furniture', label: 'Móveis'},
        {id: 'Fruit', label: 'Fruta'},
        {id: 'Body', label: 'Parte do corpo'},
        {id: 'Family Members', label: 'Membros da Família'},
        {id: 'Colors', label: 'Cores'},

    ]

    categories.sort((a, b) => a.label.localeCompare(b.label));
</script>

<div class="flex flex-col items-center p-2 sm:p-4 w-full">
    <div class="mb-4 p-3 sm:p-4 bg-indigo-100 rounded-lg shadow w-full">
        <span class="block text-sm sm:text-md font-medium text-gray-700 mb-2">
            Selecione uma categoria:
        </span>
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
            {#each categories as category}
              <label class="block text-sm sm:text-base">
                <input
                  type="radio"
                  name="category"
                  value={category.id}
                  bind:group={$categoryStore}
                  class="accent-gray-900 mr-2"
                />
                {category.label}
              </label>
            {/each}
        </div>
    </div>
    <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full">
        <div class="mb-4 p-3 sm:p-4 bg-indigo-100 rounded-lg shadow w-full sm:w-auto">
            <label for="wordNumber" class="block text-sm sm:text-md font-medium text-gray-700">
                Número de Palavras: {$numOfWordsStore}
            </label>
            <input
            type="range"
            id="wordNumber"
            min="5"
            max="15"
            bind:value={$numOfWordsStore}
            class="mt-2 w-full accent-gray-900"
            />
        </div>

        <div class="flex items-center justify-center mb-4 p-3 sm:p-4 bg-indigo-100 rounded-lg shadow w-full sm:w-auto">
            <CallApiBtn />
        </div>
    </div>
</div>