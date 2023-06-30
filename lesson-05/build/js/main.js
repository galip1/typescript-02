"use strict";
///convert(donusturmek) to more or less specific
let a = "hello";
let b = a;
b = 25;
b = "merhaba";
//b = false; hata veir
let c = a;
let d = "world";
let e = "world";
const addOrConcat = (a, b, c ///concat=birleştirmek
) => {
    if (c === "add")
        return a + b;
    ///aksi takdirde
    return " " + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
//be careful! ts sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, "concat");
//10 as string;
10;
const img = document.querySelector("img"); /// ! işareti boş olmadıgını ifade eder.hata verdirmez
const myImg = document.getElementById("#img");
const nextImg = document.getElementById("#img");
///img?.src;
img.src;
myImg.src;
