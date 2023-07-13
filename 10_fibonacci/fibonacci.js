const fibonacci = function(fibNum) {
    if (typeof fibNum === 'string') {
        fibNum = parseInt(fibNum);
    }

    if (fibNum < 0) {
        return 'OOPS';
    } else if (fibNum === 1 || fibNum === 2) {
        return 1;
    }
    
   
    if (fibNum > 2) {
    let num1 = 0;
    let num2 = 1;
    let sum = 0;

    for (let i = 2; i <= fibNum; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return sum;
}
};

// Do not edit below this line
module.exports = fibonacci;
