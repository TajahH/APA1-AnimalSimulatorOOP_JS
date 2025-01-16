import { Bird } from "./Bird.js";

export class Ostrich extends Bird {
  constructor(weight) {
    
  }

  display() {
    return "I'm an Ostrich and I can't do much";
  }

  feed() {
    return "I'm an omnivore!'";
  }

  weight(){
    return "50kg"
  }
}