<template>
  <div class="homepage"></div>
</template>

<script setup>
// Custom page transition
definePageMeta({
  pageTransition: {
    name: "fade",
    mode: "out-in",
  },
});

const { t } = useI18n();

// Meta tags for SEO
useHead({
  title: t("meta.homepage.title"),
  meta: [
    {
      name: "description",
      content: t("meta.homepage.description"),
    },
    {
      name: "keywords",
      content:
        "web development, online shops, Shopify, Vue.js, Django, web design, online shop, digital solutions, custom software",
    },
    {
      property: "og:title",
      content: t("meta.homepage.title"),
    },
    {
      property: "og:description",
      content: t("meta.homepage.description"),
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: t("meta.homepage.title"),
    },
    {
      name: "twitter:description",
      content: t("meta.homepage.description"),
    },
  ],
});
</script>

<style scoped>
.homepage {
  overflow-x: hidden;
}

/* Hero Section */
.hero {
  box-sizing: border-box; /* ensures padding doesn't add to total width */
  padding: 6rem 2rem 4rem; /* Adds breathing room when viewport < 1400px */

  background: linear-gradient(
    135deg,
    rgba(34, 192, 200, 0.1) 0%,
    rgba(64, 139, 198, 0.05) 50%,
    rgba(255, 255, 255, 0.1) 100%
  );
  overflow: hidden;
}

.hero-content {
  margin: 0 auto;
  max-width: 1400px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-title {
  font-family: var(--tmc-font-heading);
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  background: linear-gradient(125deg, var(--tmc-cyan), var(--tmc-purple));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: var(--tmc-normal-blue); /* Fallback */
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-weight: 400;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.stat-item {
  text-align: center;
  text-decoration: none;
  color: inherit;
  display: block;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 1rem;
  border-radius: 0.75rem;
  position: relative;
}

.stat-item::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 0.75rem;
  background: linear-gradient(135deg, var(--tmc-cyan), var(--tmc-normal-blue));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.stat-item:hover::before {
  opacity: 0.05;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-item:hover .activity-icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 10px 25px rgba(34, 192, 200, 0.3);
}

.stat-item:hover .stat-label {
  color: var(--tmc-cyan);
}

.activity-icon {
  width: 50px;
  height: 50px;
  margin: 0 auto 1rem;
  padding: 12px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--tmc-cyan), var(--tmc-normal-blue));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.activity-icon svg {
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
}

.stat-item:hover .activity-icon svg {
  transform: scale(1.1);
}

.stat-label {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--tmc-normal-blue);
  transition: color 0.3s ease;
  position: relative;
  z-index: 1;
}

.floating-card {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.card-title {
  font-weight: 600;
  color: var(--tmc-normal-blue);
}

.card-dots {
  display: flex;
  gap: 0.3rem;
}

.card-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--tmc-cyan);
}

.code-preview {
  font-family: "Fira Code", "Courier New", monospace;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.code-line {
  margin-bottom: 0.5rem;
}

.code-line.indent {
  padding-left: 2rem;
}

.code-keyword {
  color: #c678dd;
  font-weight: bold;
}

.code-variable {
  color: #e06c75;
}

.code-operator {
  color: #56b6c2;
}

.code-string {
  color: #98c379;
}

.code-function {
  color: #61afef;
}

.code-brackets {
  color: #abb2bf;
}

.technology-icons {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

.tech-icon {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: bold;
  color: white;
}

.tech-icon.vue {
  background: #4fc08d;
}

.tech-icon.nuxt {
  background: #00dc82;
}

.tech-icon.python {
  background: #3776ab;
}

/* Buttons */
.btn {
  display: inline-block;
  box-sizing: border-box;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-family: var(--tmc-font-body);
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 1rem;
}

.btn-primary {
  background: linear-gradient(135deg, var(--tmc-cyan), var(--tmc-normal-blue));
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(34, 192, 200, 0.3);
}

.btn-secondary {
  border-color: var(--tmc-cyan);
  color: var(--tmc-cyan);
  border: 2px solid;
}

.btn-secondary:hover {
  background: var(--tmc-cyan);
  color: white;
}

.btn-outline {
  background: transparent;
  border-color: var(--tmc-cyan);
  color: var(--tmc-cyan);
  border: 2px solid;
}

.btn-outline:hover {
  background: var(--tmc-cyan);
  color: white;
}

.btn-large {
  padding: 1.25rem 3rem;
  font-size: 1.1rem;
}

/* Sections */
.container {
  box-sizing: border-box; /* ensures padding doesn't add to total width */
  padding: 0 2rem; /* Adds breathing room when viewport < 1400px */
  max-width: 1400px;
  margin: 0 auto;
}

.section-title {
  font-family: var(--tmc-font-heading);
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--tmc-normal-blue), #22c0c8, #408bc6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: var(--tmc-normal-blue); /* Fallback */
}

.section-subtitle {
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  margin-bottom: 3rem;
}

/* Services Preview */
.services-preview {
  padding: 6rem 0;
  background: white;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.service-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(34, 192, 200, 0.1);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  display: block;
  position: relative;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.service-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 1.5rem;
  color: var(--tmc-cyan);
}

.service-icon svg {
  width: 100%;
  height: 100%;
}

.service-card h3 {
  font-family: var(--tmc-font-heading);
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--tmc-normal-blue);
}

