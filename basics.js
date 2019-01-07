/**
* @desc This is a function which simulates an incremental counter using a closure.
* @param {Number} start This is a param which recieves a Number value and defaults to 0.
* @param {Number} increment This is a param which recieves a Number value and defaults to a 1.
* @return {Function} This returns a function closure where the closure returns the incremented value
* @code "bar"
*/
function counter(start = 0, increment = 1) {

    let counter = start;

    return () => {
        return counter += increment;
    };
}

/** 
 * The local counter variable. 
 * @type {Number} 
 */
let count = counter(0);
console.log(count());