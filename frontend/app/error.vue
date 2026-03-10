<template>
  <div class="error-page">
    <div class="container">
      <div class="error-content">
        <!-- Error Icon -->
        <div class="error-icon">
          <svg
            v-if="error.statusCode === 404"
            class="icon-404"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 9L15 15M15 9L9 15"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            v-else
            class="icon-error"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="2"
            />
            <line
              x1="12"
              y1="8"
              x2="12"
              y2="12"
              stroke="currentColor"
              stroke-width="2"
            />
            <circle cx="12" cy="16" r="1" fill="currentColor" />
          </svg>
        </div>

        <!-- Error Status Code -->
        <div class="error-code">
          {{ error.statusCode || 500 }}
        </div>

        <!-- Error Title -->
        <h1 class="error-title">
          <span v-if="error.statusCode === 404">
            {{ $t("error.404.title") }}
          </span>
          <span v-else-if="error.statusCode >= 500">
            {{ $t("error.500.title") }}
          </span>
          <span v-else>
            {{ $t("error.title") }}
          </span>
        </h1>

        <!-- Error Description -->
        <p class="error-description">
          <span v-if="error.statusCode === 404">
            {{ $t("error.404.description") }}
          </span>
          <span v-else-if="error.statusCode >= 500">
            {{ $t("error.500.description") }}
          </span>
          <span v-else>
            {{ $t("error.general.description") }}
          </span>
        </p>

        <!-- Error Message (if available) -->
        <div v-if="error.message && isDev" class="error-details">
          <details>
            <summary>Technical Details</summary>
            <pre class="error-message">{{ error.message }}</pre>
            <pre v-if="error.stack" class="error-stack">{{ error.stack }}</pre>
          </details>
        </div>

        <!-- Action Buttons -->
        <div class="error-actions">
          <button class="btn btn-primary" @click="handleError">
            {{ $t("error.buttons.goBack") }}
          </button>
          <NuxtLink to="/" class="btn btn-secondary">
            {{ $t("error.buttons.backHome") }}
          </NuxtLink>
          <button @click="contactModal?.openModal()" class="btn btn-outline">
            {{ $t("error.buttons.contactUs") }}
          </button>
        </div>

        <!-- Additional Help Text -->
        <div class="error-help">
          <p class="help-text">
            {{ $t("error.general.description") }}
          </p>
        </div>
      </div>
    </div>

    <!-- Contact Form Modal -->
    <ContactFormModal ref="contactModal" />
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

// Contact modal ref
const contactModal = ref(null);

// Define props
const props = defineProps<{
  error: NuxtError;
}>();

// Check if in development mode
const isDev = import.meta.dev;

// SEO Meta
useHead({
  title: () => {
    if (props.error.statusCode === 404) {
      return `${props.error.statusCode} - Page Not Found | Tuemedia IT Solutions`;
    }
    return `${props.error.statusCode || 500} - Error | Tuemedia IT Solutions`;
  },
  meta: [
    {
      name: "robots",
      content: "noindex, nofollow",
    },
  ],
});

// Handle error actions
const handleError = () => {
  // Try to go back in history
  if (import.meta.client && window.history.length > 1) {
    window.history.back();
  } else {
    // Fallback to home page
    navigateTo("/");
  }
};

// Clear error and navigate to home (unused but may be needed for future functionality)
// const _clearErrorAndGoHome = () => {
//   clearError({ redirect: '/' })
// }
</script>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    var(--tmc-logo-cyan-bright) 0%,
    var(--tmc-cyan) 25%,
    var(--tmc-normal-blue) 50%,
    var(--tmc-blue-purple) 75%,
    var(--tmc-purple) 100%
  );
  position: relative;
  overflow: hidden;
}

.error-page::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(1px);
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 1;
}

.error-content {
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 3rem 2rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.error-icon {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
}

.icon-404,
.icon-error {
  width: 80px;
  height: 80px;
  color: var(--tmc-normal-blue);
  opacity: 0.8;
}

.error-code {
  font-size: 6rem;
  font-weight: 900;
  font-family: var(--tmc-font-heading);
  color: var(--tmc-normal-blue);
  margin-bottom: 1rem;
  opacity: 0.8;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.error-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
  font-family: var(--tmc-font-heading);
}

.error-description {
  font-size: 1.2rem;
  color: #4a5568;
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.error-details {
  margin: 2rem 0;
  text-align: left;
}

.error-details summary {
  cursor: pointer;
  font-weight: 600;
  color: var(--tmc-normal-blue);
  margin-bottom: 1rem;
}

.error-message,
.error-stack {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1rem;
  font-size: 0.875rem;
  color: #2d3748;
  overflow-x: auto;
  white-space: pre-wrap;
  margin: 0.5rem 0;
}

.error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
  font-family: var(--tmc-font-body);
  min-width: 160px;
}

.btn-primary {
  background: linear-gradient(135deg, var(--tmc-cyan), var(--tmc-normal-blue));
  color: white;
  box-shadow: 0 4px 15px rgba(34, 192, 200, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(34, 192, 200, 0.4);
}

.btn-secondary {
  background: linear-gradient(
    135deg,
    var(--tmc-blue-purple),
    var(--tmc-purple)
  );
  color: white;
  box-shadow: 0 4px 15px rgba(102, 91, 196, 0.3);
}

.btn-secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 91, 196, 0.4);
}

.btn-outline {
  background: transparent;
  color: var(--tmc-normal-blue);
  border: 2px solid var(--tmc-normal-blue);
}

.btn-outline:hover {
  background: var(--tmc-normal-blue);
  color: white;
  transform: translateY(-2px);
}

.error-help {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
}

.help-text {
  color: #718096;
  font-size: 0.95rem;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  .error-content {
    padding: 2rem 1.5rem;
  }

  .error-code {
    font-size: 4rem;
  }

  .error-title {
    font-size: 1.8rem;
  }

  .error-description {
    font-size: 1rem;
  }

  .error-actions {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 300px;
  }

  .icon-404,
  .icon-error {
    width: 60px;
    height: 60px;
  }
}

@media (max-width: 480px) {
  .error-code {
    font-size: 3rem;
  }

  .error-title {
    font-size: 1.5rem;
  }
}
</style>
