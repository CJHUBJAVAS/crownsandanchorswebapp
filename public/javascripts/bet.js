var Face = require("./Face");

class Bet {
    constructor(face, betValue){
        this.face = face;
        this.betValue = betValue;
    }
    
    set face(face)  {
        if(!(face instanceof Face))  {
            throw new Error("Invalid value for property face");
        }
        this_face = face;
    }


    set betValue(BetValue)  {
        if(isNaN(BetValue) || btValue <+ 0) {
            throw new Error("Invalid value for property betValue");
        }
        this._betValue = betValue;
        }

        get betValue () {
            return this._betValue;
        }
}

module.exports= Bet;

    