const repeatString = function(string, number) {
    if (number < 0 ) {
        return 'ERROR'
    } else {
        let array = [];
        for (let i = 1; i <= number; i++) {
        array.push(string);
    }
    return array.join('');
    }
};

// Do not edit below this line
module.exports = repeatString;
