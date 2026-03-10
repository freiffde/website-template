<template>
  <div class="contact-form-wrapper">
    <form class="contact-form" @submit.prevent="handleSubmit">
      <div v-if="formSuccess" class="alert alert-success">
        <Icon name="mdi:check-circle" />
        {{ $t("contact.form.success") }}
      </div>

      <div v-if="formError" class="alert alert-error">
        <Icon name="mdi:alert-circle" />
        {{ formError }}
      </div>

      <div class="form-group">
        <label for="name">{{ $t("contact.form.name.label") }}</label>
        <input
          id="name"
          v-model="formData.name"
          type="text"
          :placeholder="$t('contact.form.name.placeholder')"
          :class="{ 'has-error': errors.name }"
        />
        <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
      </div>

      <div class="form-group">
        <label for="email">{{ $t("contact.form.email.label") }}</label>
        <input
          id="email"
          v-model="formData.email"
          type="email"
          :placeholder="$t('contact.form.email.placeholder')"
          :class="{ 'has-error': errors.email }"
        />
        <span v-if="errors.email" class="error-message">{{
          errors.email
        }}</span>
      </div>

      <div class="form-group">
        <label for="subject">{{ $t("contact.form.subject.label") }}</label>
        <input
          id="subject"
          v-model="formData.subject"
          type="text"
          :placeholder="$t('contact.form.subject.placeholder')"
          :class="{ 'has-error': errors.subject }"
        />
        <span v-if="errors.subject" class="error-message">{{
          errors.subject
        }}</span>
      </div>

      <div class="form-group">
        <label for="message">{{ $t("contact.form.message.label") }}</label>
        <textarea
          id="message"
          v-model="formData.message"
          rows="6"
          :placeholder="$t('contact.form.message.placeholder')"
          :class="{ 'has-error': errors.message }"
        />
        <span v-if="errors.message" class="error-message">{{
          errors.message
        }}</span>
      </div>

      <button
        type="submit"
        class="btn btn-primary btn-large"
        :disabled="loading"
      >
        <Icon v-if="!loading" name="mdi:send" />
        <Icon v-else name="mdi:loading" class="spin" />
        {{ loading ? $t("contact.form.sending") : $t("contact.form.submit") }}
      </button>
    </form>
  </div>
</template>

<script setup>
const { t } = useI18n();
const { sendMail, loading } = useMailer();

// Form state
const formData = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const errors = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const formSuccess = ref(false);
const formError = ref("");

// Email validation
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Form validation
const validateForm = () => {
  let isValid = true;
  errors.name = "";
  errors.email = "";
  errors.subject = "";
  errors.message = "";

  if (!formData.name.trim()) {
    errors.name = t("contact.form.validation.nameRequired");
    isValid = false;
  }

  if (!formData.email.trim()) {
    errors.email = t("contact.form.validation.emailRequired");
    isValid = false;
  } else if (!isValidEmail(formData.email)) {
    errors.email = t("contact.form.validation.emailInvalid");
    isValid = false;
  }

  if (!formData.subject.trim()) {
    errors.subject = t("contact.form.validation.subjectRequired");
    isValid = false;
  }

  if (!formData.message.trim()) {
    errors.message = t("contact.form.validation.messageRequired");
    isValid = false;
  }

  return isValid;
};

// Handle form submission
const handleSubmit = async () => {
  formSuccess.value = false;
  formError.value = "";

  if (!validateForm()) {
    return;
  }

  const result = await sendMail({
    to: "info@tuemedia-it.de",
    subject: `Kontaktformular: ${formData.subject}`,
    body: `Name: ${formData.name}\nE-Mail: ${formData.email}\n\nNachricht:\n${formData.message}`,
    reply_to: formData.email,
    meta: {
      source: "contact_form",
      name: formData.name,
    },
  });

  if (result.ok) {
    formSuccess.value = true;
    // Reset form
    formData.name = "";
    formData.email = "";
    formData.subject = "";
    formData.message = "";
    // Scroll to success message
    setTimeout(() => {
      document
        .querySelector(".alert-success")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  } else {
    formError.value = result.error || t("contact.form.error");
  }
};
</script>

<style scoped>
.contact-form-wrapper {
  width: 100%;
}

.contact-form {
  width: 100%;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #333;
  font-size: 0.95rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e1e8ed;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  background: white;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

.form-group input.has-error,
.form-group textarea.has-error {
  border-color: #dc3545;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.error-message {
  display: block;
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.375rem;
}

.alert {
  padding: 1rem 1.25rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  line-height: 1.5;
}

.alert-success {
  background: #d4edda;
  border: 1px solid #c3e6cb;
  color: #155724;
}

.alert-error {
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
}

.btn {
  display: inline-flex;
  box-sizing: border-box;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  font-family: var(--tmc-font-body);
  font-weight: 600;
  font-size: 1rem;
  border-radius: 0.75rem;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: linear-gradient(135deg, var(--tmc-cyan), var(--tmc-normal-blue));
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(34, 192, 200, 0.3);
}

.btn-large {
  padding: 1.25rem 3rem;
  font-size: 1.125rem;
}

.contact-form button[type="submit"] {
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.contact-form button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .form-group input,
  .form-group textarea {
    font-size: 16px; /* Prevents zoom on iOS */
  }
}
</style>
