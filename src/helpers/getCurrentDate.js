'use strict';

const getCurrentDate = () => {
    return new Date().toISOString().split('T')[0];
}

module.exports = { getCurrentDate };