'use strict';

const showMenu = () => {
    const intro = '\nWelcome to our todo app!';
    const info = 'All instructions of the usage are below';
    const menu = `
    Usage:
        $ node main.js add <todo: deadline(YYYY-MM-DD)>     # Add a new task
        $ node main.js describe <id> <description>      # Add description to a task
        $ node main.js delete <id>      # Delete a task
        $ node main.js done <id> *<date(YYYY-MM-DD)>   # Mark task as done *optional
        $ node main.js update title <id> <name>     # Update task title
        $ node main.js update description <id> <description>    # Update description
        $ node main.js update deadline <id> <deadline(YYYY-MM-DD)>     # Update deadline
        $ node main.js ls       # Show your todolist
        $ node main.js amounts     # Show amounts of done, undone and overdue tasks
        $ node main.js showOverdue     # Show overdue deadlines
        $ node main.js report     # Show information about done tasks
        $ node main.js statistic     # Show duration of the task
        $ node main.js undone     # Show undone tasks with upcoming deadlines
    `;
    const endPoint = 'Enjoy our app!\n'
    console.log('\x1b[34m%s\x1b[0m', intro);
    console.log('\x1b[33m%s\x1b[0m', info);
    console.log(menu);
    console.log('\x1b[35m%s\x1b[0m', endPoint);

}

module.exports = { showMenu }