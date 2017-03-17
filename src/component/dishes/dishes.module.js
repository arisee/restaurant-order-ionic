"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var dish_directive_1 = require("./component/dish.directive");
var dishs_component_1 = require("./dishs.component");
var dishes_service_1 = require("./shared/dishes.service");
var status_pipe_1 = require("./component/status.pipe");
var DishesModule = (function () {
    function DishesModule() {
    }
    DishesModule = __decorate([
        core_1.NgModule({
            declarations: [
                status_pipe_1.StatusPipe,
                dishs_component_1.DishesComponent,
                dish_directive_1.DishDirective
            ],
            imports: [
                ionic_angular_1.IonicModule.forRoot(dishs_component_1.DishesComponent),
            ],
            entryComponents: [
                dishs_component_1.DishesComponent,
                dish_directive_1.DishDirective
            ],
            exports: [
                dish_directive_1.DishDirective
            ],
            providers: [
                dishes_service_1.DishesService
            ]
        })
    ], DishesModule);
    return DishesModule;
}());
exports.DishesModule = DishesModule;
