<template>
  <section v-if="shouldShow" class="ai-section">
    <h3 class="ai-section-title">
      {{ titleLabel }}
    </h3>
    <p v-if="subtitleLabel" class="ai-section-subtitle">
      {{ subtitleLabel }}
    </p>
    <div class="ai-technologies">
      <CardCollectionCard v-for="card in cards" :key="card.key" :card="card" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import CardCollectionCard from "~/components/card collection/card/Card.vue";

export interface CardItem {
  key: string;
  titleKey?: string;
  title?: string;
  descriptionKey?: string;
  description?: string;
  iconPaths: string[];
  theme: string;
}

const props = withDefaults(
  defineProps<{
    titleKey?: string;
    title?: string;
    subtitleKey?: string;
    subtitle?: string;
    cards: CardItem[];
    type?: string;
    excludeAI?: boolean;
  }>(),
  {
    titleKey: undefined,
    title: undefined,
    subtitleKey: undefined,
    subtitle: undefined,
    type: undefined,
    excludeAI: false,
  },
);

const { t } = useI18n();

const titleLabel = computed(
  () => props.title ?? (props.titleKey ? t(props.titleKey) : ""),
);

const subtitleLabel = computed(
  () => props.subtitle ?? (props.subtitleKey ? t(props.subtitleKey) : ""),
);

const shouldShow = computed(() => {
  if (props.excludeAI) return false;
  if (!props.type) return true;
  return props.type === "webdevelopment" || props.type === "all";
});
</script>

<style scoped>
.ai-section {
  margin-top: 4rem;
  padding-top: 3rem;
}

.ai-section-title {
  font-family: var(--tmc-font-heading);
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--tmc-normal-blue);
  background: linear-gradient(135deg, var(--tmc-normal-blue), #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.ai-section-subtitle {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 1.1rem;
  font-style: italic;
  background: linear-gradient(135deg, #666, #8b5cf6, #666);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #666; /* Fallback */
}

.ai-technologies {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

@media (max-width: 968px) {
  .ai-technologies {
    grid-template-columns: repeat(2, 1fr);
    max-width: 600px;
  }
}

@media (max-width: 768px) {
  .ai-technologies {
    grid-template-columns: 1fr;
    max-width: 100%;
  }
}
</style>
