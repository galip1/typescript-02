"use strict";
class Coder {
    constructor(name, music, age, lang = "typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `hello, I'm ${this.age}`;
    }
    getName() {
        if (this.name)
            `hello, I m ${this.name}`;
        return "no name";
    }
}
const victor = new Coder("ali", "rock", 25);
console.log(victor.getAge());
console.log(victor.getName());
///console.log(victor.age);
class webDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.getLang = () => {
            return ` I write ${this.lang}`;
        };
        this.computer = computer;
    }
}
const Sara = new webDev("mac", "sara", "lofi", 25);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return ` ${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("jimmy", "guitar");
console.log(Page.play("strums"));
/////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const john = new Peeps("john");
const ali = new Peeps("ali");
const veli = new Peeps("veli");
console.log(Peeps.count);
console.log(ali.id);
////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("param is not an array of strings");
    }
}
const MyBands = new Bands();
MyBands.data = ["ali", "veli", "hasan"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "zz top"];
console.log(MyBands.data);
