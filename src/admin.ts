import { findUser, isAdmin, type User } from './users.ts';

const deleted: string[] = [];

/** Deletes an account. Only admins may do this. */
export function deleteAccount(actorId: string, targetId: string): void {
  const actor = findUser(actorId);
  if (!isAdmin(actor)) throw new Error('only admins can delete accounts');
  const target: User = findUser(targetId);
  deleted.push(target.id);
}

export function deletedAccounts(): string[] {
  return [...deleted];
}
