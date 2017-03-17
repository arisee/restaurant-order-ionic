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
var home_component_1 = require("../component/main/home/home.component");
var tables_module_1 = require("../component/tables/tables.module");
var login_component_1 = require("../component/main/login/login.component");
var search_component_1 = require("../component/main/search/search.component");
var orders_module_1 = require("../component/orders/orders.module");
var login_service_1 = require("../component/main/login/login.service");
var home_service_1 = require("../component/main/home/home.service");
var dishs_module_1 = require("../component/dishs/dishs.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.MyApp,
                home_component_1.HomePage,
                login_component_1.LoginPage,
                search_component_1.SearchComponent,
            ],
            imports: [
                ionic_angular_1.IonicModule.forRoot(app_component_1.MyApp),
                tables_module_1.TableModule,
                orders_module_1.OrderModule,
                dishs_module_1.DishsModule
            ],
            bootstrap: [ionic_angular_1.IonicApp],
            entryComponents: [
                app_component_1.MyApp,
                home_component_1.HomePage,
                login_component_1.LoginPage,
                search_component_1.SearchComponent
            ],
            providers: [
                { provide: core_1.ErrorHandler, useClass: ionic_angular_1.IonicErrorHandler },
                login_service_1.LoginService,
                home_service_1.HomeService
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
