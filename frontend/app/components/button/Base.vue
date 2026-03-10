<template>
  <component
    :is="componentTag"
    :class="buttonClasses"
    :to="to"
    :href="href"
    :type="buttonType"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

type ButtonVariant = "primary" | "outline" | "secondary";

type ButtonSize = "md" | "lg";

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariant;
    size?: ButtonSize;
    to?: string | Record<string, unknown>;
    href?: string;
    type?: "button" | "submit" | "reset";
  }>(),
  {
    variant: "primary",
    size: "md",
    to: undefined,
    href: undefined,
    type: "button",
  },
);

const componentTag = computed(() => {
  if (props.to) return "NuxtLink";
  if (props.href) return "a";
  return "button";
});

const buttonClasses = computed(() => [
  "button",
  `button-${props.variant}`,
  props.size === "lg" ? "button-large" : null,
]);

const buttonType = computed(() =>
  componentTag.value === "button" ? props.type : undefined,
);
</script>

<style scoped>
.button {
  --button-primary: #011b3b;
  --button-accent: #ffbd59;
  --button-text: #ffffff;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  background: var(--button-primary);
  color: var(--button-text);
  font-weight: 600;
  font-size: 1rem;
  border: 1px solid transparent;
  box-shadow: 0 10px 24px rgba(1, 27, 59, 0.08);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    color 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 40px rgba(1, 27, 59, 0.12);
}

.button:disabled,
.button[aria-disabled="true"] {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.button-primary {
  background: var(--button-primary);
  color: var(--button-text);
}

.button-outline {
  background: transparent;
  color: var(--button-primary);
  border-color: var(--button-primary);
  box-shadow: none;
}

.button-outline:hover {
  background: var(--button-primary);
  color: var(--button-text);
}

.button-secondary {
  background: var(--button-accent);
  color: var(--button-primary);
}

.button-secondary:hover {
  box-shadow: 0 20px 40px rgba(255, 189, 89, 0.35);
}

.button-large {
  padding: 1rem 2.5rem;
  font-size: 1.05rem;
}
</style>
