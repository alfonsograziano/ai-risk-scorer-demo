import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formatDate } from '../src/date.ts';

test('formats as YYYY-MM-DD in UTC', () => {
  assert.equal(formatDate(new Date(Date.UTC(2026, 0, 5, 23, 0))), '2026-01-05');
});
