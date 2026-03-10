import { useMailerStore } from "~/stores/mailer";
import type { SendMailPayload } from "~/stores/mailer";

/**
 * Composable to easily use the mailer store in components
 */
export const useMailer = () => {
  const mailerStore = useMailerStore();

  const sendMail = async (payload: SendMailPayload) => {
    return await mailerStore.sendMail(payload);
  };

  const resetMailer = () => {
    mailerStore.resetState();
  };

  return {
    // State
    loading: computed(() => mailerStore.isLoading),
    error: computed(() => mailerStore.getLastError),
    lastMailId: computed(() => mailerStore.getLastMailId),
    hasError: computed(() => mailerStore.hasError),

    // Actions
    sendMail,
    resetMailer,
  };
};
