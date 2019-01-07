/**
* @desc This is an exported function which simulates an incremental counter using a closure.
* @param {Number} start This is a param which recieves a Number value and defaults to 0.
* @param {Number} increment This is a param which recieves a Number value and defaults to a 1.
* @return {Function} This returns a function closure where the closure returns the incremented value
*/
module.exports = function counter(start = 0, increment = 1) {

    let counter = start;

    return () => {
        return counter += increment;
    };
}