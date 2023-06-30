type one = string;
type two = string | number;
type three = "hello";

///convert(donusturmek) to more or less specific
let a: one = "hello";
let b = a as two;
b = 25;
b = "merhaba";
//b = false; hata veir
let c = a as three;

let d = <one>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat" ///concat=birleştirmek
): number | string => {
  if (c === "add") return a + b;

  ///aksi takdirde
  return " " + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;

//be careful! ts sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, "concat") as number;

//10 as string;
10 as unknown as string;

const img = document.querySelector("img")!; /// ! işareti boş olmadıgını ifade eder.hata verdirmez
const myImg = document.getElementById("#img") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById("#img");

///img?.src;
img.src;
myImg.src;
