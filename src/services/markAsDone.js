'use strict';
const fs = require('fs');
const path = '../../db/db.json';
const { dateChecker } = require('../helpers/checkDate');
const { getCurrentDate } = require('../helpers/getCurrentDate');
const { displayTask } = require('../helpers/displayTask');
const db = require(path);

const markAsDone = (args) => {
    const id = parseInt(args[3]);
    const date = args[4];
    
    if (date === undefined) {
        db.todos.forEach(task => {
            if (task.id === id) {
                task.whenWasDone = getCurrentDate();
                task.progress = 'done';

                fs.writeFileSync(path, JSON.stringify(db), (err) => {
                    if (err) throw err;
                });
            
                console.log('Your task is marked as done:');
                displayTask(task);
            }
        });
    } else if (dateChecker(new Date(date)) && !isNaN(id)) {
        db.todos.forEach(task => {
            if (task.id === id) {
                task.whenWasDone = date;
                task.progress = 'done';
    
            fs.writeFileSync(path, JSON.stringify(db), (err) => {
                if (err) throw err;
            });
            
            console.log('Your task is marked as done:');
            displayTask(task);
            }
        })
    } else {
        console.log('Incorrect input!');
    }
}

module.exports = markAsDone;