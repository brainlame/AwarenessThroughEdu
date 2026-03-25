<script lang="ts">
  const categories = [
    {
      title: "Public Health",
      icon: "health"
    },
    {
      title: "Nutrition & Wellness",
      icon: "nutrition"
    },
    {
      title: "Mental Health",
      icon: "mental"
    }
  ];
</script>

<!-- Hero Section -->
  <section class="relative min-h-[60vh] flex items-center justify-center bg-black pt-16 sm:pt-20 border-b border-gray-800">
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 text-center">
      <!-- <div class="inline-block px-4 py-2 bg-blue-950 border border-blue-800 rounded-full mb-6">
        <span class="text-sm font-semibold text-blue-400">Visual Learning</span>
      </div> -->

      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
        <span class="block text-white">Healthcare</span>
        <span class="block bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 bg-clip-text text-transparent pb-3 sm:pb-5">
          Infographics
        </span>
      </h1>
    </div>
  </section>

  <!-- Categories Section -->
  <section class="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black to-gray-950 border-b border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Browse by
          <span class="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent"> category</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each categories as category}
          <div class="group relative">
            <!-- Glow effect on hover -->
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>

            <!-- Card -->
            <div class="relative bg-gray-900 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 border border-gray-800 cursor-pointer">
              <!-- Icon -->
              <div class="mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-blue-900/50">
                  {#if category.icon === 'health'}
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  {:else if category.icon === 'nutrition'}
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  {:else}
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  {/if}
                </div>
              </div>

              <!-- Content -->
              <h3 class="text-2xl font-bold text-white">
                {category.title}
              </h3>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Infographics Gallery Section -->
  <section class="relative py-12 sm:py-16 md:py-20 bg-gray-950 border-b border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Latest
          <span class="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent"> infographics</span>
        </h2>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each Array(6) as _, i}
          <div class="group cursor-pointer">
            <!-- Image placeholder -->
            <div class="relative aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-2 border-gray-800 shadow-lg shadow-blue-900/20 group-hover:shadow-2xl group-hover:shadow-blue-800/30 transition-all duration-300">
              <div class="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
                <svg class="w-16 h-16 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p class="text-base font-medium">Infographic {i + 1}</p>
              </div>

              <!-- Hover overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 class="text-lg font-bold">Health Topic {i + 1}</h3>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>

      <!-- Load More Button -->
      <!-- <div class="mt-16 text-center">
        <button class="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-900/50 transition-all duration-300 hover:-translate-y-1">
          Load More Infographics
        </button>
      </div> -->
    </div>
  </section>
