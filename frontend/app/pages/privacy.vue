<template>
  <div class="privacy-policy">
    <div class="container">
      <!-- Header Section -->
      <header class="privacy-header">
        <h1 class="main-title">{{ $t("privacy.title") }}</h1>
        <p class="subtitle">
          {{ $t("privacy.subtitle") }}
        </p>
      </header>

      <!-- Table of Contents -->
      <nav class="table-of-contents">
        <h3>{{ $t("privacy.toc.title") }}</h3>
        <ul>
          <li>
            <a href="#verantwortlicher"
              >1. {{ $t("privacy.toc.sections.responsible") }}</a
            >
          </li>
          <li>
            <a href="#ueberblick"
              >2. {{ $t("privacy.toc.sections.overview") }}</a
            >
          </li>
          <li>
            <a href="#datenerfassung"
              >3. {{ $t("privacy.toc.sections.dataCollection") }}</a
            >
          </li>
          <li>
            <a href="#rechtsgrundlage"
              >4. {{ $t("privacy.toc.sections.legalBasis") }}</a
            >
          </li>
          <!--
          <li>
            <a href="#google-analytics"
              >5. {{ $t("privacy.toc.sections.googleAnalytics") }}</a
            >
          </li>
          -->
          <li>
            <a href="#datenloeschung"
              >5. {{ $t("privacy.toc.sections.dataDeletion") }}</a
            >
          </li>
          <li>
            <a href="#betroffenenrechte"
              >6. {{ $t("privacy.toc.sections.rights") }}</a
            >
          </li>
          <li>
            <a href="#beschwerderecht"
              >7. {{ $t("privacy.toc.sections.complaint") }}</a
            >
          </li>
          <li>
            <a href="#cookies">8. {{ $t("privacy.toc.sections.cookies") }}</a>
          </li>
          <li>
            <a href="#datensicherheit"
              >9. {{ $t("privacy.toc.sections.security") }}</a
            >
          </li>
          <li>
            <a href="#kontakt">10. {{ $t("privacy.toc.sections.contact") }}</a>
          </li>
          <li>
            <a href="#aktualitaet"
              >11. {{ $t("privacy.toc.sections.updates") }}</a
            >
          </li>
        </ul>
      </nav>

      <!-- Main Content -->
      <main class="privacy-content">
        <!-- Section 1 -->
        <section id="verantwortlicher" class="privacy-section">
          <div class="section-header">
            <h2>1. {{ $t("privacy.sections.responsible.title") }}</h2>
            <div class="section-icon">📋</div>
          </div>
          <div class="content-card">
            <p>
              {{ $t("privacy.sections.responsible.intro") }}
            </p>
            <div class="company-info">
              <div class="company-name">
                <strong>{{
                  $t("privacy.sections.responsible.company")
                }}</strong>
              </div>
              <div class="company-details">
                <div>{{ $t("privacy.sections.responsible.name") }}</div>
                <div>{{ $t("privacy.sections.responsible.address") }}</div>
                <div>{{ $t("privacy.sections.responsible.city") }}</div>
                <div>{{ $t("privacy.sections.responsible.country") }}</div>
              </div>
            </div>
            <div class="contact-info">
              <div class="contact-item">
                <span class="contact-label"
                  >📞 {{ $t("privacy.sections.responsible.phone") }}</span
                >
                <span>+49 1573 335 6316</span>
              </div>
              <div class="contact-item">
                <span class="contact-label"
                  >✉️ {{ $t("privacy.sections.responsible.email") }}</span
                >
                <a href="mailto:info@tuemedia-it.de" class="contact-link"
                  >info@tuemedia-it.de</a
                >
              </div>
              <div class="contact-item">
                <span class="contact-label"
                  >🌐 {{ $t("privacy.sections.responsible.website") }}</span
                >
                <a href="https://www.tuemedia-it.de" class="contact-link"
                  >www.tuemedia-it.de</a
                >
              </div>
            </div>
          </div>
        </section>

        <!-- Section 2 -->
        <section id="ueberblick" class="privacy-section">
          <div class="section-header">
            <h2>2. {{ $t("privacy.sections.overview.title") }}</h2>
            <div class="section-icon">🔍</div>
          </div>
          <div class="content-card">
            <p>
              {{ $t("privacy.sections.overview.content") }}
            </p>
          </div>
        </section>

        <!-- Section 3 -->
        <section id="datenerfassung" class="privacy-section">
          <div class="section-header">
            <h2>3. {{ $t("privacy.sections.dataCollection.title") }}</h2>
            <div class="section-icon">📊</div>
          </div>

          <div class="subsection">
            <h3>
              {{ $t("privacy.sections.dataCollection.websiteVisit.title") }}
            </h3>
            <div class="content-card">
              <p>
                {{ $t("privacy.sections.dataCollection.websiteVisit.content") }}
              </p>
              <ul class="data-list">
                <li>
                  <span class="list-icon">📡</span
                  >{{
                    $t(
                      "privacy.sections.dataCollection.websiteVisit.data.ipAddress"
                    )
                  }}
                </li>
                <li>
                  <span class="list-icon">🕒</span
                  >{{
                    $t(
                      "privacy.sections.dataCollection.websiteVisit.data.dateTime"
                    )
                  }}
                </li>
                <li>
                  <span class="list-icon">📄</span
                  >{{
                    $t(
                      "privacy.sections.dataCollection.websiteVisit.data.fileName"
                    )
                  }}
                </li>
                <li>
                  <span class="list-icon">🔗</span
                  >{{
                    $t(
                      "privacy.sections.dataCollection.websiteVisit.data.referrer"
                    )
                  }}
                </li>
                <li>
                  <span class="list-icon">🌐</span
                  >{{
                    $t(
                      "privacy.sections.dataCollection.websiteVisit.data.browser"
                    )
                  }}
                </li>
                <li>
                  <span class="list-icon">🏢</span
                  >{{
                    $t(
                      "privacy.sections.dataCollection.websiteVisit.data.provider"
                    )
                  }}
                </li>
              </ul>
            </div>
          </div>

          <div class="subsection">
            <h3>{{ $t("privacy.sections.dataCollection.hosting.title") }}</h3>
            <div class="content-card hosting-info">
              <p>
                {{ $t("privacy.sections.dataCollection.hosting.content") }}
              </p>
            </div>
          </div>
        </section>

        <!-- Section 4 -->
        <section id="rechtsgrundlage" class="privacy-section">
          <div class="section-header">
            <h2>4. {{ $t("privacy.sections.legalBasis.title") }}</h2>
            <div class="section-icon">⚖️</div>
          </div>
          <div class="content-card">
            <p>
              {{ $t("privacy.sections.legalBasis.intro") }}
            </p>
            <ul class="legal-basis-list">
              <li>
                <span class="legal-icon">📋</span>
                <strong>Art. 6 Abs. 1 lit. a DSGVO</strong> -
                {{ $t("privacy.sections.legalBasis.consent") }}
              </li>
              <li>
                <span class="legal-icon">🛡️</span>
                <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> -
                {{ $t("privacy.sections.legalBasis.legitimateInterest") }}
              </li>
            </ul>
          </div>
        </section>

        <!-- Section 5
        <section id="google-analytics" class="privacy-section">
          <div class="section-header">
            <h2>5. {{ $t("privacy.sections.googleAnalytics.title") }}</h2>
            <div class="section-icon">📈</div>
          </div>
          <div class="content-card google-analytics">
            <div class="analytics-warning">
              <span class="warning-icon">⚠️</span>
              <p>
                <strong>{{
                  $t("privacy.sections.googleAnalytics.warning")
                }}</strong>
                {{ $t("privacy.sections.googleAnalytics.warningText") }}
              </p>
            </div>
            <p>
              {{ $t("privacy.sections.googleAnalytics.description") }}
            </p>
            <div class="analytics-feature">
              <h4>
                {{
                  $t("privacy.sections.googleAnalytics.ipAnonymization.title")
                }}
              </h4>
              <p>
                {{
                  $t("privacy.sections.googleAnalytics.ipAnonymization.content")
                }}
              </p>
            </div>
            <p>
              {{ $t("privacy.sections.googleAnalytics.legalBasis") }}
            </p>
            <div class="external-link">
              <p>
                {{ $t("privacy.sections.googleAnalytics.moreInfo") }}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener"
                  class="external-link-button"
                  >{{
                    $t("privacy.sections.googleAnalytics.googlePrivacyLink")
                  }}
                  🔗</a
                >
              </p>
            </div>
          </div>
        </section>
        -->

        <!-- Section 6 -->
        <section id="datenloeschung" class="privacy-section">
          <div class="section-header">
            <h2>5. {{ $t("privacy.sections.dataDeletion.title") }}</h2>
            <div class="section-icon">🗑️</div>
          </div>
          <div class="content-card">
            <p>
              {{ $t("privacy.sections.dataDeletion.content") }}
            </p>
          </div>
        </section>

        <!-- Section 7 -->
        <section id="betroffenenrechte" class="privacy-section">
          <div class="section-header">
            <h2>6. {{ $t("privacy.sections.rights.title") }}</h2>
            <div class="section-icon">👤</div>
          </div>
          <div class="content-card">
            <p>{{ $t("privacy.sections.rights.intro") }}</p>
            <div class="rights-grid">
              <div class="right-item">
                <span class="right-icon">ℹ️</span>
                <div>
                  <strong>{{
                    $t("privacy.sections.rights.list.information")
                  }}</strong>
                  <small>{{
                    $t("privacy.sections.rights.articles.information")
                  }}</small>
                </div>
              </div>
              <div class="right-item">
                <span class="right-icon">✏️</span>
                <div>
                  <strong>{{
                    $t("privacy.sections.rights.list.correction")
                  }}</strong>
                  <small>{{
                    $t("privacy.sections.rights.articles.correction")
                  }}</small>
                </div>
              </div>
              <div class="right-item">
                <span class="right-icon">🗑️</span>
                <div>
                  <strong>{{
                    $t("privacy.sections.rights.list.deletion")
                  }}</strong>
                  <small>{{
                    $t("privacy.sections.rights.articles.deletion")
                  }}</small>
                </div>
              </div>
              <div class="right-item">
                <span class="right-icon">⏸️</span>
                <div>
                  <strong>{{
                    $t("privacy.sections.rights.list.restriction")
                  }}</strong>
                  <small>{{
                    $t("privacy.sections.rights.articles.restriction")
                  }}</small>
                </div>
              </div>
              <div class="right-item">
                <span class="right-icon">📤</span>
                <div>
                  <strong>{{
                    $t("privacy.sections.rights.list.portability")
                  }}</strong>
                  <small>{{
                    $t("privacy.sections.rights.articles.portability")
                  }}</small>
                </div>
              </div>
              <div class="right-item">
                <span class="right-icon">🚫</span>
                <div>
                  <strong>{{
                    $t("privacy.sections.rights.list.objection")
                  }}</strong>
                  <small>{{
                    $t("privacy.sections.rights.articles.objection")
                  }}</small>
                </div>
              </div>
              <div class="right-item">
                <span class="right-icon">↩️</span>
                <div>
                  <strong>{{
                    $t("privacy.sections.rights.list.withdrawal")
                  }}</strong>
                  <small>{{
                    $t("privacy.sections.rights.articles.withdrawal")
                  }}</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Section 8 -->
        <section id="beschwerderecht" class="privacy-section">
          <div class="section-header">
            <h2>7. {{ $t("privacy.sections.complaint.title") }}</h2>
            <div class="section-icon">📋</div>
          </div>
          <div class="content-card">
            <p>
              {{ $t("privacy.sections.complaint.content") }}
            </p>
          </div>
        </section>

        <!-- Section 9 -->
        <section id="cookies" class="privacy-section">
          <div class="section-header">
            <h2>8. {{ $t("privacy.sections.cookies.title") }}</h2>
            <div class="section-icon">🍪</div>
          </div>
          <div class="content-card">
            <p>
              {{ $t("privacy.sections.cookies.content") }}
            </p>
          </div>
        </section>

        <!-- Section 10 -->
        <section id="datensicherheit" class="privacy-section">
          <div class="section-header">
            <h2>9. {{ $t("privacy.sections.security.title") }}</h2>
            <div class="section-icon">🔒</div>
          </div>
          <div class="content-card security-info">
            <div class="security-feature">
              <span class="security-icon">🔐</span>
              <div>
                <h4>{{ $t("privacy.sections.security.ssl.title") }}</h4>
                <p>
                  {{ $t("privacy.sections.security.ssl.content") }}
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Section 11 -->
        <section id="kontakt" class="privacy-section">
          <div class="section-header">
            <h2>10. {{ $t("privacy.sections.contact.title") }}</h2>
            <div class="section-icon">📞</div>
          </div>
          <div class="content-card">
            <p>{{ $t("privacy.sections.contact.intro") }}</p>
            <div class="contact-methods">
              <div class="contact-method">
                <span class="contact-icon">✉️</span>
                <div>
                  <strong>{{ $t("privacy.sections.contact.email") }}</strong>
                  <a href="mailto:info@tuemedia-it.de" class="contact-link"
                    >info@tuemedia-it.de</a
                  >
                </div>
              </div>
              <div class="contact-method">
                <span class="contact-icon">📞</span>
                <div>
                  <strong>{{ $t("privacy.sections.contact.phone") }}</strong>
                  <span>+49 1573 335 6316</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Section 12 -->
        <section id="aktualitaet" class="privacy-section">
          <div class="section-header">
            <h2>11. {{ $t("privacy.sections.updates.title") }}</h2>
            <div class="section-icon">📅</div>
          </div>
          <div class="content-card update-info">
            <div class="last-updated">
              <span class="date-icon">📋</span>
              <div>
                <p>
                  {{ $t("privacy.sections.updates.currentDate") }}
                  <strong class="highlight-date">{{
                    $t("privacy.sections.updates.month")
                  }}</strong
                  >.
                </p>
                <p class="update-notice">
                  {{ $t("privacy.sections.updates.changeNotice") }}
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Back to Top Button -->
        <div class="back-to-top">
          <a href="#" class="back-to-top-btn">
            <span>↑</span>
            <span>{{ $t("privacy.backToTop") }}</span>
          </a>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* Modern Privacy Policy Styling */
