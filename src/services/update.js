'use strict';
const fs = require('fs');
const path = '../../db/db.json';
const { dateChecker } = require('../helpers/checkDate');
const { displayTask } = require('../helpers/displayTask');
const db = require(path);

const updateDB = (task, database) => {
    if(database == db) {
        fs.writeFileSync(path, JSON.stringify(database), (err) => {
            if (err) throw err;
        });
    }
}

const updateTitle = (task, args) => {
    const newTitle = args[5];
    task.task = newTitle;
}

const updateDescription = (task, args) => {
    const startIndex = args.indexOf(args[5]);
    const endIndex = args.length;
    const arr = args.slice(startIndex, endIndex);
    let info = '';
    for (const el of arr) {
        info += el + ' ';
    }
    task.description = info.trim();
}

const updateDeadline = (task, args) => {
    const newDeadline = args[5];
    if (dateChecker(newDeadline)) {
        task.deadline = newDeadline;
    } else {
        console.log('Incorrect deadline is passed!');
    }
}

const updateTask = (args, database) => {
    const id = parseInt(args[4]);
    const commands = ['title', 'description', 'deadline'];
    const func = [updateTitle, updateDescription, updateDeadline];

    for (const el of commands) {
        if (args[3] === el) {
            database.todos.forEach(task => {
                if (task.id === id) {
                    func[commands.indexOf(el)](task, args);
                    updateDB(task, database);
                    console.log('Your task is updated!:');
                    displayTask(task);
                }
            });
        }
    }
}

module.exports = updateTask;
