<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="modal-overlay" @click="closeModal">
        <div class="modal-container" @click.stop>
          <div class="modal-header">
            <h2>{{ $t("contact.form.title") }}</h2>
            <button class="modal-close" aria-label="Close" @click="closeModal">
              <Icon name="mdi:close" size="24" />
            </button>
          </div>
          <div class="modal-body">
            <p class="modal-subtitle">{{ $t("contact.form.subtitle") }}</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const isOpen = ref(false);

const openModal = () => {
  isOpen.value = true;
  // Prevent body scroll when modal is open
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  isOpen.value = false;
  // Restore body scroll
  document.body.style.overflow = "";
};

// Close modal on Escape key
onMounted(() => {
  const handleEscape = (event) => {
    if (event.key === "Escape" && isOpen.value) {
      closeModal();
    }
  };
  window.addEventListener("keydown", handleEscape);

  // Cleanup
  onUnmounted(() => {
    window.removeEventListener("keydown", handleEscape);
    document.body.style.overflow = "";
  });
});

// Expose methods to parent
defineExpose({
  openModal,
  closeModal,
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
  overflow-y: auto;
}

.modal-container {
  background: white;
  border-radius: 16px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid #e2e8f0;
}

.modal-header h2 {
  font-family: var(--tmc-font-heading);
  font-size: 1.75rem;
  margin: 0;
  background: linear-gradient(135deg, var(--tmc-normal-blue), #22c0c8, #408bc6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #1a202c; /* Fallback */
}

.modal-close {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4a5568;
  transition: all 0.2s ease;
  border-radius: 50%;
}

.modal-close:hover {
  background: #f7fafc;
  color: #1a202c;
}

.modal-body {
  padding: 2rem;
}

.modal-subtitle {
  text-align: center;
  color: #666;
  font-size: 1rem;
  margin: 0 0 2rem;
}

/* Modal transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(0.9) translateY(-20px);
}

/* Responsive design */
@media (max-width: 768px) {
  .modal-container {
    max-height: 100vh;
    border-radius: 0;
    margin: 0;
  }

  .modal-header {
    padding: 1.5rem 1.5rem 1rem;
  }

  .modal-header h2 {
    font-size: 1.5rem;
  }

  .modal-body {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .modal-overlay {
    padding: 0;
  }

  .modal-header {
    padding: 1rem;
  }

  .modal-body {
    padding: 1rem;
  }
}
</style>
