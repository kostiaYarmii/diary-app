import { Item } from './item.model';

export class StorageData {
    items: Item[];
    maxId: number;
    
    constructor(items: Item[]) {
        this.items = items;
        this.maxId = 1;
    }
}