"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var order_component_1 = require("../order.component");
var MenuComponent = (function () {
    function MenuComponent(menuService, params) {
        var _this = this;
        this.menuService = menuService;
        this.params = params;
        menuService.getDish().map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.dishs = data;
            console.log(data);
        });
        this.pushPage = order_component_1.OrderPage;
    }
    MenuComponent = __decorate([
        core_1.Component({
            selector: "menu-component",
            templateUrl: "menu.html",
        })
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
