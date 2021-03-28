//basic math functions
// 'add()' is a valid function
// add(a, b) adds two numbers and returns the result
function add(a,b) {
    return a + b
}

//'subtract()' is a valid function
// subtract(a, b) subtracts b from a and returns the result
function subtract(a,b) {
    return a - b 
}

//'multiply()' is a valid function
// multiply(a, b) multiplies two numbers and returns the result
function multiply(a,b) {
    return a * b
}

//'divide()' is a valid function
// divide(a, b) divides a by b and returns the result
function divide(a,b) {
    return a / b
}

// increment(n) increments n and returns the result
function increment(n){
    return n += 1
}

//decrement(n) decrements n and returns the result
function decrement(n) {
    return n -= 1
}

// makeInt(n)
// parses n as an integer and returns the parsed integer
// assumes base 10
// returns NaN as appropriate
function makeInt(string) {
    return parseInt(string, 10)
}
// preserveDecimal(n)
// preserves n's decimals (it parses n as a floating point number) and returns the parsed number
// returns NaN as appropriate
function preserveDecimal(string) {
    return parseFloat(string)
}
