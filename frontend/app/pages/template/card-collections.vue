<template>
  <section class="card-demo">
    <div class="container">
      <p class="eyebrow">Komponenten</p>
      <h1>Card Collections</h1>
      <p class="subtitle">Sammlung aus mehreren Karten in einer Komponente.</p>

      <CardCollection
        title="AI Technologies"
        subtitle="Sample data via props"
        :cards="cards"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import CardCollection, {
  type CardItem,
} from "~/components/card collection/CardCollection.vue";

const cards: CardItem[] = [
  {
    key: "documentRecognition",
    title: "Document Recognition",
    description: "Extract structured data from documents.",
    iconPaths: [
      "M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z",
    ],
    theme: "recognition",
  },
  {
    key: "objectCounting",
    title: "Object Counting",
    description: "Count objects with high precision.",
    iconPaths: [
      "M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,12.5A1.5,1.5 0 0,1 10.5,11A1.5,1.5 0 0,1 12,9.5A1.5,1.5 0 0,1 13.5,11A1.5,1.5 0 0,1 12,12.5Z",
    ],
    theme: "counting",
  },
  {
    key: "smartPrompting",
    title: "Smart Prompting",
    description: "Chain prompts for better outputs.",
    iconPaths: ["M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"],
    theme: "prompting",
  },
  {
    key: "machineLearning",
    title: "Machine Learning",
    description: "Custom ML pipelines for your data.",
    iconPaths: [
      "M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z",
    ],
    theme: "ml",
  },
];
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
</style>
