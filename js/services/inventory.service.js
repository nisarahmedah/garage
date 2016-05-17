System.register(['@angular/core', '@angular/http', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var InventoryService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            InventoryService = (function () {
                function InventoryService(_http) {
                    this._http = _http;
                    this._inventoryUrl = 'http://ahmni01-i168061:8080/rest/default/garage/v1/inventory';
                }
                InventoryService.prototype.getInventory = function () {
                    var apiHeaders = new http_1.Headers();
                    var _token = sessionStorage.getItem('id_token');
                    apiHeaders.append('Authorization', _token); //apiHeaders.append('Authorization', 'CALiveAPICreator f90a2b7e784e8abd7ba8687c149fb53e:1');
                    apiHeaders.append('Content-Type', 'application/json');
                    return this._http.get(this._inventoryUrl, { headers: apiHeaders })
                        .map(function (response) { return response.json(); })
                        .do(function (data) {
                        //console.log("RecievedData: " + JSON.stringify(data))  
                    })
                        .catch(this.exceptionHandler);
                };
                InventoryService.prototype.searchInventory = function (id) {
                    return this.getInventory()
                        .map(function (inventory) { return inventory.find(function (item) { return item.id === id; }); });
                };
                InventoryService.prototype.exceptionHandler = function (error) {
                    console.log(error);
                    return Observable_1.Observable.throw(error.json().error || 'Encountered Error!!');
                };
                InventoryService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], InventoryService);
                return InventoryService;
            }());
            exports_1("InventoryService", InventoryService);
        }
    }
});
//# sourceMappingURL=inventory.service.js.map