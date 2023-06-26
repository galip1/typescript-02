//type aliases
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name: string;
  active: boolean;
  album: (string | number)[];
};

type UserId = stringOrNumber;

//interface PostId=stringOrNumber hata verir

//literal types
let userName: "veli" | "ali" | "amy";
userName = "ali";

//functions
const add = (a: number, b: number): number => {
  return a + b;
};

console.log(add(4, 5));

const logMsg = (message: any): void => {
  console.log(message);
};
logMsg("merhaba");

logMsg(add(3, 5));
//logMsg(add("hg", 5)); hata verir

let subtract = function (c: number, d: number): number {
  return c - d;
};

///type mathFunction = (a: number, b: number) => number;
interface mathFunction {
  (a: number, b: number): number;
}

let multyply: mathFunction = function (c, d) {
  return c * d;
};
logMsg(multyply(2, 5));

const addAll = (a: number, b: number, c?: number): number => {
  // return a + b + c;///c bu sekılde hata alır undefined.. ? işaretinden dolayı
  if (c !== undefined) {
    return a + b + c;
  }
  return a + b;
};
logMsg(addAll(2, 5));

///default param value
const sumAll = (a: number = 10, b: number, c: number = 5): number => {
  return a + b + c;
};
logMsg(sumAll(2, 1));
logMsg(sumAll(undefined, 1));

//rest parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This should never happen!");
};