.service-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.service-features {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.service-features li {
  padding: 0.5rem 0;
  color: #666;
  position: relative;
  padding-left: 1.5rem;
}

.service-features li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--tmc-cyan);
  font-weight: bold;
}

.service-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid rgba(34, 192, 200, 0.1);
  color: var(--tmc-cyan);
  font-weight: 600;
}

.service-link svg {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.service-card:hover .service-link svg {
  transform: translateX(5px);
}

/* Web Development specific styling with purple accent */
.service-card.web-dev {
  border: 1px solid rgba(99, 102, 241, 0.2);
  background: linear-gradient(
    135deg,
    rgba(99, 102, 241, 0.02) 0%,
    rgba(168, 85, 247, 0.02) 100%,
    rgba(255, 255, 255, 1) 100%
  );
}

.service-card.web-dev:hover {
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
}

.service-card.web-dev .service-icon {
  color: #6366f1;
}

.service-card.web-dev h3 {
  background: linear-gradient(135deg, #6366f1, #a855f7);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.service-card.web-dev .service-features li::before {
  color: #6366f1;
}

.service-card.web-dev .service-link {
  border-top-color: rgba(99, 102, 241, 0.2);
  color: #6366f1;
}

.service-card.web-dev .service-link:hover {
  color: #a855f7;
}

/* Online-Shops specific styling with purple-blue accent */
.service-card.online-shops {
  border: 1px solid rgba(59, 130, 246, 0.2);
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.02) 0%,
    rgba(147, 51, 234, 0.02) 100%,
    rgba(255, 255, 255, 1) 100%
  );
}

.service-card.online-shops:hover {
  border-color: rgba(59, 130, 246, 0.3);
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
}

.service-card.online-shops .service-icon {
  color: #3b82f6;
}

.service-card.online-shops h3 {
  background: linear-gradient(135deg, #3b82f6, #9333ea);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.service-card.online-shops .service-features li::before {
  color: #3b82f6;
}

.service-card.online-shops .service-link {
  border-top-color: rgba(59, 130, 246, 0.2);
  color: #3b82f6;
}

.service-card.online-shops .service-link:hover {
  color: #9333ea;
}

/* Business Central Section */
.business-central-section {
  padding: 6rem 0;
  background: linear-gradient(
    135deg,
    rgba(26, 107, 230, 0.05) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(95, 176, 198, 0.05) 100%
  );
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
}

.business-central-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at 20% 50%,
    rgba(26, 107, 230, 0.1) 0%,
    transparent 50%
  );
  pointer-events: none;
}

.bc-content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
}

.bc-visual {
  display: flex;
  align-items: center;
  justify-content: center;
}

.bc-logo-container {
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 1.5rem;
  box-shadow: 0 20px 60px rgba(26, 107, 230, 0.15);
  border: 2px solid rgba(26, 107, 230, 0.1);
  transition: all 0.3s ease;
  box-sizing: border-box;
  max-width: 100%;
}

.bc-logo-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 30px 80px rgba(26, 107, 230, 0.2);
}

.bc-icon {
  width: 100px;
  height: 100px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #1a6be6, #5fb0c6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.bc-icon svg {
  width: 60px;
  height: 60px;
}

