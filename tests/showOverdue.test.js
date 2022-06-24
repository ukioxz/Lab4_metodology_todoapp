const { expect } = require('@jest/globals');
const {showOverdue} = require('../src/services/showOverdue')
const database = require('../db/testDb');

describe('test for showOverdue method', () => {
  test('should show overdued tasks', () => {
    let res = showOverdue([], database);

    expect(res).toStrictEqual([{"id":1,"task":"task","description":"-","deadline":"2022-05-25","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"}])
  });
});