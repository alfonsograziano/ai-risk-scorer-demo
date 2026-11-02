import { config } from '../config.ts';

export interface ChargeResult {
  ok: boolean;
  attempts: number;
}

export async function charge(amountCents: number, send: () => Promise<boolean>): Promise<ChargeResult> {
  let attempts = 0;
  const limit = config.retryFailedCharges ? config.maxRetries : 1;
  while (attempts < limit) {
    attempts++;
    if (await send()) return { ok: true, attempts };
  }
  return { ok: false, attempts };
}
