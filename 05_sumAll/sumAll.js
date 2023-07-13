const sumAll = function(first, second) {
    if (first < 0 || second < 0 || !Number.isInteger(second) || !Number.isInteger(first)) {
        return 'ERROR';
    } else {
        
    if (first > second) {
        let temp = first;
        first = second;
        second = temp;
    }

   
    let sum = 0;
    for (let i = first; i <= second; i++) {
        sum += i;
    }
    return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
