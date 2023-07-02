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
