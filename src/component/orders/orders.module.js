"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var orders_component_1 = require("./orders.component");
var ionic_angular_1 = require("ionic-angular");
var order_item_component_1 = require("./order-item/order-item.component");
var order_form_component_1 = require("./order-form/order-form.component");
var order_item_service_1 = require("./shared/order-item.service");
var dishs_module_1 = require("../dishs/dishs.module");
var OrderModule = (function () {
    function OrderModule() {
    }
    OrderModule = __decorate([
        core_1.NgModule({
            declarations: [
                orders_component_1.OrderComponent,
                order_item_component_1.OrderItemComponent,
                order_form_component_1.OrderFormComponent,
            ],
            imports: [
                ionic_angular_1.IonicModule.forRoot(orders_component_1.OrderComponent),
                dishs_module_1.DishsModule
            ],
            entryComponents: [
                orders_component_1.OrderComponent,
                order_item_component_1.OrderItemComponent,
                order_form_component_1.OrderFormComponent
            ],
            providers: [
                order_item_service_1.OrderItemService
            ]
        })
    ], OrderModule);
    return OrderModule;
}());
exports.OrderModule = OrderModule;
