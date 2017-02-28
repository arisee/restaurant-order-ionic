"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
require('rxjs/add/operator/map');
var search_1 = require("../main/search/search");
var order_component_1 = require("../order/order.component");
var TableComponent = (function () {
    function TableComponent(navCtrl, actionSheetCtrl, tableService) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.tableService = tableService;
        this.tables = [];
    }
    TableComponent.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.tableService.getTables()
            .then(function (tables) { return _this.tables = tables; });
        console.log('ionViewDidLoad TablePage');
    };
    TableComponent.prototype.pushSearch = function () {
        this.navCtrl.push(search_1.SearchPage);
    };
    TableComponent.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Tùy chọn',
            buttons: [
                {
                    text: 'Order',
                    role: 'Order',
                    handler: function () {
                        _this.navCtrl.push(order_component_1.OrderPage);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    TableComponent = __decorate([
        core_1.Component({
            selector: 'table-component',
            templateUrl: 'table.html'
        })
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
