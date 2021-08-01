let test:Array<string> = ['test'];

let test2: {name?: string} = {};


type NewType = string | number;
let name2 :NewType = 123;

const dd = (x: number):number => {
  return 10;
}

const ddd:number = dd(10);

type Member = [number, boolean];
let john:Member = [10, true];

type Member2 = {
  name: string
}

let homer:Member2 = {
  name: 'test'
}

class User {
  constructor(name: string) {
    this.name = name;
  }
}