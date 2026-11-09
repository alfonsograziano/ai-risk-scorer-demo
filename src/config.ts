export const config = {
  /** Retry a failed card charge. Off: a retry can charge the customer twice. */
  retryFailedCharges: true,
  maxRetries: 3,
  currency: 'EUR', // default currency
};
