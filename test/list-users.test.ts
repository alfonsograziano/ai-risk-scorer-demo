import { test } from 'node:test';
import assert from 'node:assert/strict';
import { listUsers } from '../src/users.ts';

test('listUsers returns a copy the caller can change', () => {
  const a = listUsers();
  a.pop();
  assert.equal(listUsers().length, 2);
});
