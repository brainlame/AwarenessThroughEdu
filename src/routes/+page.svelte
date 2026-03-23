<script lang="ts">
  import { onMount } from 'svelte';

  let scrollY = $state(0);

  onMount(() => {
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

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

<div class="min-h-screen bg-black overflow-x-hidden">
  <!-- Navbar -->
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
       class:bg-black={scrollY > 50}
       class:shadow-lg={scrollY > 50}
       class:backdrop-blur-xl={scrollY > 50}>
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <a href="/" class="flex items-center gap-3 group">
          <!-- Logo Placeholder -->
          <div class="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border-2 border-gray-700 group-hover:border-blue-500 transition-all">
            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <span class="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
            ATK
          </span>
        </a>

        <div class="flex items-center gap-8">
          <a href="/infographics" class="text-gray-300 hover:text-blue-400 font-semibold transition-colors">
            Infographics
          </a>
          <a href="/#teams" class="text-gray-300 hover:text-blue-400 font-semibold transition-colors">
            Teams
          </a>
          <a
            href="/#contact-footer"
            class="relative px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-xl overflow-hidden group"
          >
            <span class="relative z-10">Contact</span>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
        </div>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="relative min-h-screen flex items-center bg-black border-b border-gray-800 overflow-hidden pt-20">
    <!-- Circle positioned absolutely, starting from middle -->
    <div class="absolute left-1/2 top-1/2 -translate-y-1/2 w-[55vw] aspect-square max-h-[calc(100vh-10rem)] mt-8 z-0 pointer-events-none">
      <!-- Circle background -->
      <div class="absolute inset-0 rounded-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 shadow-2xl shadow-blue-900/50 overflow-hidden border-2 border-blue-800/50 scale-x-[1.8] origin-left">
        <!-- Animated background elements inside circle -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full mix-blend-overlay filter blur-2xl animate-blob"></div>
          <div class="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-400/20 rounded-full mix-blend-overlay filter blur-2xl animate-blob animation-delay-2000"></div>
        </div>
      </div>
    </div>

    <!-- Text Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
      <div class="max-w-2xl py-20">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span class="block text-white">Awareness Through</span>
          <span class="block bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 bg-clip-text text-transparent pb-3">
            Knowledge
          </span>
        </h1>

        <p class="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed font-light max-w-xl">
          Translating reliable medical research into clear, engaging, and accessible visuals.
        </p>
      </div>
    </div>

    <!-- Button positioned absolutely with higher z-index -->
    <a
      href="/infographics"
      class="group absolute left-[calc(50%+15rem)] top-1/2 -translate-y-1/2 mt-8 z-20 px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-2xl shadow-lg shadow-blue-900/50 hover:shadow-2xl hover:shadow-blue-800/50 transition-all duration-300 hover:scale-105"
    >
      <span class="relative z-10">View Infographics</span>
      <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </a>
  </section>

  <!-- Mission Statement Section -->
  <section id="mission" class="relative py-32 bg-gradient-to-b from-black to-gray-950 border-b border-gray-800">
    <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
      <h2 class="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
        Our
        <span class="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent"> Mission</span>
      </h2>

      <p class="text-xl text-gray-300 leading-relaxed mb-8">
        At ATK (Awareness Through Knowledge), we are dedicated to bridging the healthcare knowledge gap by providing accessible, evidence-based education to communities worldwide.
      </p>

      <p class="text-xl text-gray-300 leading-relaxed">
        We believe that informed individuals make healthier choices, and through our programs, we strive to empower every person with the knowledge they need to live their healthiest life.
      </p>
    </div>
  </section>

  <!-- Our Teams Section -->
  <section id="teams" class="relative py-32 bg-gray-950 border-b border-gray-800">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="inline-block px-4 py-2 bg-blue-950 border border-blue-800 rounded-full mb-6">
          <span class="text-sm font-semibold text-blue-400">Our Teams</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Meet the people making
          <span class="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent"> impact</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each teams as team}
          <div class="group relative">
            <!-- Glow effect on hover -->
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>

            <!-- Card -->
            <div class="relative bg-gray-900 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 border border-gray-800">
              <!-- Icon -->
              <div class="mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-blue-900/50">
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

  <!-- Footer -->
  <footer id="contact-footer" class="relative h-72 bg-black flex items-center">
    <!-- Background decoration -->
    <div class="absolute inset-0">
      <div class="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl"></div>
    </div>

    <div class="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <!-- Left: Brand and Copyright -->
        <div>
          <div class="flex items-center gap-3 mb-4">
            <!-- Logo Placeholder -->
            <div class="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border-2 border-gray-700">
              <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span class="text-2xl font-bold text-white">ATK</span>
          </div>
          <p class="text-gray-500 text-sm">
            © 2024 Awareness Through Knowledge. All rights reserved.
          </p>
        </div>

        <!-- Right: Contact Links -->
        <div class="flex flex-col gap-6">
          <a href="mailto:awareness.atk@gmail.com" class="group flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
            <div class="w-14 h-14 bg-gray-900 group-hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors shadow-lg border border-gray-800">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span class="text-lg font-semibold">awareness.atk@gmail.com</span>
          </a>

          <a href="https://instagram.com/awareness_through_knowledge" target="_blank" rel="noopener noreferrer" class="group flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
            <div class="w-14 h-14 bg-gray-900 group-hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors shadow-lg border border-gray-800">
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <span class="text-lg font-semibold">@awareness_through_knowledge</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</div>
