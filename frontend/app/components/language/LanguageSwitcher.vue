<template>
  <div class="language-switcher">
    <div
      v-if="locales.length > 1"
      class="current-language"
      @click="toggleDropdown"
    >
      <span class="flag-icon">{{ getFlagEmoji(locale) }}</span>
      <span class="language-code">{{ locale.toUpperCase() }}</span>
      <Icon
        name="mdi:chevron-down"
        class="dropdown-arrow"
        :class="{ rotated: isDropdownOpen }"
      />
    </div>

    <div class="language-dropdown" :class="{ 'dropdown-open': isDropdownOpen }">
      <button
        v-for="availableLocale in locales"
        :key="availableLocale.code"
        class="language-option"
        :class="{ active: availableLocale.code === locale }"
        @click="switchLanguage(availableLocale.code)"
      >
        <span class="flag-icon">{{ getFlagEmoji(availableLocale.code) }}</span>
        <span class="language-name">{{ availableLocale.name }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const switchLanguage = async (locale) => {
  await navigateTo(switchLocalePath(locale));
  isDropdownOpen.value = false;
};

const getFlagEmoji = (locale) => {
  const flags = {
    de: "🇩🇪",
    en: "🇺🇸",
  };
  return flags[locale] || "🌐";
};

// Close dropdown when clicking outside
onMounted(() => {
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".language-switcher")) {
      isDropdownOpen.value = false;
    }
  });
});

onUnmounted(() => {
  document.removeEventListener("click", () => {});
});
</script>

<style scoped>
.language-switcher {
  position: relative;
  display: inline-block;
}

.current-language {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(34, 192, 200, 0.3);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: var(--tmc-font-body);
  font-weight: 500;
  color: var(--tmc-cyan);
}

.current-language:hover {
  background: rgba(34, 192, 200, 0.1);
  border-color: var(--tmc-cyan);
}

.translate-icon {
  font-size: 1.125rem;
}

.language-code {
  font-size: 0.875rem;
  font-weight: 600;
}

.dropdown-arrow {
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.dropdown-arrow.rotated {
  transform: rotate(180deg);
}

.language-dropdown {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  min-width: 150px;
  background: white;
  border: 1px solid rgba(34, 192, 200, 0.2);
  border-radius: 0.75rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1000;
  overflow: hidden;
}

.language-dropdown.dropdown-open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.language-option {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: var(--tmc-font-body);
  color: #4a5568;
  text-align: left;
}

.language-option:hover {
  background: rgba(34, 192, 200, 0.05);
  color: var(--tmc-cyan);
}

.language-option.active {
  background: rgba(34, 192, 200, 0.1);
  color: var(--tmc-cyan);
  font-weight: 600;
}

.flag-icon {
  font-size: 1.25rem;
}

.language-name {
  font-size: 0.875rem;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .current-language {
    padding: 0.375rem 0.5rem;
  }

  .language-code {
    display: none;
  }

  .language-dropdown {
    right: -0.5rem;
    min-width: 120px;
  }

  .language-option {
    padding: 0.625rem 0.75rem;
  }

  .flag-icon {
    font-size: 1rem;
  }

  .language-name {
    font-size: 0.8rem;
  }
}
</style>
