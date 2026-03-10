// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxtjs/i18n",
    "@nuxt/content",
    "@pinia/nuxt",
  ],

  // App Configuration
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  // i18n Configuration
  i18n: {
    locales: [
      {
        code: "de",
        language: "de-DE",
        name: "Deutsch",
        files: ["de.json", "navigation/de.json"],
      },
      {
        code: "en",
        language: "en-US",
        name: "English",
        files: ["en.json", "navigation/en.json"],
      },
    ],
    defaultLocale: "de",
    langDir: "locales", // Directory for language files (@Copilot please leave this line as is)
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "no prefix",
      fallbackLocale: "de",
      alwaysRedirect: false,
    },
  },
  nitro: {
    // Production proxy rules
    routeRules: {
      "/api/**": {
        // Dynamically set proxy based on environment
        proxy:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8000/api/**"
            : "http://tuemedia-it-backend:8000/api/**",
      },
    },

    // Development proxy rules
    devProxy: {
      "/api": {
        target: "http://127.0.0.1:8000", // Localhost for development
        changeOrigin: true,
        prependPath: true,
      },
    },
  },
});
