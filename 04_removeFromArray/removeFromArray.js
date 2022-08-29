const removeFromArray = function(array, ...args) {
    let result = array.filter(a2 => !args.includes(a2));
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;



// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters