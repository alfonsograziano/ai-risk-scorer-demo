import { test } from 'node:test';
import assert from 'node:assert/strict';
import { countAdmins } from '../src/users.ts';

test('counts the one admin in the seed data', () => {
  assert.equal(countAdmins(), 1);
});
