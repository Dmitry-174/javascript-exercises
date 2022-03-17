const fibonacci = function(number) {
    if (number <= 0) return 'OOPS';
    if (number == 1) return 1;
    let initialValue = 0;
    let secondValue = 1;
    let fib;
    for (let i = 2; i <= number; i++) {
        fib = initialValue + secondValue;
        initialValue = secondValue;
        secondValue = fib;
    }
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
