const fibonacci = function (num) {

    if (num <= 0 || (typeof num !== "number" && !Number.isFinite(num)) || isNaN(num)) {
        return "OOPS"
    }
    let b = 1
    let a = 0
    for (let index = 1; index < num; index++) {
        let result = a + b
        a = b
        b = result
    }
    return b
};

// Do not edit below this line
module.exports = fibonacci;
