function check3(array, num) {
    if (num % 3 == 0){
        array.push("Fizz");
        return array;
    }
    return array;
}

function check5(array, num) {
    if (num % 5 == 0){
        array.push("Buzz");
        return array;
    }
    return array;
}

function check7(array, num) {
    if (num % 7 == 0){
        array.push("Bang");
        return array;
    }
    return array;
}

function check11(array, num) {
    if (num % 11 == 0){
        return ["Bong"];
    }
    return array;
}

function check13(array, num) {
    if (num % 13 == 0){
        for (let i = 0; i < array.length; i++)
        {
            let str = array[i];
            if (str.substring(0,1) == "B") {
                if (i == 0) {
                    array.unshift("Fezz");
                }
                else{
                    array.splice(i-1, 0, "Fezz");
                }
                return array;
            }
        }
        array.push("Fezz");
        return array;
    }
    return array;
}

function check17(array, num) {
    if ((num % 17 == 0) && (array != [])){
        array.reverse();
        return array;
    }
    return array;
}

function isPositiveInteger(string) {
    if (string == null)
        return false;
}

function fizzBuzz(startValue, endValue) {
    if ((+startValue == NaN) || (+endValue == NaN))
    {
        console.log("Both inputs must be numbers.");
        return;
    };
    if ((+startValue < 0) || (+endValue < 0))
    {
        console.log("Both inputs must be positive.");
        return;
    };
    if ((+startValue % 1 != 0) || (+endValue % 1 != 0))
    {
        console.log("Both inputs must be integers.");
        return;
    }

    for (let i = startValue; i <= endValue; i++) {
        let array = [];
        array = check3(array, i);
        array = check5(array, i);
        array = check7(array, i);
        array = check11(array, i);
        array = check13(array, i);
        array = check17(array, i);
        if (array.length > 0) {
            let str = array.join("");
            console.log(str);
        }
        else {
            console.log(i);
        };
    }
    
}

function test3(array) {
    console.log(check3(array,1))
    console.log(check3(array,3))
}
function test5(array) {
    console.log(check3(array,5))
}
function test7(array) {
    console.log(check3(array,3))
}
function test11(array) {
    console.log(check3(array,3))
}
function test13(array) {
    console.log(check3(array,3))
}
function test17(array) {
    console.log(check3(array,3))
}


function promptedFizzBuzz() {
    var prompt = require("prompt");
    
    console.log("This is a FizzBuzz function. Please input start and end values", '\n', '\n');
    prompt.start();
    prompt.get(['startValue', 'endValue'], function(error, result) {
        fizzBuzz(result.startValue, result.endValue);
    });
}

// Now, we run the main function:
promptedFizzBuzz();



