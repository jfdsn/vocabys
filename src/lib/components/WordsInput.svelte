<script lang="ts">
    import { numOfWordsStore, categoryStore } from "../../stores/paramsStore";

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
        {id: 'Family Members', label: 'Membros da Família'}
    ]

    categories.sort((a, b) => a.label.localeCompare(b.label));
</script>

<div class="flex flex-col items-center p-4">
    <div class="mb-4 p-4 bg-indigo-100 rounded-lg shadow">
        <span class="block text-md font-medium text-gray-700">
            Selecione uma categoria:
        </span>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {#each categories as category}
              <label class="block mt-2">
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
    <div class="flex gap-4">
        <div class="mb-4 p-4 bg-indigo-100 rounded-lg shadow">
            <label for="wordNumber" class="block text-md font-medium text-gray-700">
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

        <div class="mb-4 p-4 bg-indigo-100 rounded-lg shadow">
            <p><strong>Número de Palavras:</strong> {$numOfWordsStore}</p>
            <p><strong>Categoria Selecionada:</strong> {$categoryStore}</p>
        </div>
    </div>

</div>