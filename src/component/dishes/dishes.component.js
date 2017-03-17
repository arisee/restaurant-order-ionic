"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var DishesComponent = (function () {
    function DishesComponent(dishesService, params) {
        this.dishesService = dishesService;
        this.params = params;
        this.counterValue = 0;
        this.dishes = [];
        this.filter = {
            status: 0
        };
    }
    DishesComponent.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('dishs-component');
        this.dishesService.getDish()
            .then(function (dishes) { return _this.dishes = dishes; });
    };
    DishesComponent = __decorate([
        core_1.Component({
            selector: "dishes-component",
            templateUrl: "dishes.component.html"
        })
    ], DishesComponent);
    return DishesComponent;
}());
exports.DishesComponent = DishesComponent;
