<template>
  <div class="app-layout">
    <!-- Loading Progress Bar -->
    <div class="loading-progress" :class="{ active: isLoading }" />

    <NavigationAppHeader />
    <main class="main-content">
      <slot />
    </main>
    <footer class="app-footer">
      <div class="footer-container">
        <div class="footer-company-info">
          <h3>{{ $t("hero.companyName") }}</h3>
          <p>{{ $t("footer.companyDescription") }}</p>
        </div>
        <div class="footer-links">
          <div class="footer-section">
            <h4>{{ $t("footer.sections.services.title") }}</h4>
            <ul>
              <li>
                <NuxtLink :to="localePath('/services/web-design')">
                  {{ $t("footer.sections.services.webDesign") }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/services/web-development')">
                  {{ $t("footer.sections.services.webDevelopment") }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/services/online-shops')">
                  {{ $t("footer.sections.services.onlineShops") }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>{{ $t("footer.sections.businessCentral.title") }}</h4>
            <ul>
              <li>
                <NuxtLink :to="localePath('/business-central/consulting')">
                  {{ $t("footer.sections.businessCentral.consulting") }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/business-central/development')">
                  {{ $t("footer.sections.businessCentral.development") }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>{{ $t("footer.sections.company.title") }}</h4>
            <ul>
              <li>
                <NuxtLink :to="localePath('/about')">{{
                  $t("footer.sections.company.aboutUs")
                }}</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/contact')">{{
                  $t("footer.sections.company.contact")
                }}</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/blog')">{{
                  $t("footer.sections.company.blog")
                }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>{{ $t("footer.sections.legal.title") }}</h4>
            <ul>
              <li>
                <NuxtLink :to="localePath('/imprint')">{{
                  $t("footer.sections.legal.imprint")
                }}</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/privacy')">{{
                  $t("footer.sections.legal.privacy")
                }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>
            &copy; {{ currentYear }} {{ $t("hero.companyName") }}.
            {{ $t("footer.copyright") }}
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const localePath = useLocalePath();
const currentYear = new Date().getFullYear();

// Loading state for transitions
const isLoading = ref(false);
const router = useRouter();

// Handle navigation loading
router.beforeEach(() => {
  isLoading.value = true;
});

router.afterEach(() => {
  // Small delay to ensure smooth transition
  setTimeout(() => {
    isLoading.value = false;
  }, 200);
});
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  margin-top: 0;
}

.app-footer {
  background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
  color: white;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem 1rem;
}

.footer-company-info {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #444;
}

.footer-company-info h3 {
  font-family: var(--tmc-font-heading);
  color: var(--tmc-logo-cyan-bright);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.footer-company-info p {
  font-family: var(--tmc-font-body);
  line-height: 1.6;
  color: #cccccc;
  max-width: 600px;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h4 {
  font-family: var(--tmc-font-heading);
  color: var(--tmc-cyan);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.footer-section p {
  font-family: var(--tmc-font-body);
  line-height: 1.6;
  color: #cccccc;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section ul li a {
  color: #cccccc;
  text-decoration: none;
  font-family: var(--tmc-font-body);
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: var(--tmc-cyan);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #444;
}

.footer-bottom p {
  font-family: var(--tmc-font-body);
  color: #888;
  margin: 0;
}

@media (max-width: 992px) {
  .footer-links {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .footer-links {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-company-info {
    text-align: center;
  }

  .footer-company-info p {
    margin-left: auto;
    margin-right: auto;
  }

  .footer-container {
    padding: 2rem 1rem 1rem;
  }
}

/* Global Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Layout Transitions */
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Alternative fade transition for smoother experience */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

/* Slide transition for service pages */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

/* Scale transition for modal-like pages */
.scale-enter-active,
.scale-leave-active {
  transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.scale-enter-from {
  opacity: 0;
  transform: scale(0.9) translateY(30px);
}

.scale-leave-to {
  opacity: 0;
  transform: scale(1.05) translateY(-30px);
}
</style>
