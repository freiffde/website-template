<template>
  <div class="ai-tech-item">
    <div class="ai-card-flip">
      <div class="ai-card-front">
        <div class="ai-tech-icon" :class="themeClass">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path
              v-for="(path, index) in card.iconPaths"
              :key="index"
              :d="path"
            />
          </svg>
        </div>
        <h4>{{ titleLabel }}</h4>
      </div>
      <div class="ai-card-back" :class="backClass">
        <div class="ai-tech-icon" :class="themeClass">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path
              v-for="(path, index) in card.iconPaths"
              :key="index"
              :d="path"
            />
          </svg>
        </div>
        <p>{{ descriptionLabel }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface CardItem {
  key: string;
  titleKey?: string;
  title?: string;
  descriptionKey?: string;
  description?: string;
  iconPaths: string[];
  theme: string;
}

const props = defineProps<{
  card: CardItem;
}>();

const { t } = useI18n();

const titleLabel = computed(
  () => props.card.title ?? (props.card.titleKey ? t(props.card.titleKey) : ""),
);

const descriptionLabel = computed(
  () =>
    props.card.description ??
    (props.card.descriptionKey ? t(props.card.descriptionKey) : ""),
);

const themeClass = computed(() => `ai-${props.card.theme}`);
const backClass = computed(() => `ai-${props.card.theme}-back`);
</script>

<style scoped>
.ai-tech-item {
  perspective: 1000px;
  min-height: 240px;
  cursor: pointer;
}

.ai-card-flip {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 240px;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.ai-tech-item:hover .ai-card-flip {
  transform: rotateY(180deg);
}

.ai-card-front,
.ai-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.ai-card-front {
  background: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.1);
}

.ai-card-back {
  transform: rotateY(180deg);
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);
}

.ai-card-back.ai-recognition-back {
  background: linear-gradient(135deg, #6b46c1 0%, #7c5dbf 100%);
}

.ai-card-back.ai-counting-back {
  background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%);
}

.ai-card-back.ai-prompting-back {
  background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
}

.ai-card-back.ai-ml-back {
  background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
}

.ai-tech-icon {
  width: 50px;
  height: 50px;
  min-width: 50px;
  min-height: 50px;
  flex-shrink: 0;
  margin: 0 auto 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.ai-card-back .ai-tech-icon {
  margin-bottom: 0.75rem;
}

.ai-tech-icon svg {
  width: 24px;
  height: 24px;
}

.ai-tech-icon.ai-recognition {
  background: linear-gradient(135deg, #8b5cf6, #a78bfa);
}

.ai-tech-icon.ai-counting {
  background: linear-gradient(135deg, #06b6d4, #67e8f9);
}

.ai-tech-icon.ai-prompting {
  background: linear-gradient(135deg, #f59e0b, #fbbf24);
}

.ai-tech-icon.ai-ml {
  background: linear-gradient(135deg, #ef4444, #f87171);
}

.ai-card-front h4 {
  font-family: var(--tmc-font-heading);
  font-size: 1.15rem;
  margin-top: 0.5rem;
  color: var(--tmc-normal-blue);
  line-height: 1.3;
}

.ai-card-back p {
  color: white;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 968px) {
  .ai-card-front h4 {
    font-size: 1.3rem;
  }

  .ai-card-back p {
    font-size: 1rem;
  }

  .ai-card-flip {
    min-height: 200px;
  }

  .ai-tech-item {
    min-height: 200px;
  }
}
</style>
