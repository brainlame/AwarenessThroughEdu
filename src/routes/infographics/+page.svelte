<script lang="ts">
  import { slide } from 'svelte/transition';
  import SleepImage from '$lib/Sleep_Is_Not_Optional.png';
  import AllergiesImage from '$lib/Allergies.png';
  import Autism from '$lib/autism.png';
  import AutoimmuneDiseases from '$lib/autoimmune_diseases.png';

  const infographics = [
    {
      title: "Sleep Deprivation",
      image: SleepImage
    },
    {
      title: "Allergies",
      image: AllergiesImage
    },
    {
      title: "Autism",
      image: Autism
    },
    {
      title: "Autoimmune Diseases",
      image: AutoimmuneDiseases
    }
  ];

  let expandedInfographic: number | null = null;

  function toggleInfographic(index: number) {
    expandedInfographic = expandedInfographic === index ? null : index;
  }
</script>

<!-- Hero Section -->
  <section class="relative min-h-[60vh] flex items-center justify-center bg-black pt-16 sm:pt-20 border-b border-gray-800">
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 text-center">
      <!-- <div class="inline-block px-4 py-2 bg-blue-950 border border-blue-800 rounded-full mb-6">
        <span class="text-sm font-semibold text-blue-400">Visual Learning</span>
      </div> -->

      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
        <span class="block text-white">Healthcare</span>
        <span class="block bg-azure-light bg-clip-text text-transparent pb-3 sm:pb-5">
          Infographics
        </span>
      </h1>
    </div>
  </section>

  <!-- Infographics Grid Section -->
  <section class="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black to-gray-950">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each infographics as infographic, i}
          <div class="border border-gray-800 rounded-xl overflow-hidden bg-gray-900">
            <!-- Title bar - clickable -->
            <button
              class="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-800/50 transition-colors duration-200"
              on:click={() => toggleInfographic(i)}
              aria-expanded={expandedInfographic === i}
            >
              <h3 class="text-lg font-bold text-white text-left">
                {infographic.title}
              </h3>
              <svg
                class="w-6 h-6 text-azure-light transition-transform duration-300 flex-shrink-0 {expandedInfographic === i ? 'rotate-180' : ''}"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Expandable content -->
            {#if expandedInfographic === i}
              <div transition:slide={{ duration: 300 }} class="border-t border-gray-800">
                <div class="p-4">
                  <!-- Infographic image -->
                  <div class="relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                    <img
                      src={infographic.image}
                      alt={infographic.title}
                      class="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </section>
