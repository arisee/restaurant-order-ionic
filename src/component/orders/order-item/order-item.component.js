"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var OrderItemComponent = (function () {
    function OrderItemComponent() {
        this.quantity = 0;
    }
    OrderItemComponent.prototype.addQuantity = function () {
        this.quantity += 1;
    };
    OrderItemComponent.prototype.removeQuantity = function () {
        if (this.quantity <= 0) {
            this.quantity == 0;
        }
        else {
            this.quantity -= 1;
        }
    };
    __decorate([
        core_1.Input('item')
    ], OrderItemComponent.prototype, "dish", void 0);
    OrderItemComponent = __decorate([
        core_1.Component({
            selector: "order-item-component",
            templateUrl: "order-item.component.html"
        })
    ], OrderItemComponent);
    return OrderItemComponent;
}());
exports.OrderItemComponent = OrderItemComponent;
