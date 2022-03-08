const reverseString = function(string) {
    const array = string.split('');
    const reversedArray = array.reverse();
    const reversedString = reversedArray.join('');
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
