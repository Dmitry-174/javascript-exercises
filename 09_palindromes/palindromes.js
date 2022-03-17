const palindromes = function (string) {
    const newString = string.toLowerCase().replaceAll(/\W/g, '');
    const reversedString = newString.split('').reverse().join('');
    return newString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
