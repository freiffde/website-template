<template>
  <header class="site-header">
    <div class="container header-inner">
      <slot name="brand">
        <NuxtLink to="/" class="brand">Brand Name</NuxtLink>
      </slot>

      <button
        class="mobile-toggle"
        type="button"
        aria-label="Navigation öffnen"
        :aria-expanded="mobileMenuOpen"
        aria-controls="cta-mobile-nav"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <Icon :name="mobileMenuOpen ? 'lucide:x' : 'lucide:menu'" size="22" />
      </button>

      <nav class="nav-links">
        <NuxtLink
          v-for="item in headerItems"
          :key="item.key"
          :to="item.link"
          class="nav-link"
          active-class="nav-link--active"
          exact-active-class="nav-link--active"
        >
          {{ item.label ?? $t(item.key) }}
        </NuxtLink>
      </nav>

      <slot name="cta" />
    </div>

    <div
      id="cta-mobile-nav"
      class="mobile-nav"
      :class="{ 'mobile-nav--open': mobileMenuOpen }"
    >
      <nav class="mobile-nav-links">
        <NuxtLink
          v-for="item in headerItems"
          :key="item.key"
          :to="item.link"
          class="nav-link"
          active-class="nav-link--active"
          exact-active-class="nav-link--active"
          @click="mobileMenuOpen = false"
        >
          {{ item.label ?? $t(item.key) }}
        </NuxtLink>
        <slot name="cta-mobile" />
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { navConfig } from "~/config/navigation";

const mobileMenuOpen = ref(false);

const headerItems = computed(() =>
  navConfig.filter((item) => item.header && !item.children),
);

const route = useRoute();
watch(
  () => route.path,
  () => {
    mobileMenuOpen.value = false;
  },
);
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e1e7f0;
  z-index: 1000;
}

.container {
  width: min(1200px, 100% - 2.5rem);
  margin: 0 auto;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 0.875rem 0;
}

/* Brand slot */
.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 700;
  color: #151b5a;
  text-decoration: none;
  white-space: nowrap;
}

/* Desktop nav */
.nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-weight: 600;
}

.nav-link {
  position: relative;
  padding-bottom: 0.2rem;
  font-size: 1rem;
  color: #151b5a;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link--active {
  color: #151b5a;
  font-weight: 700;
}

.nav-link--active::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -0.15rem;
  height: 2px;
  background: #151b5a;
  border-radius: 999px;
}

/* Mobile toggle */
.mobile-toggle {
  display: none;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: 1px solid #e1e7f0;
  background: #ffffff;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  cursor: pointer;
  color: #151b5a;
  transition:
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.mobile-toggle:hover {
  border-color: rgba(21, 27, 90, 0.35);
  box-shadow: 0 6px 16px rgba(21, 27, 90, 0.12);
}

/* Mobile nav drawer */
.mobile-nav {
  display: none;
  background: #ffffff;
  border-bottom: 1px solid #e1e7f0;
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition:
    max-height 0.2s ease,
    opacity 0.2s ease;
}

.mobile-nav--open {
  max-height: 420px;
  opacity: 1;
}

.mobile-nav-links {
  display: grid;
  gap: 0.6rem;
  padding: 0.5rem 1.5rem 1.5rem;
}

.mobile-nav-links .nav-link {
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  transition:
    background 0.15s ease,
    color 0.15s ease;
}

.mobile-nav-links .nav-link--active {
  background: rgba(21, 27, 90, 0.07);
  font-weight: 700;
}

.mobile-nav-links .nav-link--active::after {
  display: none;
}

@media (max-width: 960px) {
  .nav-links {
    display: none;
  }

  /* Hide desktop CTA slot */
  :slotted(.nav-cta) {
    display: none;
  }

  .mobile-toggle {
    display: inline-flex;
  }

  .mobile-nav {
    display: block;
  }
}
</style>
