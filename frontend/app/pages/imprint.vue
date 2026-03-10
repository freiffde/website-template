<template>
  <div class="imprint-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">{{ $t("imprint.title") }}</h1>
          <p class="hero-subtitle">{{ $t("imprint.subtitle") }}</p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="imprint-content">
      <div class="container">
        <div class="content-grid">
          <!-- Company Information -->
          <div class="info-section">
            <h2>{{ $t("imprint.companyInfo.title") }}</h2>
            <div class="company-card">
              <h3>{{ $t("imprint.companyInfo.name") }}</h3>
              <p class="owner">{{ $t("imprint.companyInfo.owner") }}</p>
              <div class="address">
                <p>{{ $t("imprint.companyInfo.address.street") }}</p>
                <p>{{ $t("imprint.companyInfo.address.city") }}</p>
                <p>{{ $t("imprint.companyInfo.address.country") }}</p>
              </div>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="info-section">
            <h2>{{ $t("imprint.contact.title") }}</h2>
            <div class="contact-card">
              <div class="contact-item">
                <div class="contact-icon">
                  <Icon name="mdi:phone" />
                </div>
                <div class="contact-details">
                  <span class="contact-label"
                    >{{ $t("imprint.contact.phone") }}:</span
                  >
                  <a href="tel:+4915733356316" class="contact-link"
                    >+49 1573 3356316</a
                  >
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">
                  <Icon name="mdi:email" />
                </div>
                <div class="contact-details">
                  <span class="contact-label"
                    >{{ $t("imprint.contact.email") }}:</span
                  >
                  <a href="mailto:info@tuemedia-it.de" class="contact-link"
                    >info@tuemedia-it.de</a
                  >
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">
                  <Icon name="mdi:web" />
                </div>
                <div class="contact-details">
                  <span class="contact-label"
                    >{{ $t("imprint.contact.web") }}:</span
                  >
                  <a href="https://www.tuemedia.de" class="contact-link"
                    >www.tuemedia-it.de</a
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- VAT Information -->
          <div class="info-section">
            <h2>{{ $t("imprint.vatInfo.title") }}</h2>
            <div class="vat-card">
              <div class="vat-number">{{ $t("imprint.vatInfo.number") }}</div>
              <p class="vat-description">
                {{ $t("imprint.vatInfo.description") }}
              </p>
            </div>
          </div>

          <!-- Responsibility -->
          <div class="info-section">
            <h2>{{ $t("imprint.responsibility.title") }}</h2>
            <div class="responsibility-card">
              <p class="responsible-name">
                {{ $t("imprint.responsibility.name") }}
              </p>
              <p class="responsible-address">
                {{ $t("imprint.responsibility.address") }}
              </p>
            </div>
          </div>

          <!-- Disclaimer -->
          <div class="info-section disclaimer-section">
            <h2>{{ $t("imprint.disclaimer.title") }}</h2>

            <div class="disclaimer-item">
              <h3>{{ $t("imprint.disclaimer.content.title") }}</h3>
              <p>{{ $t("imprint.disclaimer.content.text") }}</p>
            </div>

            <div class="disclaimer-item">
              <h3>{{ $t("imprint.disclaimer.links.title") }}</h3>
              <p>{{ $t("imprint.disclaimer.links.text") }}</p>
            </div>

            <div class="disclaimer-item">
              <h3>{{ $t("imprint.disclaimer.copyright.title") }}</h3>
              <p>{{ $t("imprint.disclaimer.copyright.text") }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Custom page transition
definePageMeta({
  pageTransition: {
    name: "fade",
    mode: "out-in",
  },
});

// SEO Meta
const { t } = useI18n();

useHead({
  title: () => t("imprint.title"),
  meta: [
    {
      name: "description",
      content: () => t("imprint.subtitle"),
    },
    {
      name: "robots",
      content: "noindex, nofollow", // Imprint pages should not be indexed
    },
  ],
});
</script>

<style scoped>
/* Hero Section */
.hero {
  padding: 6rem 0 4rem;
  background: linear-gradient(
    135deg,
    rgba(99, 102, 241, 0.1) 0%,
    rgba(168, 85, 247, 0.05) 50%,
    rgba(255, 255, 255, 0.1) 100%
  );
}

.hero-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-family: var(--tmc-font-heading);
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1e40af;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
}

/* Main Content */
.imprint-content {
  padding: 6rem 0;
  background: white;
}

.content-grid {
  display: grid;
  gap: 4rem;
  max-width: 1000px;
  margin: 0 auto;
}

.info-section {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 2.5rem;
  border: 1px solid rgba(99, 102, 241, 0.1);
}

.info-section h2 {
  font-family: var(--tmc-font-heading);
  font-size: 1.8rem;
  color: #1e40af;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(99, 102, 241, 0.1);
}

/* Company Card */
.company-card h3 {
  font-family: var(--tmc-font-heading);
  font-size: 1.4rem;
  color: #6366f1;
  margin-bottom: 0.5rem;
}

.owner {
  font-size: 1.1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
}

.address p {
  color: #666;
  margin-bottom: 0.25rem;
  line-height: 1.6;
}

/* Contact Card */
.contact-card {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(99, 102, 241, 0.05);
  border-radius: 0.75rem;
  transition: all 0.3s ease;
}

.contact-item:hover {
  background: rgba(99, 102, 241, 0.1);
  transform: translateX(5px);
}

.contact-icon {
  width: 40px;
  height: 40px;
  background: #6366f1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.contact-label {
  font-weight: 600;
  color: #374151;
  font-size: 0.9rem;
}

.contact-link {
  color: #6366f1;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #4f46e5;
  text-decoration: underline;
}

/* VAT Card */
.vat-card {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(
    135deg,
    rgba(99, 102, 241, 0.05),
    rgba(168, 85, 247, 0.05)
  );
  border-radius: 1rem;
}

.vat-number {
  font-family: "Fira Code", monospace;
  font-size: 1.5rem;
  font-weight: bold;
  color: #6366f1;
  margin-bottom: 1rem;
  letter-spacing: 2px;
}

.vat-description {
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Responsibility Card */
.responsibility-card {
  background: rgba(99, 102, 241, 0.05);
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
}

.responsible-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1e40af;
  margin-bottom: 0.5rem;
}

.responsible-address {
  color: #666;
  line-height: 1.6;
}

/* Disclaimer Section */
.disclaimer-section {
  border-left: 4px solid #6366f1;
}

.disclaimer-item {
  margin-bottom: 2rem;
}

.disclaimer-item:last-child {
  margin-bottom: 0;
}

.disclaimer-item h3 {
  font-family: var(--tmc-font-heading);
  font-size: 1.2rem;
  color: #1e40af;
  margin-bottom: 1rem;
}

.disclaimer-item p {
  color: #666;
  line-height: 1.8;
  text-align: justify;
}

.container {
  box-sizing: border-box; /* ensures padding doesn't add to total width */
  padding: 0 2rem; /* Adds breathing room when viewport < 1400px */
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Responsive Design */
@media (max-width: 968px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .info-section {
    padding: 2rem;
  }

  .contact-item {
    flex-direction: column;
    text-align: center;
  }

  .contact-details {
    align-items: center;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 4rem 0 2rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .imprint-content {
    padding: 4rem 0;
  }

  .content-grid {
    gap: 2rem;
  }

  .info-section {
    padding: 1.5rem;
  }

  .info-section h2 {
    font-size: 1.5rem;
  }
}
</style>
