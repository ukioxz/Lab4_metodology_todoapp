const addFunction = require('../src/services/addTask');
const addDescription = require('../src/services/addDescription');
const updateTask = require('../src/services/update');
const markAsDone = require('../src/services/markAsDone');
const testDB = require('../db/testDb');

describe('test for add function', () => {
    it('should increase length of database', () => {
        addFunction([ , , , 'addedTask1:', '2022-08-08'], testDB);
        expect(testDB.todos.length).toBe(testDB.todos.length++);
    });

    it('should increase counter', () => {
        addFunction([ , , , 'addedTask2:', '2022-08-09'], testDB);
        expect(testDB.counter).toBe(testDB.counter++);
    });

    it('should add task to the db array', () => {
        addFunction([ , , , 'addedTask3:', '2022-08-09'], testDB);
        const taskName = 'addedTask3';
        const index = testDB.todos.length - 1;
        const taskFromDB = testDB.todos[index];
        expect(taskFromDB.task).toBe(taskName);
    });
});

describe('test for add description function', () => {
    it('should add description to a task', () => {
        const text = 'description';
        addDescription([ , , , 1, text], testDB);
        const taskFromDB = testDB.todos[0];
        expect(taskFromDB.description).toBe(text);
    });

    test('should throw an error if no index is passed', () => {
        expect(() => addDescription([ , , , , 'text'], testDB).toThrow(Error));
    });

    test('should throw an error if passed index is NaN', () => {
        expect(() => addDescription([ , , , 'one', 'text'], testDB).toThrow(Error));
    });

    test('should throw an error if no description is passed', () => {
        expect(() => addDescription([ , , , 1, ], testDB).toThrow(Error));
    });
});

describe('test for update function', () => {
    it('should not change database array length', () => {
        const startLength = testDB.todos.length;
        updateTask([ , , , 'title', 1, 'new name'], testDB);
        expect(testDB.todos.length).toBe(startLength);
    });

    it('should change task name', () => {
        const newName = 'new name';
        updateTask([ , , , 'title', 1, newName], testDB);
        const taskFromDB = testDB.todos[0];
        expect(taskFromDB.task).toBe(newName);
    });

    it('should change task description', () => {
        const newDesc = 'sth';
        updateTask([ , , , 'description', 1, newDesc], testDB);
        const taskFromDB = testDB.todos[0];
        expect(taskFromDB.description).toBe(newDesc);
    });

    it('should change task deadline', () => {
        const newDate = '2030-01-01';
        updateTask([ , , , 'deadline', 1, newDate], testDB);
        const taskFromDB = testDB.todos[0];
        expect(taskFromDB.deadline).toBe(newDate);
    });

    test('should throw an error if no index is passed', () => {
        expect(() => updateTask([ , , , 'title', , 'sth'], testDB).toThrow(Error));
    });

    test('should throw an error if passed index is NaN', () => {
        expect(() => updateTask([ , , , 'title', 'one', 'sth'], testDB).toThrow(Error));
    });

    test('should throw an error if no argument to change is passed', () => {
        expect(() => updateTask([ , , , 'title', 1, ], testDB).toThrow(Error));
    });    
});

describe('test for mark as done function', () => {
    it('should change progress status', () => {
        markAsDone([ , , , 1], testDB);
        const taskFromDB = testDB.todos[0];
        expect(taskFromDB.progress).toBe('done');
    });

    it('should change whenWasDone property if date is passed', () => {
        const date = '2022-08-01';
        markAsDone([ , , , 1, date], testDB);
        const taskFromDB = testDB.todos[0];
        expect(taskFromDB.whenWasDone).toBe(date);
    });

    it('should not change database array length', () => {
        const startLength = testDB.todos.length;
        markAsDone([ , , , 1], testDB);
        expect(testDB.todos.length).toBe(startLength);
    });

    test('should throw an error if no index is passed', () => {
        expect(() => markAsDone([ , , , ], testDB).toThrow(Error));
    });

    test('should throw an error if passed index is NaN', () => {
        expect(() => markAsDone([ , , , 'one'], testDB).toThrow(Error));
    });
})