.privacy-policy {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
  line-height: 1.7;
  color: #334155;
}

.container {
  box-sizing: border-box; /* ensures padding doesn't add to total width */
  padding: 0 2rem; /* Adds breathing room when viewport < 1400px */
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

/* Header Section */
.privacy-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
}

.main-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  background: linear-gradient(135deg, #1e40af, #3b82f6, #06b6d4);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin: 0 0 1rem 0;
  letter-spacing: -0.02em;
}

.subtitle {
  font-size: 1.2rem;
  color: #64748b;
  font-weight: 400;
  margin: 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Table of Contents */
.table-of-contents {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.table-of-contents h3 {
  margin: 0 0 1.5rem 0;
  font-size: 1.5rem;
  color: #1e40af;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.table-of-contents h3::before {
  content: "📑";
  font-size: 1.2rem;
}

.table-of-contents ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 0.5rem;
}

.table-of-contents li {
  margin: 0;
}

.table-of-contents a {
  display: block;
  padding: 0.75rem 1rem;
  color: #475569;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s ease;
  border-left: 3px solid transparent;
}

.table-of-contents a:hover {
  background: #f1f5f9;
  color: #1e40af;
  border-left-color: #3b82f6;
  transform: translateX(4px);
}

/* Main Content */
.privacy-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Privacy Sections */
.privacy-section {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  scroll-margin-top: 2rem;
}

.privacy-section:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  transform: translateY(-2px);
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f1f5f9;
}

