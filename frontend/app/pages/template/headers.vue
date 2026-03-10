<template>
  <section class="header-demo">
    <div class="container">
      <p class="eyebrow">Komponenten</p>
      <h1>Headers</h1>
      <p class="subtitle">Verfügbare Header-Varianten für das Template.</p>

      <div class="component-grid">
        <div class="component-card">
          <h2>AppHeader</h2>
          <p class="component-desc">
            Standard-Navigation mit Dropdown-Menü und mobiler Hamburger-Ansicht.
          </p>
          <div class="component-preview">
            <NavigationAppHeader />
          </div>
        </div>

        <div class="component-card">
          <h2>FlatHeader</h2>
          <p class="component-desc">
            Schlichter Header mit horizontaler Nav, mobilem Hamburger-Menü und
            Brand-Slot. Geeignet für Landingpages ohne Dropdowns.
          </p>
          <div class="component-preview">
            <NavigationFlatHeader>
              <template #brand>
                <NuxtLink to="/">
                  <img
                    src="@/assets/logo/tuemedia.svg"
                    alt="Tuemedia"
                    class="demo-logo"
                  />
                </NuxtLink>
              </template>
            </NavigationFlatHeader>
          </div>
        </div>

        <div class="component-card">
          <h2>CtaHeader</h2>
          <p class="component-desc">
            Header mit Nav-Links, aktivem Unterstrich-Zustand und einem
            optionalen CTA-Button rechts. Mobil wird die Nav durch ein
            Hamburger-Menü ersetzt.
          </p>
          <div class="component-preview">
            <NavigationCtaHeader>
              <template #brand>
                <NuxtLink to="/">
                  <img
                    src="@/assets/logo/tuemedia.svg"
                    alt="Tuemedia"
                    class="demo-logo"
                  />
                </NuxtLink>
              </template>
              <template #cta>
                <ButtonBase size="lg" class="nav-cta"
                  >Beratung anfragen</ButtonBase
                >
              </template>
            </NavigationCtaHeader>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.header-demo {
  padding: 6rem 0;
}

.container {
  width: max(400px, 92%);
  margin: 0 auto;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.75rem;
  font-weight: 600;
  color: #7a8599;
  margin-bottom: 0.5rem;
}

h1 {
  font-size: clamp(2rem, 3vw, 2.75rem);
  margin-bottom: 0.5rem;
  color: #011b3b;
}

.subtitle {
  max-width: 640px;
  color: #4b5c73;
  margin-bottom: 2.5rem;
}

.component-grid {
  display: grid;
  gap: 1.5rem;
}

.component-card {
  background: #f5f3ef;
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid #e2e6ee;
}

.component-card h2 {
  font-size: 1.1rem;
  color: #011b3b;
  margin-bottom: 0.4rem;
}

.component-desc {
  color: #4b5c73;
  font-size: 0.9rem;
  margin-bottom: 1.25rem;
}

.component-preview {
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid #e2e6ee;
}

.demo-logo {
  height: 40px;
  width: auto;
  display: block;
}
</style>
