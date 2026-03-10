<template>
  <header class="site-header">
    <nav class="navbar">
      <div class="nav-container">
        <NuxtLink :to="localePath('/')" class="nav-brand">
          <img src="@/assets/logo/tuemedia.svg" alt="Tuemedia IT Solutions" />
        </NuxtLink>

        <!-- Navigation Menu (driven by navConfig) -->
        <div class="nav-menu" :class="{ 'nav-menu-active': isMenuOpen }">
          <template v-for="item in headerItems" :key="item.key">
            <!-- Flat link -->
            <NuxtLink
              v-if="!item.children"
              :to="localePath(item.link)"
              class="nav-link"
              @click="closeMenu"
            >
              {{ item.label ?? $t(item.key) }}
            </NuxtLink>

            <!-- Dropdown -->
            <div
              v-else
              class="nav-dropdown"
              @mouseleave="closeDropdown(item.key)"
            >
              <div
                class="nav-link dropdown-trigger"
                @mouseenter="openDropdown(item.key)"
                @click="toggleDropdown(item.key)"
              >
                {{ item.label ?? $t(item.key) }}
                <span
                  class="dropdown-arrow"
                  :class="{ 'arrow-up': activeDropdown === item.key }"
                  >▼</span
                >
              </div>
              <div
                class="dropdown-menu"
                :class="{ 'dropdown-active': activeDropdown === item.key }"
              >
                <template v-for="child in item.children" :key="child.key">
                  <!-- Child with sub-children (submenu group) -->
                  <div v-if="child.children" class="dropdown-submenu">
                    <NuxtLink
                      :to="localePath(child.link)"
                      class="dropdown-link submenu-title"
                      @click="closeMenu"
                    >
                      {{ child.label ?? $t(child.key) }}
                    </NuxtLink>
                    <div class="submenu-items">
                      <NuxtLink
                        v-for="sub in child.children"
                        :key="sub.key"
                        :to="localePath(sub.link)"
                        class="dropdown-link submenu-item"
                        @click="closeMenu"
                      >
                        {{ sub.label ?? $t(sub.key) }}
                      </NuxtLink>
                    </div>
                  </div>

                  <!-- External child link -->
                  <NuxtLink
                    v-else-if="child.external"
                    :to="child.link"
                    target="_blank"
                    rel="noopener"
                    class="dropdown-link"
                    @click="closeMenu"
                  >
                    <span
                      style="display: flex; align-items: center; gap: 0.5rem"
                    >
                      <Icon name="mdi:open-in-new" class="external-link-icon" />
                      {{ child.label ?? $t(child.key) }}
                    </span>
                  </NuxtLink>

                  <!-- Regular child link -->
                  <NuxtLink
                    v-else
                    :to="localePath(child.link)"
                    class="dropdown-link"
                    @click="closeMenu"
                  >
                    {{ child.label ?? $t(child.key) }}
                  </NuxtLink>
                </template>
              </div>
            </div>
          </template>
        </div>

        <!-- Right side navigation -->
        <div class="nav-right">
          <LanguageSwitcher />

          <!-- Mobile menu toggle -->
          <div class="nav-toggle" @click="toggleMenu">
            <span class="bar" />
            <span class="bar" />
            <span class="bar" />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { navConfig } from "~/config/navigation";

const localePath = useLocalePath();
const isMenuOpen = ref(false);
const activeDropdown = ref(null);

const headerItems = computed(() => navConfig.filter((item) => item.header));

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) activeDropdown.value = null;
};

const closeMenu = () => {
  isMenuOpen.value = false;
  activeDropdown.value = null;
};

const openDropdown = (key) => {
  if (window.innerWidth > 768) activeDropdown.value = key;
};

const closeDropdown = (key) => {
  if (window.innerWidth > 768 && activeDropdown.value === key)
    activeDropdown.value = null;
};

const toggleDropdown = (key) => {
  if (window.innerWidth <= 768)
    activeDropdown.value = activeDropdown.value === key ? null : key;
};

// Close menu and dropdowns when clicking outside
onMounted(() => {
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".navbar")) {
      isMenuOpen.value = false;
      activeDropdown.value = null;
    }
  });
});

// Close on route change
const route = useRoute();
watch(
  () => route.path,
  () => {
    isMenuOpen.value = false;
    activeDropdown.value = null;
  },
);
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(34, 192, 200, 0.2);
  transition: all 0.3s ease;
}

.navbar {
}

