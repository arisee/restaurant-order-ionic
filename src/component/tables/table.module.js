"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var table_directive_1 = require("./component/table.directive");
var table_service_1 = require("./shared/table.service");
var table_component_1 = require("./table.component");
var ionic_angular_1 = require("ionic-angular");
var TableModule = (function () {
    function TableModule() {
    }
    TableModule = __decorate([
        core_1.NgModule({
            declarations: [
                table_directive_1.TableDirective,
                table_component_1.TableComponent
            ],
            imports: [
                ionic_angular_1.IonicModule.forRoot(table_component_1.TableComponent)
            ],
            entryComponents: [
                table_directive_1.TableDirective,
                table_component_1.TableComponent
            ],
            providers: [
                table_service_1.TableService
            ]
        })
    ], TableModule);
    return TableModule;
}());
exports.TableModule = TableModule;
