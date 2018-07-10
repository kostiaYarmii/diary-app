import { Component, OnInit } from '@angular/core';

import { Item } from '../../models/item.model';

import { CommonService } from '../../services/common.service';

@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
    public deleting: boolean = false;
    public items: Item[] = [];
    public newItemName: string = null;
    
    constructor(private commonService: CommonService) {
        this.commonService.deleteItemEvent.subscribe(() => {
            this.deleting = false;
        });
    }

    ngOnInit() {
        this.items = this.commonService.getItems();
    }
    
    public addItem(): void {
        if(this.newItemName) {
            this.items = this.commonService.addItem(this.newItemName);
            this.newItemName = null;
        } else {
            alert('Please type item\'s name');
        }
    }
    
    public deleteItem(item: Item): void {
        this.deleting = true;
        this.commonService.deleteItem(item);
    }
    
    public selectItem(selectedItem: Item): void {
        for(let item of this.items) {
            if(item.id == selectedItem.id) {
                item.selected = true;
            } else {
                item.selected = false;
            }
        }
        this.commonService.selectItem(selectedItem);
    }
}
