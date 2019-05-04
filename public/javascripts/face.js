class Face {
    constructor(symbol, value, image){        //when i say newFace I'm executing this
        this._symbol = symbol;
        this._value = value;
        this._image = image;
    }
    set symbol(newSymbol) {
        this.symbol = newSymbol ||  "Unknown";   // being sure the property has a value different undefined
    }                                           // if left of || is TRUE then it is assigned 
    get symbol() {
        return this._symbol;
    }
    set value(newValue)  {     ///  validation - want the value to return an iteger all the time
        if(isNaN(newValue)) {
            this._value = 0;
        }
        else {
            this._value = newValue;
        }
    }
    get value() {
        return this._value;
    }

    
    set image(newImage)  {
        this.image = newImage || "https://media.moddb.com/cache/images/downloads/1/103/102311/thumb_620x2000/background.png";
    }                               //if newImage is undefined then we go to the image
    get image()   {
        return this._image;
    }
}
module.exports = Face;
