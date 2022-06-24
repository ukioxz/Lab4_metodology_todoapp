const { expect } = require('@jest/globals');
const {showOverdue} = require('../src/services/showOverdue')

describe('test for showOverdue method', () => {
  test('should show overdued tasks', () => {
    const database = {"todos":[{"id":1,"task":"task","description":"-","deadline":"2022-05-25","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"},
                            {"id":2,"task":"task","description":"-","deadline":"2022-09-25","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"},
                            {"id":3,"task":"task","description":"-","deadline":"2022-09-15","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"}],
                    "counter":3
                    };
    let res = showOverdue([], database);

    expect(res).toStrictEqual([{"id":1,"task":"task","description":"-","deadline":"2022-05-25","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"}])
  });

  test('should show several overdued tasks', () => {
    const database = {"todos":[{"id":1,"task":"task","description":"-","deadline":"2022-05-25","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"},
                              {"id":2,"task":"task","description":"-","deadline":"2022-09-25","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"},
                              {"id":3,"task":"task","description":"-","deadline":"2022-09-15","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"},
                              {"id":4,"task":"task","description":"-","deadline":"2022-04-17","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"}],
                    "counter":4
                    };
    let res = showOverdue([], database);

    expect(res).toStrictEqual([{"id":1,"task":"task","description":"-","deadline":"2022-05-25","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"},
    {"id":4,"task":"task","description":"-","deadline":"2022-04-17","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"}])
  });

  test('should show overdued tasks if there are some done', () => {
    const database = {"todos":[{"id":1,"task":"task","description":"-","deadline":"2022-05-25","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"},
                              {"id":2,"task":"task","description":"-","deadline":"2022-09-25","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"},
                              {"id":3,"task":"task","description":"-","deadline":"2022-09-15","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"},
                              {"id":4,"task":"task","description":"-","deadline":"2022-04-17","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"},
                              {"id":5,"task":"task","description":"-","deadline":"2022-04-15","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"done"}
                            ],
                    "counter":5
                    };
    let res = showOverdue([], database);

    expect(res).toStrictEqual([{"id":1,"task":"task","description":"-","deadline":"2022-05-25","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"},
    {"id":4,"task":"task","description":"-","deadline":"2022-04-17","whenWasCreated":"2022-06-23","whenWasDone":"","progress":"undone"}])
  });
});