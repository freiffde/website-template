<template>
  <header class="site-header">
    <div class="container header-inner">
      <slot name="brand">
        <span class="brand">Brand Name</span>
      </slot>

      <nav class="nav">
        <NuxtLink v-for="item in headerItems" :key="item.key" :to="item.link">
          {{ item.label ?? $t(item.key) }}
        </NuxtLink>
      </nav>

      <button
        class="mobile-toggle"
        type="button"
        aria-label="Navigation öffnen"
        :aria-expanded="mobileMenuOpen"
        aria-controls="flat-mobile-nav"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <Icon :name="mobileMenuOpen ? 'lucide:x' : 'lucide:menu'" size="22" />
      </button>
    </div>

    <div
      id="flat-mobile-nav"
      class="mobile-nav"
      :class="{ 'mobile-nav--open': mobileMenuOpen }"
    >
      <nav class="mobile-nav-links">
        <NuxtLink
          v-for="item in headerItems"
          :key="item.key"
          :to="item.link"
          @click="mobileMenuOpen = false"
        >
          {{ item.label ?? $t(item.key) }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { navConfig } from "~/config/navigation";

const mobileMenuOpen = ref(false);

// Only flat (no-children) header items so dropdowns don't silently disappear
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
  z-index: 20;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #e2e6ee;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  gap: 1.5rem;
}

.container {
  width: min(1120px, 92%);
  margin: 0 auto;
}

.brand {
  font-size: 1.4rem;
  font-weight: 700;
  color: #011b3b;
  text-decoration: none;
  white-space: nowrap;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.95rem;
}

.nav a {
  color: #4b5c73;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav a:hover,
.nav a.router-link-active {
  color: #011b3b;
}

/* Mobile toggle */
.mobile-toggle {
  display: none;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: 1px solid #e2e6ee;
  background: #ffffff;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  color: #011b3b;
  cursor: pointer;
  transition:
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.mobile-toggle:hover {
  border-color: rgba(1, 27, 59, 0.35);
  box-shadow: 0 6px 16px rgba(1, 27, 59, 0.12);
}

/* Mobile nav drawer */
.mobile-nav {
  display: none;
  background: rgba(255, 255, 255, 0.98);
  border-bottom: 1px solid #e2e6ee;
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition:
    max-height 0.2s ease,
    opacity 0.2s ease;
}

.mobile-nav--open {
  max-height: 320px;
  opacity: 1;
}

.mobile-nav-links {
  display: grid;
  gap: 0.6rem;
  padding: 0.5rem 1.5rem 1.5rem;
}

.mobile-nav-links a {
  font-size: 1rem;
  color: #011b3b;
  font-weight: 600;
  padding: 0.4rem 0;
  text-decoration: none;
}

@media (max-width: 700px) {
  .nav {
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
