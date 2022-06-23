'use strict';
const { getCurrentDate } = require('./getCurrentDate');

const dateChecker = (date) => {
    const currDate = getCurrentDate();
    const parsedDate = new Date(date);
    const parsedCurrDate = new Date(currDate);
    const dif = parsedCurrDate - parsedDate;
    const magicNumber = 86400000; // 24*60*60*1000
    let checker = false;

    if (dif < magicNumber) checker = true;

    return parsedDate instanceof Date && !isNaN(parsedDate) && checker;
}

module.exports = { dateChecker };