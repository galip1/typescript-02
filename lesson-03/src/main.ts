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
let bands: string[] = [];
bands.push("hello");

//tuple
let myTuple: [string, number, boolean] = ["ali", 44, true];

let mixed = ["type", 5, false]; //turu any oldug ıcın
mixed = myTuple; //hata vermez.
//myTuple = mixed; //hata verir.turu any
myTuple[1] = 42;

//object
let myObj: object;
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

type Guitarist = {
  name: string;
  active: boolean;
  album: (string | number)[];
};
// interface Guitarist  {
//     name: string;
//     active?: boolean;
//     album: (string | number)[];
//   };

let veh: Guitarist = {
  name: "eddie",
  active: false,
  album: [1984, 55, "fdgdg"],
};
let jp: Guitarist = {
  name: "jimmy",
  active: true, //yukarıda ? oldugu ıcın hata almayız
  album: ["I", "II", "III"],
};

//veh = jp;

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `hello ${guitarist.name.toUpperCase()}`;
  }
  return "hello";
};
console.log(greetGuitarist(jp));

///enums
//unlike most typescript features,enums are not a type-level addition to js but
//smthng added to the  language and runtime

enum Grade {
  U,
  B,
  C = 5,
  D, //6 diye devam eder
}

console.log(Grade.B); //1
console.log(Grade.C); //5
