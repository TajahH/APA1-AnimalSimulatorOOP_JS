import { BigCat } from "./BigCat";

export class BigCat extends Jaguar {
    display(){
        return "I am a jaguar."
    }
    hunt(){
        return "I am a predator, I hunt prey."
    }
    location(){
        return "I live in the jungle."
    }
    weight(){
        return "80kg"
    }

}