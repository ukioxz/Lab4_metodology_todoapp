const { expect } = require('@jest/globals');
const showAmount = require('../src/services/showAmount')
const database = require('../db/testDb');
const res = showAmount([], database);

describe('test for showAmount method', () => {
  test('should return number of done', () => {
    expect(res[0]).toBe(0);
  });

  test('should return number of undone', () => {
    expect(res[1]).toBe(3);
  });

  test('should return number of overdued', () => {   
    expect(res[2]).toBe(1);
  });
});