.section-header h2 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
  color: #1e40af;
  flex: 1;
}

.section-icon {
  font-size: 2rem;
  opacity: 0.8;
  margin-left: 1rem;
}

/* Content Cards */
.content-card {
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.content-card p {
  margin-bottom: 1rem;
}

.content-card p:last-child {
  margin-bottom: 0;
}

/* Company Info */
.company-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  border: 2px solid #dbeafe;
}

.company-name {
  font-size: 1.5rem;
  color: #1e40af;
  margin-bottom: 1rem;
}

.company-details div {
  margin: 0.25rem 0;
  color: #475569;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.contact-label {
  font-weight: 600;
  min-width: 100px;
}

.contact-link {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.contact-link:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

/* Lists */
.data-list,
.legal-basis-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.data-list li,
.legal-basis-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  margin: 0.5rem 0;
  background: white;
  border-radius: 8px;
  border-left: 4px solid #3b82f6;
  transition: all 0.2s ease;
}

.data-list li:hover,
.legal-basis-list li:hover {
  background: #f1f5f9;
  transform: translateX(4px);
}

.list-icon,
.legal-icon {
  font-size: 1.2rem;
  min-width: 24px;
}

/* Subsections */
.subsection {
  margin: 2rem 0;
}

.subsection h3 {
  font-size: 1.4rem;
  color: #1e40af;
  margin: 0 0 1rem 0;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.subsection h3::before {
  content: "▶";
  color: #3b82f6;
  font-size: 0.8em;
}

/* Special Cards */
.hosting-info {
  border-left: 4px solid #10b981;
  background: linear-gradient(135deg, #ecfdf5, #f0fdf4);
}

.google-analytics {
  border-left: 4px solid #f59e0b;
}

.analytics-warning {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #fef3c7;
  border: 1px solid #f59e0b;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.warning-icon {
  font-size: 1.5rem;
}

.analytics-feature {
  margin: 1.5rem 0;
  padding: 1rem;
  background: #dbeafe;
  border-radius: 8px;
  border-left: 4px solid #3b82f6;
}

.analytics-feature h4 {
  margin: 0 0 0.5rem 0;
  color: #1e40af;
  font-size: 1.1rem;
}

.external-link {
  margin-top: 1.5rem;
}

.external-link-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.external-link-button:hover {
  background: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

/* Rights Grid */
.rights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.right-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  transition: all 0.2s ease;
}

.right-item:hover {
  background: #f1f5f9;
  border-color: #3b82f6;
  transform: translateY(-2px);
}

.right-icon {
  font-size: 1.5rem;
  min-width: 32px;
}

.right-item strong {
  display: block;
  color: #1e40af;
  font-size: 0.95rem;
}

.right-item small {
  color: #64748b;
  font-size: 0.8rem;
}

/* Security Info */
.security-info {
  border-left: 4px solid #10b981;
}

.security-feature {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.security-icon {
  font-size: 2rem;
  color: #10b981;
  min-width: 40px;
}

.security-feature h4 {
  margin: 0 0 0.5rem 0;
  color: #1e40af;
  font-size: 1.2rem;
}

/* Contact Methods */
.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.contact-icon {
  font-size: 1.5rem;
  min-width: 32px;
}

/* Update Info */
.update-info {
  border-left: 4px solid #8b5cf6;
}

.last-updated {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.date-icon {
  font-size: 2rem;
  color: #8b5cf6;
  min-width: 40px;
}

.highlight-date {
  color: #8b5cf6;
  background: #ede9fe;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

.update-notice {
  margin-top: 1rem;
  font-style: italic;
  color: #64748b;
}

/* Back to Top */
.back-to-top {
  text-align: center;
  margin-top: 3rem;
}

.back-to-top-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
}

.back-to-top-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.6);
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  .privacy-section {
    padding: 1.5rem;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .section-icon {
    margin-left: 0;
  }

  .company-info {
    grid-template-columns: 1fr;
  }

  .table-of-contents ul {
    grid-template-columns: 1fr;
  }

  .rights-grid {
    grid-template-columns: 1fr;
  }

  .contact-methods {
    grid-template-columns: 1fr;
  }
}

/* Smooth Scrolling */
html {
  scroll-behavior: smooth;
}

/* Focus States for Accessibility */
.table-of-contents a:focus,
.contact-link:focus,
.external-link-button:focus,
.back-to-top-btn:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Print Styles */
@media print {
  .table-of-contents,
  .back-to-top {
    display: none;
  }

  .privacy-section {
    break-inside: avoid;
    box-shadow: none;
    border: 1px solid #ccc;
  }
}
</style>
