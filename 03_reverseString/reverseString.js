const reverseString = function(string) {
/*
    hello

    elloh
    lloeh
    loleh
    olleh
    oellh
    */
   return string.split("").reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
