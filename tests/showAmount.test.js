const { expect } = require('@jest/globals');
const showAmount = require('../src/services/showAmount')
const database = {"todos":[{"id":1,"task":"task","description":"-","deadline":"2022-05-25","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"},
                            {"id":2,"task":"task","description":"-","deadline":"2022-09-25","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"},
                            {"id":3,"task":"task","description":"-","deadline":"2022-09-15","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"},
                            {"id":4,"task":"task","description":"-","deadline":"2022-05-25","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"},
                            {"id":5,"task":"task","description":"-","deadline":"2022-09-25","whenWasCreated":"2022-06-23","whenWasDone":"2022-06-24","progress":"done"},
                            {"id":6,"task":"task","description":"-","deadline":"2022-09-15","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"},
                            {"id":7,"task":"task","description":"-","deadline":"2022-09-25","whenWasCreated":"2022-06-23","whenWasDone":"2022-06-24","progress":"done"},
                            {"id":8,"task":"task","description":"-","deadline":"2022-09-15","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"}
                          ],
                    "counter":8
                  };        
const res1 = showAmount([], database);

describe('test for showAmount method', () => {
  test('should return number of done', () => {
    expect(res1[0]).toBe(2);
  });

  test('should return number of undone', () => {
    expect(res1[1]).toBe(6);
  });

  test('should return number of overdued', () => {   
    expect(res1[2]).toBe(2);
  });
});