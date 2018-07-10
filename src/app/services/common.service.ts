import { EventEmitter, Injectable } from '@angular/core';

import { Comment } from '../models//comment.model';
import { Item } from '../models/item.model';
import { StorageData } from '../models/storage-data.model';

@Injectable()
export class CommonService {
    public deleteItemEvent = new EventEmitter();
    public selectItemEvent = new EventEmitter();
    private storage = localStorage;
    private storageData: StorageData = null;
    
    public addComment(item: Item, comment: string): Item {
        item.comments.push(new Comment(item.id, comment));
        this.updateStorage();
        return item;
    }
    
    public addItem(newItemName: string): Item[] {
        this.storageData.items.push(new Item(this.storageData.maxId, newItemName));
        this.increaseMaxId();
        this.updateStorage();
        return this.getItems();
    }
    
    public deleteItem(itemToDelete: Item): void {
        for(let index in this.storageData.items) {
            if(this.storageData.items[index].id == itemToDelete.id) {
                this.storageData.items.splice(Number(index), 1);
                this.updateStorage();
                break;
            }
        }
        this.deleteItemEvent.emit(itemToDelete);
    }
    
    private increaseMaxId(): void {
        this.storageData.maxId += 1;
        this.updateStorage();
    }
    
    public initData(): void {
        let storageData = this.storage.getItem('data');
        if(!storageData) {
            this.initStorage();
        } else {
            this.storageData = JSON.parse(storageData);
        }
    }
    
    private initStorage(): void {
        this.storageData = new StorageData([]);
        this.storage.setItem('data', JSON.stringify(this.storageData));
    }
    
    public getItem(): Item {
        let selectedItem: Item = null;
        for(let item of this.storageData.items) {
            if(item.selected) {
                selectedItem = item;
                break;
            }
        }
        return selectedItem;
    }
    
    public getItems(): Item[] {
        return this.storageData.items;
    }
    
    public selectItem(item: Item) {
        this.updateStorage();
        this.selectItemEvent.emit(item);
    }
    
    private updateStorage() {
        this.storage.setItem('data', JSON.stringify(this.storageData));
    }
}