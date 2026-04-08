<script lang="ts">
  const teams = [
    {
      title: "Creation Team",
      description: "The Creation Team specializes in transforming complex medical data into visually engaging and intuitive infographics. By prioritizing both aesthetic quality and clarity, they ensure that vital health information is easily understood by a diverse audience.",
      icon: "palette"
    },
    {
      title: "Research Team",
      description: "Our Research Team serves as the base of our foundation. They consistently review and study complex topics to ensure accuracy in our work. By simplifying this information, they provide you with clear, easy-to-understand information.",
      icon: "research"
    },
    {
      title: "Media Team",
      description: "The Media Team oversees all media and communications. They work closely with management to promote our mission and build genuine connections with the community. They amplify our voice to ensure that our message reaches every person we can!",
      icon: "community"
    }
  ];
</script>

<!-- Hero Section -->
  <section class="relative min-h-screen flex items-center bg-black border-b border-gray-800 overflow-hidden pt-20">
    <!-- Circle positioned absolutely, starting from 1/3 mark - hidden on mobile -->
    <div class="hidden md:block absolute left-[50%] top-1/2 -translate-y-1/2 w-[55vw] aspect-square max-h-[calc(100vh-10rem)] mt-8 z-0 pointer-events-none">
      <!-- Circle background -->
      <div class="absolute inset-0 rounded-full bg-azure shadow-2xl shadow-blue-900/50 overflow-hidden scale-x-[2.2] origin-left">
        <!-- Animated background elements inside circle -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full mix-blend-overlay filter blur-2xl animate-blob"></div>
          <div class="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-400/20 rounded-full mix-blend-overlay filter blur-2xl animate-blob animation-delay-2000"></div>
        </div>
      </div>
    </div>

    <!-- Text Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="max-w-2xl py-12 sm:py-16 md:py-20 text-center md:text-left mx-auto md:mx-0">
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-normal">
          <span class="block text-white leading-normal">AWARENESS THROUGH KNOWLEDGE</span>
        </h1>

        <p class="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-12 leading-relaxed font-light max-w-xl mx-auto md:mx-0">
          Translating reliable medical research into clear, engaging, and accessible visuals.
        </p>

        <!-- Mobile rounded rectangular box with button -->
        <div class="md:hidden flex justify-center mt-16">
          <div class="relative px-36 py-24 bg-azure rounded-3xl shadow-2xl shadow-azure/50">
            <!-- Animated background elements -->
            <div class="absolute inset-0 overflow-hidden rounded-3xl">
              <div class="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full mix-blend-overlay filter blur-2xl animate-blob"></div>
              <div class="absolute top-1/2 right-1/4 w-32 h-32 bg-blue-400/20 rounded-full mix-blend-overlay filter blur-2xl animate-blob animation-delay-2000"></div>
            </div>

            <!-- Button -->
            <a
              href="/infographics"
              class="relative group px-8 py-4 bg-azure-light text-black font-bold text-lg rounded-2xl shadow-lg shadow-azure/50 hover:shadow-2xl hover:shadow-azure/50 transition-all duration-300 hover:scale-105 inline-block"
            >
              <span class="relative z-10">View Infographics</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Button positioned absolutely with higher z-index - hidden on mobile -->
    <a
      href="/infographics"
      class="hidden md:block group absolute left-[calc(50%+15rem)] top-1/2 -translate-y-1/2 mt-8 z-20 px-8 py-4 bg-azure-light text-black font-bold text-lg rounded-2xl shadow-lg shadow-azure/50 hover:shadow-2xl hover:shadow-azure/50 transition-all duration-300 hover:scale-105"
    >
      <span class="relative z-10">View Infographics</span>
      <div class="absolute inset-0 bg-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </a>
  </section>

  <!-- Mission Statement Section -->
  <section id="mission" class="relative py-16 sm:py-24 md:py-32 bg-gradient-to-b from-black to-gray-950 border-b border-gray-800">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight">
        Our
        <span class="bg-azure-light bg-clip-text text-transparent"> Mission</span>
      </h2>

      <p class="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
        At ATK (Awareness Through Knowledge), we are dedicated to bridging the healthcare knowledge gap by providing accessible, evidence-based education to communities worldwide.
      </p>

    </div>
  </section>

  <!-- Our Teams Section -->
  <section id="teams" class="relative py-16 sm:py-24 md:py-32 bg-gray-950 border-b border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
          Meet the 
          <span class="bg-azure-light bg-clip-text text-transparent">Teams</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each teams as team}
          <div class="group relative">
            <!-- Card -->
            <div class="relative bg-gray-900 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 border border-gray-800">
              <!-- Icon -->
              <div class="mb-6">
                <div class="w-16 h-16 bg-azure rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-azure/50">
                  {#if team.icon === 'palette'}
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  {:else if team.icon === 'community'}
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  {:else}
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  {/if}
                </div>
              </div>

              <!-- Content -->
              <h3 class="text-2xl font-bold text-white mb-4">
                {team.title}
              </h3>
              <p class="text-gray-400 leading-relaxed">
                {team.description}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>