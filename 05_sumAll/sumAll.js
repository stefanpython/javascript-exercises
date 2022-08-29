const sumAll = function(a, b) {

    let total = 0;

    if (a > b) {
        const temp = a;
        a = b;
        b = temp;
      }

    for (let i = a; i <= b; i++) {
        total += i
    }
    

    if (a < 0 || b < 0) {
        return "ERROR"
    }

    if (typeof a != typeof b) {
        return "ERROR"
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
