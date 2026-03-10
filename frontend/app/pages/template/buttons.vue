<template>
  <section class="button-demo">
    <div class="container">
      <p class="eyebrow">Komponenten</p>
      <h1>Buttons</h1>
      <p class="subtitle">
        Varianten basierend auf dem Referenz-Design, als wiederverwendbare
        Komponenten.
      </p>

      <div class="button-grid">
        <div class="button-card">
          <h2>Standard</h2>
          <div class="button-row">
            <ButtonBase>Primary</ButtonBase>
            <ButtonBase variant="outline">Outline</ButtonBase>
            <ButtonBase variant="secondary">Secondary</ButtonBase>
          </div>
        </div>

        <div class="button-card">
          <h2>Links</h2>
          <div class="button-row">
            <ButtonBase to="/">NuxtLink</ButtonBase>
            <ButtonBase
              variant="outline"
              href="https://example.com"
              target="_blank"
              rel="noreferrer"
            >
              External Link
            </ButtonBase>
          </div>
        </div>

        <div class="button-card">
          <h2>Large</h2>
          <div class="button-row">
            <ButtonBase size="lg">Large Primary</ButtonBase>
            <ButtonBase variant="outline" size="lg">Large Outline</ButtonBase>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.button-demo {
  padding: 6rem 0;
}

.container {
  width: min(1100px, 92%);
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

.button-grid {
  display: grid;
  gap: 1.5rem;
}

.button-card {
  background: #f5f3ef;
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid #e2e6ee;
}

.button-card h2 {
  font-size: 1.1rem;
  color: #011b3b;
  margin-bottom: 1rem;
}

.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
