"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var app_component_1 = require("./app.component");
var home_1 = require("../component/main/home/home");
var dish_component_1 = require("../component/dish/dish.component");
var login_1 = require("../component/main/login/login");
var search_1 = require("../component/main/search/search");
var order_component_1 = require("../component/order/order.component");
var menu_service_1 = require("../component/order/menu/menu.service");
var menu_component_1 = require("../component/order/menu/menu.component");
var table_module_1 = require("../component/tables/table.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.MyApp,
                home_1.HomePage,
                login_1.LoginPage,
                dish_component_1.DishPage,
                search_1.SearchPage,
                order_component_1.OrderPage,
                menu_component_1.MenuComponent,
            ],
            imports: [
                ionic_angular_1.IonicModule.forRoot(app_component_1.MyApp),
                table_module_1.TableModule
            ],
            bootstrap: [ionic_angular_1.IonicApp],
            entryComponents: [
                app_component_1.MyApp,
                home_1.HomePage,
                login_1.LoginPage,
                dish_component_1.DishPage,
                search_1.SearchPage,
                order_component_1.OrderPage,
                menu_component_1.MenuComponent,
            ],
            providers: [
                { provide: core_1.ErrorHandler, useClass: ionic_angular_1.IonicErrorHandler },
                menu_service_1.MenuService,
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
