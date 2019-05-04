///<reference path="knockout-min.js">

var ViewModel = function(age) {
    this.age = ko.observable(age);

    this.message = ko.pureComputed(function() {
        //knockout tracks dependencies automatically.  It knows that
        return `You are ${this.age()} years old` ;
    }, this);
};

ko.applyBindings(new ViewModel("47"));