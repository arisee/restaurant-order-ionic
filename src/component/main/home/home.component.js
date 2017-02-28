"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var dish_component_1 = require("../../dish/dish.component");
var table_component_1 = require("../../tables/table.component");
var HomePage = (function () {
    function HomePage(navCtrl, menuCrl) {
        this.navCtrl = navCtrl;
        this.menuCrl = menuCrl;
    }
    HomePage.prototype.openMenu = function () {
        this.menuCrl.toggle();
    };
    HomePage.prototype.pushTablePage = function () {
        this.navCtrl.push(table_component_1.TableComponent);
    };
    HomePage.prototype.pushDishPage = function () {
        this.navCtrl.push(dish_component_1.DishPage);
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'page-home',
            templateUrl: 'home.component.html'
        })
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
