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
      title: "Healthcare Education",
      description: "Our Healthcare Education team develops comprehensive resources and workshops to promote understanding of preventive care, healthy lifestyle choices, and disease awareness in underserved communities.",
      icon: "education"
    },
    {
      title: "Community Outreach",
      description: "The Community Outreach team builds partnerships with local organizations, schools, and healthcare providers to expand our reach and ensure healthcare awareness reaches those who need it most.",
      icon: "community"
    },
    {
      title: "Research & Content",
      description: "Our Research & Content team creates evidence-based educational materials, infographics, and multimedia content to make complex healthcare information accessible and engaging for all audiences.",
      icon: "research"
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
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div class="relative bg-gradient-to-r from-violet-600 to-indigo-600 w-12 h-12 rounded-2xl flex items-center justify-center">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>
          <span class="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            ATE
          </span>
        </a>

        <button
          onclick={scrollToFooter}
          class="relative px-6 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold rounded-xl overflow-hidden group"
        >
          <span class="relative z-10">Get in Touch</span>
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
      <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-violet-200 mb-8">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
        </span>
        <span class="text-sm font-medium text-slate-700">Empowering Communities Since 2024</span>
      </div>

      <h1 class="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
        <span class="block text-slate-900">Awareness Through</span>
        <span class="block bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Education
        </span>
      </h1>

      <p class="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
        Bridging the healthcare knowledge gap through accessible, evidence-based education for communities worldwide
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button onclick={scrollToFooter} class="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-violet-500/50">
          <span class="relative z-10 flex items-center gap-2">
            Start Learning
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
          <div class="absolute inset-0 bg-gradient-to-r from-violet-700 to-indigo-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>

        <a href="#mission" class="group px-8 py-4 bg-white text-slate-700 font-semibold rounded-2xl border-2 border-slate-200 hover:border-violet-300 transition-all hover:shadow-lg flex items-center gap-2">
          Our Mission
          <svg class="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>

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
            At ATE (Awareness Through Education), we are dedicated to bridging the healthcare knowledge gap by providing accessible, evidence-based education to communities worldwide.
          </p>

          <p class="text-lg text-slate-600 leading-relaxed mb-8">
            We believe that informed individuals make healthier choices, and through our programs, we strive to empower every person with the knowledge they need to live their healthiest life.
          </p>

          <button class="group relative px-8 py-4 bg-slate-900 text-white font-semibold rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-xl">
            <span class="relative z-10 flex items-center gap-2">
              View Our Resources
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>

        <!-- Right: Visual Element -->
        <div class="relative">
          <div class="relative bg-gradient-to-br from-violet-500 to-indigo-600 rounded-3xl p-8 shadow-2xl">
            <div class="absolute inset-0 bg-grid-white/10 rounded-3xl"></div>
            <div class="relative space-y-4">
              <!-- Feature cards -->
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-1">Evidence-Based</h3>
                    <p class="text-violet-100 text-sm">All our content is backed by scientific research and medical experts</p>
                  </div>
                </div>
              </div>

              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-1">Accessible</h3>
                    <p class="text-violet-100 text-sm">Free resources available to everyone, everywhere</p>
                  </div>
                </div>
              </div>

              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-1">Community-Driven</h3>
                    <p class="text-violet-100 text-sm">Built with and for the communities we serve</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Decorative elements -->
          <div class="absolute -top-6 -right-6 w-32 h-32 bg-violet-200 rounded-full blur-2xl opacity-50"></div>
          <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-200 rounded-full blur-2xl opacity-50"></div>
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
        <p class="text-xl text-slate-600 max-w-2xl mx-auto">
          Dedicated professionals working together to bring healthcare education to everyone
        </p>
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

              <!-- Number badge -->
              <div class="absolute top-8 right-8 w-10 h-10 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-full flex items-center justify-center">
                <span class="text-sm font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  0{index + 1}
                </span>
              </div>

              <!-- Content -->
              <h3 class="text-2xl font-bold text-slate-900 mb-4">
                {team.title}
              </h3>
              <p class="text-slate-600 leading-relaxed">
                {team.description}
              </p>

              <!-- Learn more link -->
              <button class="mt-6 text-violet-600 font-semibold flex items-center gap-2 group/link">
                Learn more
                <svg class="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact-footer" class="relative py-32 bg-slate-900 overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Let's work together
        </h2>
        <p class="text-xl text-slate-400 max-w-2xl mx-auto">
          Ready to make a difference? Reach out to us and join our mission to spread healthcare awareness
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
        <!-- Email Card -->
        <div class="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-violet-500/50 transition-all duration-300">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-14 h-14 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div class="text-sm text-slate-400 mb-1">Email us</div>
              <div class="text-lg font-semibold text-white">Send a message</div>
            </div>
          </div>

          <div class="bg-slate-900/50 rounded-xl p-4 mb-4 border border-slate-700">
            <p class="text-slate-300 text-sm break-all">contact@awarenessthoughedu.org</p>
          </div>

          <button
            onclick={() => copyToClipboard('contact@awarenessthoughedu.org', 'email')}
            class="w-full py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            {#if copiedEmail}
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            {:else}
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              Copy Email
            {/if}
          </button>
        </div>

        <!-- Phone Card -->
        <div class="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-indigo-500/50 transition-all duration-300">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <div class="text-sm text-slate-400 mb-1">Call us</div>
              <div class="text-lg font-semibold text-white">Let's talk</div>
            </div>
          </div>

          <div class="bg-slate-900/50 rounded-xl p-4 mb-4 border border-slate-700">
            <p class="text-slate-300 text-sm">(555) 123-4567</p>
          </div>

          <button
            onclick={() => copyToClipboard('(555) 123-4567', 'phone')}
            class="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            {#if copiedPhone}
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            {:else}
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              Copy Number
            {/if}
          </button>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="border-t border-slate-800 pt-12">
        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <!-- Brand -->
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="bg-gradient-to-r from-violet-600 to-indigo-600 w-10 h-10 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span class="text-lg font-bold text-white">ATE</span>
            </div>
            <p class="text-slate-400 text-sm leading-relaxed">
              Empowering communities through accessible healthcare education
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-white font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><a href="#mission" class="text-slate-400 hover:text-violet-400 transition-colors text-sm">Our Mission</a></li>
              <li><a href="#teams" class="text-slate-400 hover:text-violet-400 transition-colors text-sm">Teams</a></li>
              <li><a href="#contact" class="text-slate-400 hover:text-violet-400 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <!-- Social -->
          <div>
            <h3 class="text-white font-semibold mb-4">Connect</h3>
            <div class="flex gap-3">
              <button aria-label="Facebook" class="w-10 h-10 bg-slate-800 hover:bg-violet-600 rounded-lg flex items-center justify-center transition-colors">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button aria-label="Twitter" class="w-10 h-10 bg-slate-800 hover:bg-violet-600 rounded-lg flex items-center justify-center transition-colors">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>
              <button aria-label="YouTube" class="w-10 h-10 bg-slate-800 hover:bg-violet-600 rounded-lg flex items-center justify-center transition-colors">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="text-center pt-8 border-t border-slate-800">
          <p class="text-slate-500 text-sm">
            © 2024 Awareness Through Education LLC. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </section>
</div>
