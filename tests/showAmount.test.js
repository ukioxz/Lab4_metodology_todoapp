const { expect } = require('@jest/globals');
const showAmount = require('../src/services/showAmount')
const database = {"todos":[{"id":1,"task":"task","description":"-","deadline":"2022-05-25","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"},
                            {"id":2,"task":"task","description":"-","deadline":"2022-09-25","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"},
                            {"id":3,"task":"task","description":"-","deadline":"2022-09-15","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"}],
                    "counter":3
                    };
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