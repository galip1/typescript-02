class Coder {
  secondLang!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
  public getAge() {
    return `hello, I'm ${this.age}`;
  }
  public getName() {
    if (this.name) `hello, I m ${this.name}`;
    return "no name";
  }
}

const victor = new Coder("ali", "rock", 25);
console.log(victor.getAge());
console.log(victor.getName());
///console.log(victor.age);

class webDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  public getLang = () => {
    return ` I write ${this.lang}`;
  };
}
const Sara = new webDev("mac", "sara", "lofi", 25);
console.log(Sara.getLang());
// console.log(Sara.age);
// console.log(Sara.lang);
///////////////////////////////////////////////////////////

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;
  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  play(action: string) {
    return ` ${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guitarist("jimmy", "guitar");
console.log(Page.play("strums"));
/////////////////////////////////////////////

class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }
  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const john = new Peeps("john");
const ali = new Peeps("ali");
const veli = new Peeps("veli");

console.log(Peeps.count);
console.log(ali.id);

////////////////////////////////

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("param is not an array of strings");
  }
}

const MyBands = new Bands();
MyBands.data = ["ali", "veli", "hasan"];
console.log(MyBands.data);

MyBands.data = [...MyBands.data, "zz top"];
console.log(MyBands.data);
