const { getArgs } = require('../src/helpers/getArgs');
const { dateChecker } = require('../src/helpers/checkDate');
const { getCurrentDate } = require('../src/helpers/getCurrentDate')

describe('test for getting current date function', () => {
    it('should return date in format YYYY-MM-DD', () => {
        const date = getCurrentDate();
        const regex = /^[0-9]{4}[\-][0-9]{2}[\-][0-9]{2}$/g;
        const result = regex.test(date);
        expect(result).toBe(true);
    }) 
});

describe('test for checking date function', () => {
    test('should throw an error if an argument is not a date', () => {
        expect(() => dateChecker('not a date').toThrow(Error));
    });

    test('should throw an error if date is not like YYYY-MM-DD', () => {
        expect(() => dateChecker('01/01/2023').toThrow(Error));
    });

    test('should throw an error if month is > 12', () => {
        expect(() => dateChecker('2022-31-01').toThrow(Error));
    });

    test('should throw an error if day is > 31', () => {
        expect(() => dateChecker('2022-08-60').toThrow(Error));
    });

    test('should throw an error if date is earlier than today', () => {
        expect(() => dateChecker('2022-05-05').toThrow(Error));
    });
});

describe('test for getting task properties function', () => {
    it('should write task name without ":"', () => {
        const task = getArgs([ , , , 'taskName:', '2022-08-08']);
        expect(task.task).toBe('taskName');
    });

    test('should throw an error when there is no : separator', () => {
        expect(() => getArgs([ , , , 'addedTask4', '2022-08-09']).toThrow(Error));
    });

    test('should throw an error when there is no passed task name', () => {
        expect(() => getArgs([ , , , '', '2022-08-09']).toThrow(Error));
    });

    test('should throw an error when there is no passed deadline', () => {
        expect(() => getArgs([ , , , 'addedTask4', '']).toThrow(Error));
    });
});