.bc-logo-container h3 {
  font-family: var(--tmc-font-heading);
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.bc-logo-container h2 {
  font-family: var(--tmc-font-heading);
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #1a6be6, #5fb0c6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
}

.bc-text-content h2 {
  font-family: var(--tmc-font-heading);
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--tmc-normal-blue);
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.bc-subtitle {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 2rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.bc-features {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.bc-feature {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(26, 107, 230, 0.1);
  transition: all 0.3s ease;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
}

.bc-feature:hover {
  transform: translateX(5px);
  box-shadow: 0 15px 40px rgba(26, 107, 230, 0.15);
  border-color: rgba(26, 107, 230, 0.3);
}

.bc-feature-icon {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  background: linear-gradient(135deg, #1a6be6, #5fb0c6);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.bc-feature-icon svg {
  width: 24px;
  height: 24px;
}

.bc-feature h4 {
  font-family: var(--tmc-font-heading);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--tmc-normal-blue);
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.bc-feature p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.bc-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Process Section */
.process {
  padding: 6rem 0;
  background: white;
}

.process-timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.process-step {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(34, 192, 200, 0.1);
}

.step-number {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--tmc-cyan), var(--tmc-normal-blue));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.step-content h3 {
  font-family: var(--tmc-font-heading);
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: var(--tmc-normal-blue);
}

.step-content p {
  color: #666;
  line-height: 1.6;
}

/* Why Choose Us */
.why-choose-us {
  padding: 6rem 0;
  background: linear-gradient(
    135deg,
    rgba(34, 192, 200, 0.05) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(64, 139, 198, 0.05) 100%
  );
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.text-content h2 {
  font-family: var(--tmc-font-heading);
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--tmc-normal-blue);
}

.features-list {
  margin-bottom: 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  color: #666;
}

.check-icon {
  width: 20px;
  height: 20px;
  color: var(--tmc-cyan);
  flex-shrink: 0;
}

.values-showcase {
  display: grid;
  gap: 1.5rem;
}

.value-card {
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(34, 192, 200, 0.1);
  transition: all 0.3s ease;
}

.value-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.value-icon {
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
  color: var(--tmc-cyan);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(34, 192, 200, 0.1);
  border-radius: 50%;
}

.value-icon svg {
  width: 24px;
  height: 24px;
}

.value-card h4,
.value-card .value-title {
  font-family: var(--tmc-font-heading);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--tmc-normal-blue);
  display: block;
  font-weight: 600;
}

.value-card p {
  color: #666;
  line-height: 1.5;
  font-size: 0.9rem;
}

/* Testimonials Section */
.testimonials {
  padding: 6rem 0;
  background: white;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(34, 192, 200, 0.1);
  overflow: hidden;
}

.testimonial-content {
  padding: 2rem;
}

.stars {
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
}

.stars svg {
  width: 16px;
  height: 16px;
  color: #fbbf24;
}

.testimonial-content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
}

.author-info h4 {
  font-family: var(--tmc-font-heading);
  color: var(--tmc-normal-blue);
  margin-bottom: 0.25rem;
  font-size: 1rem;
}

.author-info span {
  color: var(--tmc-cyan);
  font-size: 0.9rem;
}

/* CTA Section */
.cta-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--tmc-cyan), var(--tmc-normal-blue));
  color: white;
  text-align: center;
}

