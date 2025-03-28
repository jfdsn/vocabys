<script lang="ts">
    import { numOfWordsStore, categoryStore } from "../../stores/paramsStore";
    import CallApiBtn from "./CallApiBtn.svelte";
    import { _ } from 'svelte-i18n';

    $: categories = [
        {id: 'Food', label: $_('vocabulary.categories.food')},
        {id: 'Cloth', label: $_('vocabulary.categories.clothes')},
        {id: 'House', label: $_('vocabulary.categories.house')},
        {id: 'Object', label: $_('vocabulary.categories.objects')},
        {id: 'Weather', label: $_('vocabulary.categories.weather')},
        {id: 'Work', label: $_('vocabulary.categories.work')},
        {id: 'School', label: $_('vocabulary.categories.school')},
        {id: 'Nature', label: $_('vocabulary.categories.nature')},
        {id: 'Animal', label: $_('vocabulary.categories.animals')},
        {id: 'Sentiment', label: $_('vocabulary.categories.sentiments')},
        {id: 'City', label: $_('vocabulary.categories.city')},
        {id: 'Furniture', label: $_('vocabulary.categories.furniture')},
        {id: 'Fruit', label: $_('vocabulary.categories.fruit')},
        {id: 'Body', label: $_('vocabulary.categories.body')},
        {id: 'Family Members', label: $_('vocabulary.categories.family')},
        {id: 'Colors', label: $_('vocabulary.categories.colors')},
        {id: 'Sports', label: $_('vocabulary.categories.sports')},
        {id: 'Health', label: $_('vocabulary.categories.health')},

    ]

    $: sortedCategories = [...categories].sort((a, b) => a.label.localeCompare(b.label));

    let customCategory = '';
</script>

<div class="flex flex-col items-center p-2 sm:p-4 w-full">
    <div class="mb-4 p-3 sm:p-4 bg-indigo-100 rounded-lg shadow w-full">
        <span class="block text-sm sm:text-md font-medium text-gray-700 mb-2">
            {$_('vocabulary.title')}
        </span>
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
            {#each sortedCategories as category}
              <label class="block text-sm sm:text-base">
                <input
                  type="radio"
                  name="category"
                  value={category.id}
                  bind:group={$categoryStore}
                  on:click={() => customCategory = ""}
                  class="accent-gray-900 mr-2"
                />
                {category.label}
              </label>
            {/each}
            <div class="col-span-2 md:col-span-1">
                <label class="block text-sm sm:text-base">
                    <input
                    type="radio"
                    name="category"
                    value="Custom"
                    bind:group={customCategory}
                    on:click={() => $categoryStore = ""}
                    class="accent-gray-900"
                    />
                    {$_('vocabulary.customCategory')}
                </label>
                {#if customCategory === 'Custom'}
                    <input type="text" placeholder={$_('vocabulary.customCategoryPlaceholder')} bind:value={$categoryStore} class="p-1 mt-2 w-full accent-gray-900" style="display: block;"/>
                {/if}
            </div>
        </div>
    </div>
    <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-fit">
        <div class="mb-4 p-3 sm:p-4 bg-indigo-100 rounded-lg shadow w-full sm:w-auto">
            <label for="wordNumber" class="block text-sm sm:text-md font-medium text-gray-700">
                {$_('vocabulary.wordNumber')} {$numOfWordsStore}
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