<template>
  <section class="card-demo">
    <div class="container">
      <p class="eyebrow">Komponenten</p>
      <h1>Cards</h1>
      <p class="subtitle">Einzelkarte als wiederverwendbare Komponente.</p>

      <div class="card-preview">
        <CardCollectionCard :card="card" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CardCollectionCard from "~/components/card collection/card/Card.vue";

const card = {
  key: "documentRecognition",
  title: "Document Recognition",
  description: "Extract structured data from documents.",
  iconPaths: [
    "M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z",
  ],
  theme: "recognition",
};
</script>

<style scoped>
.card-demo {
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

.card-preview {
  max-width: 320px;
  margin: 0 auto;
}
</style>
