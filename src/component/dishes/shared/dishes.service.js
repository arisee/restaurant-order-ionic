"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var mock_dishs_1 = require("./mock-dishs");
var DishesService = (function () {
    function DishesService(http) {
        this.http = http;
    }
    DishesService.prototype.getDish = function () {
        return Promise.resolve(mock_dishs_1.DISHES);
    };
    DishesService = __decorate([
        core_1.Injectable()
    ], DishesService);
    return DishesService;
}());
exports.DishesService = DishesService;
