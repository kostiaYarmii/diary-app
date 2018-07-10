import { Comment } from './comment.model';

export class Item {
    comments: Comment[];
    id: number;
    name: string;
    selected: boolean;
    
    constructor(id: number, name: string) {
        this.comments = [];
        this.id = id;
        this.name = name;
        this.selected = false;
    }
}