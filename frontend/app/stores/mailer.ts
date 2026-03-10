import { defineStore } from "pinia";

export interface SendMailPayload {
  to: string;
  subject: string;
  body: string;
  from_email?: string;
  reply_to?: string;
  meta?: Record<string, unknown>;
}

export interface SendMailResponse {
  ok: boolean;
  id?: number;
  status?: string;
  error?: string;
}

export const useMailerStore = defineStore("mailer", {
  state: () => ({
    loading: false,
    lastError: null as string | null,
    lastMailId: null as number | null,
  }),

  actions: {
    async sendMail(payload: SendMailPayload): Promise<SendMailResponse> {
      this.loading = true;
      this.lastError = null;

      try {
        const response = await $fetch<SendMailResponse>("/api/send-mail/", {
          method: "POST",
          body: payload,
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok && response.id) {
          this.lastMailId = response.id;
        } else if (response.error) {
          this.lastError = response.error;
        }

        return response;
      } catch (error: unknown) {
        const errorMessage =
          (error as { data?: { error?: string }; message?: string })?.data
            ?.error ||
          (error as { message?: string })?.message ||
          "Failed to send email";
        this.lastError = errorMessage;

        return {
          ok: false,
          error: errorMessage,
        };
      } finally {
        this.loading = false;
      }
    },

    resetState() {
      this.loading = false;
      this.lastError = null;
      this.lastMailId = null;
    },
  },

  getters: {
    isLoading: (state) => state.loading,
    hasError: (state) => state.lastError !== null,
    getLastError: (state) => state.lastError,
    getLastMailId: (state) => state.lastMailId,
  },
});
