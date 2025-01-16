import { Whale } from "./Whale";

export class BlueWhale extends Whale {

    swim(){
        return "I'm swimming like a Blue Whale"
    }

    feed(){
        return "I eat tons and tons of fish"
    }

    reproduce(){
        return "Female Blue Whales give birth to calves"
    }
    weight(){
        return "180,000kg"
    }
}