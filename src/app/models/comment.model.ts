export class Comment {
    itemId: number;
    text: string;
    
    constructor(itemId: number, text: string) {
        this.itemId = itemId;
        this.text = text;
    }
}