// ship.js

// every correct hit will increase the hitCount++ and based on the 
// length and hit comparison isSunk is returned.
export class Ship{

    hitCount = 0;

    constructor( length, name)
    {
        this.length = length;
    }

    hit(){
        this.hitCount++;
    }

    isSunk(){
        if(this.length == this.hitCount)
        {
            return true;
        }
        return false;
    }
}