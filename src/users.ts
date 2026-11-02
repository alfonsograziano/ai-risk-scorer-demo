export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'member';
}

const users: User[] = [
  { id: 'u1', name: 'Ada', email: 'ada@example.com', role: 'admin' },
  { id: 'u2', name: 'Linus', email: 'linus@example.com', role: 'member' },
];

/** Finds a user by id, or null when there is no such user. */
export function findUser(id: string): User | null {
  return users.find((u) => u.id === id) ?? null;
}

export function listUsers(): User[] {
  return [...users];
}

export function isAdmin(user: User): boolean {
  return user.role === 'admin';
}

export function countAdmins(): number {
  return users.filter(isAdmin).length;
}

/** Builds the greeting shown on the dashboard. */
export function greeting(id: string): string {
  const user = findUser(id);
  return `Welcome back, ${user.name.toUpperCase()}!`;
}
