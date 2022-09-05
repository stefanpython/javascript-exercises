const palindromes = function (str) {
    // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
    let re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;

    // Step 2. Convert string to lowerCase and replace any special character with an empty space
    let lowRegStr = str.toLowerCase().replace(re, '');

    // Step 3. Reverse string
    let reverseStr = lowRegStr.split('').reverse().join('');

    // Step 4. Check if reversed string is equal to the initial lowerCase string
    return reverseStr === lowRegStr;
};

// Do not edit below this line
module.exports = palindromes;
