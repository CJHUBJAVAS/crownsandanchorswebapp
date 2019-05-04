let Face = require("./Face");

class Mat {
    constructor(collectionFaces){                       //this is an array of faces
        this._collectionFaces = collectionFaces;
    }
    set collectionFaces(newCollectionFaces) {
        if(!Array.isArray(collectionFaces)) {
            throw new Error();
    }
    let isValid = collectionFaces.map((f) => (f instanceof Face) ? 0 : 1);
    let errors = isValid.filter((f) => f == 1);

    if(errors.length > 0){
        throw new Error();
    }
        else{
            this._faces = faces;
        }
    }

    get faces() {
        return this._faces;
    }
}

module.exports = Mat;