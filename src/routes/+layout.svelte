<script lang="ts">
  import '../app.css';
</script>

<svelte:head>
  <title>Awareness Through Education</title>
  <meta name="description" content="Empowering Communities Through Healthcare Knowledge" />
</svelte:head>

<div class="min-h-screen bg-black overflow-x-hidden">
  <!-- Navbar -->
  <nav class="fixed top-0 left-0 right-0 z-50 bg-azure shadow-lg transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-20">
        <a href="/" class="flex items-center gap-2 sm:gap-3 group">
          <!-- Logo -->
          <div class="w-16 h-8 sm:w-24 sm:h-12 bg-azure-light rounded-xl sm:rounded-2xl flex items-center justify-center border border-gray-700 group-hover:border-blue-500 group-hover:scale-105 duration-300 transition-all overflow-hidden px-2 sm:px-4">
            <img src="/logo.png" alt="ATK Logo" class="w-full h-full object-contain" />
          </div>
        </a>

        <div class="flex items-center gap-3 sm:gap-6 md:gap-8">
          <a href="/infographics" class="text-sm sm:text-base text-gray-300 hover:text-blue-400 font-semibold transition-colors">
            Infographics
          </a>
          <a href="/#teams" class="text-sm sm:text-base text-gray-300 hover:text-blue-400 font-semibold transition-colors">
            Teams
          </a>
          <a href="/#contact-footer" class="text-sm sm:text-base text-gray-300 hover:text-blue-400 font-semibold transition-colors">
            Contact
          </a>
        </div>
      </div>
    </div>
  </nav>

  <!-- Page content -->
  <slot />

  <!-- Footer -->
  <footer id="contact-footer" class="relative py-12 md:py-0 md:h-72 bg-black flex items-center">
    <!-- Background decoration -->
    <div class="absolute inset-0">
      <div class="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl"></div>
    </div>

    <div class="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center md:items-center gap-8">
        <!-- Left: Brand and Copyright -->
        <div class="text-center md:text-left">
          <div class="flex items-center gap-2 sm:gap-3 mb-4 justify-center md:justify-start">
            <!-- Logo -->
            <div class="w-16 h-8 sm:w-24 sm:h-12 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center border border-gray-700 overflow-hidden px-2 sm:px-4">
              <img src="/logo.png" alt="ATK Logo" class="w-full h-full object-contain" />
            </div>
            <!-- <span class="text-xl sm:text-2xl font-bold text-white">ATK</span> -->
          </div>
          <!-- <p class="text-gray-500 text-xs sm:text-sm">
            © 2024 Awareness Through Knowledge. All rights reserved.
          </p> -->
        </div>

        <!-- Right: Contact Links -->
        <div class="flex flex-col gap-4 sm:gap-6 w-full md:w-auto items-center md:items-start">
          <a href="mailto:awareness.atk@gmail.com" class="group flex items-center gap-3 sm:gap-4 text-gray-400 hover:text-white transition-colors">
            <div class="w-12 h-12 sm:w-14 sm:h-14 bg-gray-900 group-hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors shadow-lg border border-gray-800 flex-shrink-0">
              <svg class="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span class="text-sm sm:text-base md:text-lg font-semibold break-all text-center md:text-left">awareness.atk@gmail.com</span>
          </a>

          <a href="https://instagram.com/theatkorg" target="_blank" rel="noopener noreferrer" class="group flex items-center gap-3 sm:gap-4 text-gray-400 hover:text-white transition-colors">
            <div class="w-12 h-12 sm:w-14 sm:h-14 bg-gray-900 group-hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors shadow-lg border border-gray-800 flex-shrink-0">
              <svg class="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <span class="text-sm sm:text-base md:text-lg font-semibold text-center md:text-left">@awareness_through_knowledge</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</div>
