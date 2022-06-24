const { expect } = require('@jest/globals');
const clear = require('../src/services/clear')

describe('test for delete method', () => {
  test('should delete done element', () => {
    const database = {"todos":[{"id":1,"task":"task","description":"-","deadline":"2022-05-25","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"done"},
                            {"id":2,"task":"task","description":"-","deadline":"2022-09-25","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"},
                            {"id":3,"task":"task","description":"-","deadline":"2022-09-15","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"}],
                    "counter":3
                    };
    clear([], database)
    expect(database.todos.length).toBe(2);
  });

  test('should reduce counter', () => {
    const database = {"todos":[{"id":1,"task":"task","description":"-","deadline":"2022-05-25","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"done"},
                            {"id":2,"task":"task","description":"-","deadline":"2022-09-25","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"done"},
                            {"id":3,"task":"task","description":"-","deadline":"2022-09-15","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"}],
                    "counter":3
                    };
    clear([], database)
    expect(database.counter).toBe(1);
  });

  test('should delete several done elements', () => {
    const database = {"todos":[{"id":1,"task":"task","description":"-","deadline":"2022-05-25","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"done"},
                            {"id":2,"task":"task","description":"-","deadline":"2022-09-25","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"},
                            {"id":3,"task":"task","description":"-","deadline":"2022-09-15","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"done"},
                            {"id":4,"task":"task","description":"-","deadline":"2022-09-25","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"},
                            {"id":5,"task":"task","description":"-","deadline":"2022-09-15","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"done"}
                          ],
                    "counter":5
                    };
    let res = clear([], database);
    expect(database.todos).toStrictEqual([
      {"id":2,"task":"task","description":"-","deadline":"2022-09-25","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"},
      {"id":4,"task":"task","description":"-","deadline":"2022-09-25","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"}
    ]);
  });
});