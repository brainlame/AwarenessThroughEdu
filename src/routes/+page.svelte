<script lang="ts">
  import { onMount } from 'svelte';

  let copiedEmail = $state(false);
  let copiedPhone = $state(false);
  let scrollY = $state(0);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      copiedEmail = true;
      setTimeout(() => copiedEmail = false, 2000);
    } else {
      copiedPhone = true;
      setTimeout(() => copiedPhone = false, 2000);
    }
  };

  const scrollToFooter = () => {
    document.getElementById('contact-footer')?.scrollIntoView({ behavior: 'smooth' });
  };

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
      icon: "education"
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

<div class="min-h-screen bg-white">
  <!-- Navbar -->
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
       class:bg-white={scrollY > 50}
       class:shadow-sm={scrollY > 50}
       class:backdrop-blur-xl={scrollY > 50}>
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <a href="/" class="flex items-center gap-3 group">
          <!-- Logo Placeholder -->
          <div class="w-12 h-12 bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl flex items-center justify-center border-2 border-slate-400 group-hover:border-violet-500 transition-all">
            <svg class="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <span class="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            ATK
          </span>
        </a>

        <button
          onclick={scrollToFooter}
          class="relative px-6 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold rounded-xl overflow-hidden group"
        >
          <span class="relative z-10">Contact Us</span>
          <div class="absolute inset-0 bg-gradient-to-r from-violet-700 to-indigo-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-violet-50">
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 -left-48 w-96 h-96 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div class="absolute top-1/3 -right-48 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-32 left-1/3 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
      <h1 class="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
        <span class="block text-slate-900">Awareness Through</span>
        <span class="block bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Education
        </span>
      </h1>

      <p class="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
        Translating reliable medical research into clear, engaging, and accessible visuals.  
      </p>

      <!-- Stats -->
      <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50">
          <div class="text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-2">10K+</div>
          <div class="text-slate-600 font-medium">People Educated</div>
        </div>
        <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50">
          <div class="text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-2">50+</div>
          <div class="text-slate-600 font-medium">Community Partners</div>
        </div>
        <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50">
          <div class="text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-2">100+</div>
          <div class="text-slate-600 font-medium">Educational Resources</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Mission Statement Section -->
  <section id="mission" class="relative py-32 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left: Mission Text -->
        <div>
          <div class="inline-block px-4 py-2 bg-violet-100 rounded-full mb-6">
            <span class="text-sm font-semibold text-violet-700">Our Mission</span>
          </div>

          <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Empowering through
            <span class="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent"> knowledge</span>
          </h2>

          <p class="text-lg text-slate-600 leading-relaxed mb-8">
            At ATK, we are dedicated to....
          </p>
        </div>

        <!-- Right: Image Placeholder -->
        <div class="relative">
          <div class="relative aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl overflow-hidden border-2 border-slate-300 shadow-2xl">
            <!-- Image placeholder content -->
            <div class="absolute inset-0 flex flex-col items-center justify-center text-slate-400">
              <svg class="w-24 h-24 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p class="text-lg font-medium">Image Placeholder</p>
              <p class="text-sm mt-1">800 x 600</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Our Teams Section -->
  <section class="relative py-32 bg-gradient-to-br from-slate-50 to-violet-50">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="inline-block px-4 py-2 bg-violet-100 rounded-full mb-6">
          <span class="text-sm font-semibold text-violet-700">Our Teams</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Meet the people making
          <span class="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent"> impact</span>
        </h2>
        <!-- <p class="text-xl text-slate-600 max-w-2xl mx-auto">
          Dedicated professionals working together to bring healthcare education to everyone
        </p> -->
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each teams as team, index}
          <div class="group relative">
            <!-- Glow effect on hover -->
            <div class="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>

            <!-- Card -->
            <div class="relative bg-white rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 border border-slate-200">
              <!-- Icon -->
              <div class="mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  {#if team.icon === 'education'}
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
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
              <h3 class="text-2xl font-bold text-slate-900 mb-4">
                {team.title}
              </h3>
              <p class="text-slate-600 leading-relaxed">
                {team.description}
              </p>

              <!-- Learn more link -->
              <!-- <button class="mt-6 text-violet-600 font-semibold flex items-center gap-2 group/link">
                Learn more
                <svg class="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button> -->
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer id="contact-footer" class="relative h-[50vh] bg-slate-900 flex items-center overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0">
      <div class="absolute top-1/2 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
    </div>

    <div class="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <!-- Left: Brand and Copyright -->
        <div>
          <div class="flex items-center gap-3 mb-4">
            <!-- Logo Placeholder -->
            <div class="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center border-2 border-slate-600">
              <svg class="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span class="text-2xl font-bold text-white">ATK</span>
          </div>
          <p class="text-slate-400 text-sm">
            © 2024 Awareness Through Knowledge. All rights reserved.
          </p>
        </div>

        <!-- Right: Contact Links -->
        <div class="flex flex-col gap-6">
          <a href="mailto:awareness.atk@gmail.com" class="group flex items-center gap-4 text-slate-300 hover:text-white transition-colors">
            <div class="w-14 h-14 bg-slate-800 group-hover:bg-violet-600 rounded-xl flex items-center justify-center transition-colors shadow-lg">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span class="text-lg font-semibold">awareness.atk@gmail.com</span>
          </a>

          <a href="https://instagram.com/awareness_through_knowledge" target="_blank" rel="noopener noreferrer" class="group flex items-center gap-4 text-slate-300 hover:text-white transition-colors">
            <div class="w-14 h-14 bg-slate-800 group-hover:bg-violet-600 rounded-xl flex items-center justify-center transition-colors shadow-lg">
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
