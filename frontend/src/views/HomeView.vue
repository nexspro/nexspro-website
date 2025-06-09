<template>
  <div class="flex flex-col min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans">
    <!-- HERO SECTION -->
    <section
      class="w-full min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[var(--bg)] relative overflow-hidden"
    >
      <div class="max-w-4xl mx-auto z-10 relative">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
          Welcome to <span class="text-[var(--primary)]">Nexspro</span>
        </h1>
        <p class="text-[var(--text-muted)] text-lg max-w-2xl mx-auto leading-relaxed">
          Welcome to my universe — a digital space where code meets creativity, where the intranet
          and internet collide.<br /><br />
          Here, you'll find the technologies I master, the live moments I share, and a library of
          tutorials and insights to help you grow every day.<br /><br />
          From full-stack development to real-time streaming.
        </p>
        <div class="mt-10">
          <a
            href="#portfolio"
            class="inline-block px-8 py-3 text-sm font-semibold text-white border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Explore the Portfolio
          </a>
        </div>
      </div>
      <div
        class="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[color-mix(in srgb, var(--primary) 10%, transparent)] to-transparent pointer-events-none"
      ></div>
    </section>

    <!-- ABOUT SECTION -->
    <section class="w-full bg-[var(--bg)] text-[var(--text)] py-28 px-6">
      <div class="max-w-3xl mx-auto text-center space-y-10">
        <h2 class="text-4xl font-bold border-b-2 inline-block border-[var(--primary)] pb-1">
          About Me
        </h2>
        <p class="text-[var(--text-muted)] text-lg leading-relaxed">
          Hi, I'm Michael — but online, I go by
          <span class="text-[var(--primary)] font-semibold">Nexspro</span>.<br /><br />
          With over <strong>27 years</strong> immersed in the world of gaming and tech, I've grown
          up solving problems, breaking systems, and rebuilding them better.<br /><br />
          From sleepless nights fixing bugs to unforgettable moments shared through live streams,
          I've turned my passion into purpose.<br /><br />
          Today, I build digital experiences with <strong>Ruby on Rails</strong>,
          <strong>Vue 3</strong>, <strong>Tailwind</strong> and more — and I share everything I
          learn to help others level up their skills too.
        </p>
      </div>
    </section>

    <!-- STREAMING SECTION -->
    <section class="w-full bg-[var(--bg)] text-[var(--text)] py-28 px-6">
      <div class="max-w-4xl mx-auto text-center space-y-10">
        <h2 class="text-4xl font-bold border-b-2 inline-block border-[var(--primary)] pb-1">
          Streaming
        </h2>
        <p class="text-[var(--text-muted)] text-lg leading-relaxed">
          I'm building digital experiences — from full-stack web apps to real-time interactions with
          the world.<br /><br />
          Through <strong>Nexspro</strong>, I don’t just share code — I share connection. Whether
          I'm developing custom platforms or going live to talk, game, and grow with you, everything
          I do serves a single goal:
          <span class="text-[var(--primary)] font-medium">
            building a global community of curiosity, support, and innovation </span
          >.<br /><br />
          In a digital world that never stops evolving, I stand at the intersection of
          <strong>creation and collaboration</strong>. Together, we don't just consume — we build,
          we share, and we rise beyond anything that has ever existed.
        </p>
      </div>
    </section>

    <!-- WORK WITH ME SECTION -->
    <section class="w-full bg-[var(--bg)] text-[var(--text)] py-28 px-6">
      <div class="max-w-4xl mx-auto text-center space-y-10">
        <h2 class="text-4xl font-bold border-b-2 inline-block border-[var(--primary)] pb-1">
          Work With Me
        </h2>
        <p class="text-[var(--text-muted)] text-lg leading-relaxed">
          I don’t just build for myself — I build for others.<br /><br />
          As a <strong>full-stack developer</strong>, I help individuals, creators, and businesses
          bring their ideas to life. From MVPs to production-ready apps, I craft digital tools with
          care, precision, and modern technologies.<br /><br />
          Whether you need a robust <strong>backend</strong>, a blazing-fast
          <strong>frontend</strong>, or a complete <strong>custom platform</strong> — I’m here to
          design, code, and deploy with you.<br /><br />
          <span class="text-[var(--primary)] font-semibold">
            Let’s turn your vision into reality — together.
          </span>
        </p>
        <div>
          <a
            href="#contact"
            class="inline-block px-8 py-3 text-sm font-semibold text-white border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Aucun JS requis ici
</script>
