<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage
        :transition="{
          name: 'page',
          mode: 'out-in',
        }"
      />
    </NuxtLayout>
  </div>
</template>

<script setup>
// Add loading state for smoother transitions
const isLoading = ref(false);

// Set HTML lang attribute based on current locale
const { locale } = useI18n();

useHead({
  htmlAttrs: {
    lang: locale.value,
  },
});

// Watch for locale changes to update HTML lang attribute
watch(locale, (newLocale) => {
  useHead({
    htmlAttrs: {
      lang: newLocale,
    },
  });
});

// Handle route change loading
const router = useRouter();

router.beforeEach((to, from, next) => {
  isLoading.value = true;
  next();
});

router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 100);
});
</script>

<style>
* {
  /* Corporate Identity: Colors */
  --tmc-logo-cyan-bright: #0cd1ca; /* This is the bright cyan color of the TMC logo. It is very bright and is mostly used for accents */
  --tmc-logo-purple: #971fc9; /* This is the purple color of the TMC logo. It is usualy not used as it is not looking so good */

  --tmc-cyan: #22c0c8; /* This is the normal cyan color. It is not directly a color of the logo, but a color in the gradient between the bright cyan and purple. It is better to be used for UI */
  --tmc-normal-blue: #408bc6; /* This is a blue color, which is not directly part of the logo, but is used in the gradient between cyan and purple. It is also better to be used for UI */
  --tmc-blue-purple: #596bc4; /* This is a blue-purple color, which is not directly part of the logo, but is used in the gradient between cyan and purple. It is also better to be used for UI */
  --tmc-purple: #665bc4; /* This is a purple color, which is not directly part of the logo, but is used in the gradient between cyan and purple. It is also better to be used for UI */

  /* Corporate Identity: Fonts (utilising nuxt/fonts) */
  --tmc-font-heading:
    "Poppins", sans-serif; /* This is the font used for headings */
  --tmc-font-body:
    "Open Sans", sans-serif; /* This is the font used for body text */
}

/* Global Reset and Base Styles */
html,
body {
  margin: 0;
  padding: 0;
  font-family: var(--tmc-font-body);
  scroll-behavior: smooth;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--tmc-font-heading);
  margin: 0;
  line-height: 1.2;
}

p {
  margin: 0;
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}

button {
  border: none;
  background: none;
  cursor: pointer;
  font-family: inherit;
}

ul {
  margin: 0;
  padding: 0;
}

/* Enhanced Global Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(1.02);
}

/* Smooth transition for navigation elements */
.router-link-active,
.router-link-exact-active {
  transition: color 0.3s ease;
}

/* Loading animation overlay */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(34, 192, 200, 0.1);
  backdrop-filter: blur(2px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.loading-overlay.active {
  opacity: 1;
  visibility: visible;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(34, 192, 200, 0.3);
  border-top: 3px solid var(--tmc-cyan);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Prevent layout shift during transitions */
.main-content {
  min-height: calc(100vh - 200px); /* Adjust based on header/footer height */
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: var(--tmc-cyan);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--tmc-normal-blue);
}
</style>
