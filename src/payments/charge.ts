import { config } from '../config.ts';

export interface ChargeResult {
  ok: boolean;
  tries: number;
}

export async function charge(amountCents: number, send: () => Promise<boolean>): Promise<ChargeResult> {
  let tries = 0;
  const limit = config.retryFailedCharges ? config.maxRetries : 1;
  while (tries < limit) {
    tries++;
    if (await send()) return { ok: true, tries };
  }
  return { ok: false, tries };
}
