class OhatraHoe {
  constructor() {
  }
}

interface Help {
  help: (s: string) => void;
}

class Hafa implements Help {
  help(s: string): void {
  }
}

abstract class AClass {
  abstract fn(): void;
}

class ConcreteClass extends AClass {
  fn() {
  }
}

enum Color {
  BLUE = "blue",
  RED = "red",
  PURPLE = "purple",
}








let booleanOrNumber: boolean | number | Array<string> = 2;
booleanOrNumber = true;
booleanOrNumber = [""];

let nullable: number | undefined;
let nullable2: {a: string|undefined};
let nullable3: {a?: string};

nullable2 = {
  a: undefined,
}
nullable2 = {
  a: "",
}

nullable = 5;

let b: {key1: string} & {key2: string} = {
  key1: "",
  key2: "",
}







