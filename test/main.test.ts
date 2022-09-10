import { describe, test, expect } from '@jest/globals';
import { hello } from '../src/main';

describe('Main BTGen module', ()=> {
  test('greets', () => {
    expect(hello).toBe('Hello World!');
  });
});
