"use strict";
let stringArr = ["one", "two", "hel"];
let guitars = ["start", "les", 51];
let mixedData = ["hello", 1988, true];
stringArr[0] = "ali";
stringArr.push("hey");
//stringArr[0]=75  hata verir
//stringArr.push(55) hata veriir
guitars[0] = 1984;
guitars.unshift("hh");
//guitars.unshift(true);hata verir.cunku dizede boolean ifade yok
//stringArr = guitars; hata.cunku stringArr number içermez
guitars = stringArr; //hata vermez
///guitars = mixedData; hata verir
mixedData = guitars;
let test = [];
let bands = [];
bands.push("hello");
//tuple
let myTuple = ["ali", 44, true];
let mixed = ["type", 5, false]; //turu any oldug ıcın
mixed = myTuple; //hata vermez.
//myTuple = mixed; //hata verir.turu any
myTuple[1] = 42;
//object
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "victor",
    prop2: true,
};
//exampleObj.prop2 = 42; hata veır
exampleObj.prop1 = "ali";
// interface Guitarist  {
//     name: string;
//     active?: boolean;
//     album: (string | number)[];
//   };
let veh = {
    name: "eddie",
    active: false,
    album: [1984, 55, "fdgdg"],
};
let jp = {
    name: "jimmy",
    active: true,
    album: ["I", "II", "III"],
};
//veh = jp;
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `hello ${guitarist.name.toUpperCase()}`;
    }
    return "hello";
};
console.log(greetGuitarist(jp));
///enums
//unlike most typescript features,enums are not a type-level addition to js but
//smthng added to the  language and runtime
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["B"] = 1] = "B";
    Grade[Grade["C"] = 5] = "C";
    Grade[Grade["D"] = 6] = "D";
})(Grade || (Grade = {}));
console.log(Grade.B); //1
console.log(Grade.C); //5
