"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
require('rxjs/add/operator/map');
var orders_component_1 = require("../orders/orders.component");
var search_component_1 = require("../main/search/search.component");
var TablesComponent = (function () {
    function TablesComponent(navCtrl, actionSheetCtrl, tableService) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.tableService = tableService;
        this.tables = [];
    }
    TablesComponent.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.tableService.getTables()
            .then(function (tables) { return _this.tables = tables; });
        console.log('ionViewDidLoad TablePage');
    };
    TablesComponent.prototype.pushSearch = function () {
        this.navCtrl.push(search_component_1.SearchComponent);
    };
    TablesComponent.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Tùy chọn',
            buttons: [
                {
                    text: 'Order',
                    role: 'Order',
                    handler: function () {
                        _this.navCtrl.push(orders_component_1.OrderComponent);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    TablesComponent = __decorate([
        core_1.Component({
            selector: 'tables-component',
            templateUrl: 'tables.component.html'
        })
    ], TablesComponent);
    return TablesComponent;
}());
exports.TablesComponent = TablesComponent;