.cta-content h2 {
  font-family: var(--tmc-font-heading);
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-content .btn-primary {
  background: white;
  color: var(--tmc-cyan);
}

.cta-content .btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(255, 255, 255, 0.3);
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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

/* Responsive Design */
@media (max-width: 968px) {
  .hero {
    padding: 4rem 1rem 3rem;
    background: linear-gradient(
      135deg,
      rgba(34, 192, 200, 0.15) 0%,
      rgba(64, 139, 198, 0.1) 50%,
      rgba(99, 102, 241, 0.1) 100%
    );
  }

  .hero-content {
    max-width: unset;
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .hero-title {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    animation: fadeInUp 0.8s ease-out;
  }

  .hero-subtitle {
    font-size: 1.15rem;
    margin-bottom: 2.5rem;
    padding: 0 1rem;
  }

  .hero-stats {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem 0;
  }

  .stat-item {
    background: white;
    padding: 1.5rem;
    border-radius: 1rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .stat-item:hover {
    transform: translateY(-5px);
  }

  .activity-icon {
    width: 60px;
    height: 60px;
    margin: 0 auto 1rem;
  }

  .hero-visual {
    display: none;
  }

  .hero-buttons {
    display: none;
  }

  .content-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .bc-content-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .bc-visual {
    order: -1;
  }

  .bc-logo-container {
    max-width: 400px;
    margin: 0 auto;
  }

  .bc-text-content h2 {
    font-size: 2rem;
    text-align: center;
    line-height: 1.3;
  }

  .bc-subtitle {
    text-align: center;
    font-size: 1.1rem;
  }

  .bc-features {
    gap: 1.25rem;
  }

  .bc-buttons {
    justify-content: center;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
  }

  .bc-buttons .btn {
    width: 100%;
    text-align: center;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .tech-categories {
    grid-template-columns: 1fr;
  }

  .tech-logos {
    grid-template-columns: 1fr;
  }

  .ai-technologies {
    grid-template-columns: 1fr;
  }

  .ai-tech-item h4 {
    white-space: normal;
    font-size: 1.2rem;
  }

  .ai-tech-item p {
    max-width: none;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }

  .cta-content h2 {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 3rem 1rem 2.5rem;
  }

  .hero-title {
    font-size: 2rem;
    margin-bottom: 1.25rem;
  }

  .hero-subtitle {
    font-size: 1.05rem;
    padding: 0 0.5rem;
  }

  .hero-stats {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    max-width: 350px;
  }

  .stat-item {
    padding: 1.25rem;
  }

  .activity-icon {
    width: 55px;
    height: 55px;
  }

  .stat-number {
    font-size: 1.5rem;
  }

  .btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }

  .process-step {
    flex-direction: column;
    text-align: center;
  }

  .step-number {
    margin-bottom: 1rem;
  }

  .values-showcase {
    gap: 1rem;
  }

  .value-card {
    padding: 1rem;
  }

  .testimonials-grid {
    gap: 1rem;
  }

  .testimonial-content {
    padding: 1.5rem;
  }

  .business-central-section {
    padding: 4rem 0;
  }

  .bc-logo-container {
    padding: 2rem;
    max-width: 100%;
  }

  .bc-icon {
    width: 80px;
    height: 80px;
  }

  .bc-icon svg {
    width: 48px;
    height: 48px;
  }

  .bc-logo-container h3 {
    font-size: 1.1rem;
  }

  .bc-logo-container h2 {
    font-size: 2rem;
  }

  .bc-text-content h2 {
    font-size: 1.85rem;
  }

  .bc-subtitle {
    font-size: 1.05rem;
    padding: 0 1rem;
  }

  .bc-features {
    gap: 1rem;
  }

  .bc-feature {
    padding: 1.25rem;
    flex-direction: column;
    text-align: center;
  }

  .bc-feature-icon {
    margin: 0 auto 1rem;
  }

  .bc-feature h4 {
    font-size: 1.1rem;
  }

  .bc-feature p {
    font-size: 0.9rem;
  }

  .bc-buttons {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 2.5rem 0.75rem 2rem;
  }

  .hero-title {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  .hero-subtitle {
    font-size: 1rem;
    padding: 0;
    margin-bottom: 2rem;
  }

  .hero-buttons {
    max-width: 100%;
  }

  .hero-stats {
    max-width: 100%;
    padding: 1.5rem 0;
  }

  .stat-item {
    padding: 1rem;
  }

  .activity-icon {
    width: 50px;
    height: 50px;
  }

  .stat-label {
    font-size: 0.9rem;
  }

  .floating-card {
    padding: 1rem;
  }

  .code-preview {
    font-size: 0.8rem;
  }

  .service-card {
    padding: 1.5rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .tech-logo {
    padding: 0.75rem;
    font-size: 0.8rem;
  }

  .process-step {
    padding: 1.5rem;
  }

  .step-number {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }

  .cta-content h2 {
    font-size: 1.8rem;
  }

  .business-central-section {
    padding: 3rem 0;
  }

  .bc-content-grid {
    gap: 2rem;
  }

  .bc-logo-container {
    padding: 1.5rem;
  }

  .bc-icon {
    width: 70px;
    height: 70px;
  }

  .bc-icon svg {
    width: 42px;
    height: 42px;
  }

  .bc-logo-container h3 {
    font-size: 0.95rem;
  }

  .bc-logo-container h2 {
    font-size: 1.65rem;
  }

  .bc-text-content h2 {
    font-size: 1.65rem;
    padding: 0 0.5rem;
  }

  .bc-subtitle {
    font-size: 0.95rem;
    padding: 0 0.5rem;
  }

  .bc-features {
    gap: 0.875rem;
  }

  .bc-feature {
    padding: 1rem;
    flex-direction: column;
  }

  .bc-feature-icon {
    width: 40px;
    height: 40px;
    margin: 0 auto 0.75rem;
  }

  .bc-feature-icon svg {
    width: 20px;
    height: 20px;
  }

  .bc-feature h4 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .bc-feature p {
    font-size: 0.875rem;
    line-height: 1.5;
  }

  .bc-buttons {
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1.5rem;
  }

  .bc-buttons .btn {
    width: 100%;
    text-align: center;
    padding: 0.875rem 1.5rem;
    font-size: 0.9rem;
  }
}
</style>
