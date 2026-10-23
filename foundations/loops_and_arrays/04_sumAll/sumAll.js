const sumAll = function (...args) {
    const validated = args.map(arg => (!Number.isInteger(arg) || arg < 0) ? 'ERROR' : arg)

    if (validated.includes('ERROR')) {
        return 'ERROR'
    }
    const min = Math.min(args[0], args[1]);
    const max = Math.max(args[0], args[1]);
    let total = 0;
    for (let index = min; index <= max; index++) {
        total += index

    }

    return total


};

// Do not edit below this line
module.exports = sumAll;
