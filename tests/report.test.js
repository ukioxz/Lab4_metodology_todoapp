const { expect } = require('@jest/globals');
const {showReportTodo, doneTodos} = require('../src/services/reportTodo');
const database = require('../db/db');

describe('test for report method', () => {
    test('should return json task by progress', () => {
        expect(doneTodos).toContainEqual({"deadline": "2022-09-15", "description": "-", "id": 3, "progress": "done", "task": "task", "whenWasCreated": "2022-06-23", "whenWasDone": "2022-06-24"})
    });
});