"use strict";
//interface PostId=stringOrNumber hata verir
//literal types
let userName;
userName = "ali";
//functions
const add = (a, b) => {
    return a + b;
};
console.log(add(4, 5));
const logMsg = (message) => {
    console.log(message);
};
logMsg("merhaba");
logMsg(add(3, 5));
//logMsg(add("hg", 5)); hata verir
let subtract = function (c, d) {
    return c - d;
};
let multyply = function (c, d) {
    return c * d;
};
logMsg(multyply(2, 5));
const addAll = (a, b, c) => {
    // return a + b + c;///c bu sekılde hata alır undefined.. ? işaretinden dolayı
    if (c !== undefined) {
        return a + b + c;
    }
    return a + b;
};
logMsg(addAll(2, 5));
///default param value
const sumAll = (a = 10, b, c = 5) => {
    return a + b + c;
};
logMsg(sumAll(2, 1));
logMsg(sumAll(undefined, 1));
//rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
//use of the never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This should never happen!");
};
