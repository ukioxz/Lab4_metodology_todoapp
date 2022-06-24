const { expect } = require('@jest/globals');
const deleteTask = require('../src/services/delete')

describe('test for delete method', () => {
  test('should delete element by id', () => {
    const database = {"todos":[{"id":1,"task":"task","description":"-","deadline":"2022-05-25","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"},
                            {"id":2,"task":"task","description":"-","deadline":"2022-09-25","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"},
                            {"id":3,"task":"task","description":"-","deadline":"2022-09-15","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"}],
                    "counter":3
                    };
    deleteTask([ , , , 2], database)
    expect(database.todos.length).toBe(database.todos.length--);
  });

  test('should reduce counter', () => {
    const database = {"todos":[{"id":1,"task":"task","description":"-","deadline":"2022-05-25","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"},
                            {"id":2,"task":"task","description":"-","deadline":"2022-09-25","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"},
                            {"id":3,"task":"task","description":"-","deadline":"2022-09-15","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"}],
                    "counter":3
                    };
    deleteTask([ , , , 1], database)
    expect(database.counter).toBe(database.counter--);
  });

  test('should check type of argument', () => {
    const database = {"todos":[{"id":1,"task":"task","description":"-","deadline":"2022-05-25","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"},
                            {"id":2,"task":"task","description":"-","deadline":"2022-09-25","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"},
                            {"id":3,"task":"task","description":"-","deadline":"2022-09-15","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"}],
                    "counter":3
                    };
    let res = deleteTask([ , , , 5], database);
    expect(res).toBe(false);
  });
});