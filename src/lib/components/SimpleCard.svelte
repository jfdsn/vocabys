<script lang="ts">
    export let iconName: string;
    export let cardTitle: string;
    export let cardContent: string;
</script>

<div class="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
    <!-- Icon -->
    <div class="flex justify-center">
      <i class={`bx bx-${iconName} bx-sm bx-border-circle border-blue-800 text-blue-800`}></i>
    </div>
  
    <!-- Title -->
    <h2 class="text-xl font-semibold text-center mt-4"> { cardTitle }</h2>
  
    <!-- Content -->
    <p class="mt-4 text-gray-700 text-center">
      { cardContent }
    </p>
</div>