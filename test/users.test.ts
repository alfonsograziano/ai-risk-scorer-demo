import { test } from 'node:test';
import assert from 'node:assert/strict';
import { greeting } from '../src/users.ts';

test('greeting uses the name', () => {
  assert.equal(greeting('u1'), 'Welcome back, ADA!');
});
