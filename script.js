//1st task
const simpleCalculator = (a, b) => {
    if (b !== undefined) {
        return a + b;
    } else {
        return (c) => a + c;
    }
};

console.log(simpleCalculator(1, 2))
console.log(simpleCalculator(1)(2))

//2nd task
const myFilter = (array, callback, thisArg) => {
    const result = [];
    array.forEach((element, index, arr) => {
        if (callback.call(thisArg, element, index, arr)) {
            result.push(element);
        }
    });
    return result;
};
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = myFilter(numbers, num => num % 2 === 0);
console.log(evenNumbers);

//3rd task
[window.alert, window.prompt, window.confirm] = [window.confirm, window.alert, window.prompt];