.nav-container {
  box-sizing: border-box; /* ensures padding doesn't add to total width */
  padding: 0 2rem; /* Adds breathing room when viewport < 1400px */
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  text-decoration: none;
  color: var(--tmc-cyan);
}

.nav-brand img {
  padding: 10px 0;
  height: 70px;
  width: auto;
  display: block;
}

@keyframes gradientShift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.nav-menu {
  padding: 1rem 0;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1.5rem;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-family: var(--tmc-font-body);
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: var(--tmc-cyan);
  background: rgba(34, 192, 200, 0.1);
}

.nav-link.router-link-active {
  color: var(--tmc-cyan);
  background: rgba(34, 192, 200, 0.15);
}

.nav-link.router-link-active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 2px;
  background: linear-gradient(90deg, var(--tmc-cyan), var(--tmc-normal-blue));
}

/* Dropdown Styles */
.nav-dropdown {
  position: relative;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.dropdown-arrow {
  transition: transform 0.3s ease;
  font-size: 0.8rem;
  color: var(--tmc-cyan);
}

.dropdown-arrow.arrow-up {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(34, 192, 200, 0.2);
  padding: 1rem 0;
  min-width: 280px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1000;
}

.dropdown-menu.dropdown-active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-link {
  display: block;
  padding: 0.75rem 1.5rem;
  color: #333;
  text-decoration: none;
  font-family: var(--tmc-font-body);
  font-weight: 500;
  transition: all 0.2s ease;
  border-left: 3px solid transparent;
}

.dropdown-link:hover {
  background: rgba(34, 192, 200, 0.08);
  color: var(--tmc-cyan);
  border-left-color: var(--tmc-cyan);
}

.dropdown-submenu {
  position: relative;
}

.submenu-title {
  font-weight: 600;
  color: var(--tmc-normal-blue);
  border-left-color: var(--tmc-normal-blue);
}

.submenu-title:hover {
  background: rgba(34, 192, 200, 0.05);
}

.submenu-items {
  padding-left: 1rem;
  background: rgba(34, 192, 200, 0.03);
}

.submenu-item {
  padding: 0.5rem 1.5rem;
  font-size: 0.9rem;
  color: #666;
}

.submenu-item:hover {
  color: var(--tmc-cyan);
  background: rgba(34, 192, 200, 0.1);
}

.nav-right {
  padding: 1rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 0.25rem;
}

.bar {
  width: 25px;
  height: 3px;
  background: var(--tmc-cyan);
  border-radius: 3px;
  transition: all 0.3s ease;
}

/* Mobile styles */
@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background: white;
    width: 100%;
    text-align: left;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    padding: 1rem 0;
    gap: 1rem;
    max-height: calc(100vh - 70px);
    overflow-y: auto;
  }

  .nav-menu.nav-menu-active {
    left: 0;
    padding: 1.75rem 1rem;
  }

  .nav-link {
    width: 100%;
    margin: 0.25rem 1rem;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
  }

  .nav-dropdown {
    width: 100%;
  }

  .dropdown-trigger {
    margin: 0;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    justify-content: space-between;
  }

  .dropdown-menu {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    border: none;
    padding: 0;
    margin-left: 1rem;
    background: rgba(34, 192, 200, 0.05);
    border-radius: 0.5rem;
    margin-top: 0.5rem;
    max-height: 0;
    overflow: hidden;
    transition:
      max-height 0.3s ease,
      padding 0.3s ease;
  }

  .dropdown-menu.dropdown-active {
    max-height: 500px;
    padding: 0.5rem 0;
  }

  .dropdown-link {
    padding: 0.5rem 1rem;
    margin: 0.25rem 0.5rem;
    border-radius: 0.375rem;
    border-left: none;
  }

  .submenu-items {
    padding-left: 0.5rem;
    margin-top: 0.25rem;
  }

  .submenu-item {
    padding: 0.4rem 1rem;
    margin: 0.2rem 0;
  }

  .nav-toggle {
    display: flex;
  }

  .nav-toggle.active .bar:nth-child(2) {
    opacity: 0;
  }

  .nav-toggle.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .nav-toggle.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}

/* Desktop hover effects */
@media (min-width: 769px) {
  .nav-link::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(34, 192, 200, 0.1),
      transparent
    );
    transition: width 0.3s ease;
    border-radius: 0.5rem;
  }

  .nav-link:hover::before {
    width: 100%;
  }
}
</style>
