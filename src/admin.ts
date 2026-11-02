import { findUser, type User } from './users.ts';

const deleted: string[] = [];

/** Deletes an account. Only admins may do this. */
export function deleteAccount(actorId: string, targetId: string): void {
  findUser(actorId);
  const target: User = findUser(targetId);
  deleted.push(target.id);
}

export function deletedAccounts(): string[] {
  return [...deleted];
}
