const { expect } = require('@jest/globals');
const deleteTask = require('../src/services/delete')
const database = require('../db/testDb');

describe('test for delete method', () => {
  test('should delete element by id', () => {
    deleteTask([ , , , 2], database)
    expect(database.todos.length).toBe(database.todos.length--);
  });

  test('should reduce counter', () => {
    deleteTask([ , , , 1], database)
    expect(database.counter).toBe(database.counter--);
  });

  test('should check type of argument', () => {
    let res = deleteTask([ , , , 5], database);
    expect(res).toBe(false);
  });
});