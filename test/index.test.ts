import { expect } from 'chai';
import { calc } from '../src/index';

suite('index', () => {
  test('calc() add x to y', () => {
    expect(calc(2, 3)).to.equal(5);
  });
});
