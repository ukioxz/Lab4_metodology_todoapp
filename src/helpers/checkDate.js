'use strict';

const dateChecker = (date) => {
    return date instanceof Date && !isNaN(date);
}

module.exports = { dateChecker };