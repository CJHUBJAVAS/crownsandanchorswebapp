///<reference path="knockout-min.js">

var CrownsAndAnchorsGame = require("./CrownsAnchorsGame");

class ViewModel {
    constructor(age) {

    this.age = ko.observable(age);

    this.CrownsAndAnchorsGame = new CrownsAndAnchorsGame();

    this.GameState = ko.pureComputed(function() {
        var gameState = CrownsAndAnchorsGame.gamestate;
        var state = false;

        switch(gameState){
            case 0: state = false;
                    break;
        }
    

    this.message = ko.pureComputed(function() {
        return `You are ${this.age()} years old` ;
    }, this);
};

ko.applyBindings(new ViewModel("47"));