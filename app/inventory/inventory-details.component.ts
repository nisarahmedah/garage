import {Component}  from '@angular/core';
import {Router, OnActivate, RouteSegment} from '@angular/router';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {Observable} from 'rxjs/Observable'; 

import {InventoryService} from '../services/inventory.service';
import {Inventory}    from './inventory';

@Component({
    templateUrl: 'app/inventory/inventory-details.component.html',    
       directives: [ROUTER_DIRECTIVES],
       providers: [InventoryService]    
})
export class InventoryDetailsComponent implements OnActivate{
    pageTitle:string = 'Inventory details';
    inventoryDetails: Inventory;    
    errorMessage: string;
    
    constructor(private _inventoryService: InventoryService, 
                private _router: Router){
    }
    
    routerOnActivate(curr: RouteSegment): void {
        let id = +curr.getParam('id');
        this.pageTitle = this.pageTitle + ':';
        this.searchInventory(id);
    }

    searchInventory(id: number) {
       this._inventoryService.searchInventory(id)
            .subscribe(
            inventory => this.inventoryDetails = inventory,
            error => this.errorMessage = <any>error);
          
          
        console.log("###id####" +id)
        //this.inventory  = this._inventoryService.findInventoryByID(id);
          //this._inventoryService.findInventoryByID(id).subscribe(inventory => this.inventoryDetails = inventory);
          //console.log("###this.inventory.name####" +this.inventoryDetails.name)
         
          
            }
    
        onBack(): void {
        this._router.navigate(['/adminbay']);
    }
} 