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
/////////////////////////////////////////////

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
