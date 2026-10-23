const palindromes = function (string) {

    let str = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let reverseStr = str.split('').reverse().join('');

    if (str === reverseStr) {
        return true
    }
    else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
