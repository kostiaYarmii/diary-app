import { Component, OnInit } from '@angular/core';

import { Item } from '../../models/item.model';

import { CommonService } from '../../services/common.service'

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
    public item: Item = null
    public newComment: string = null;

    constructor(private commonService: CommonService) {
        this.commonService.deleteItemEvent.subscribe((item: Item) => {
            if(this.item ? this.item.id == item.id : false) {
                this.item = null;
                this.newComment = null;
            }
        });
        this.commonService.selectItemEvent.subscribe((item: Item) => {
            this.item = item;
        });
    }

    ngOnInit() {
        this.item = this.commonService.getItem();
    }
    
    public addComment(): void {
        if(this.item && this.newComment) {
            this.item = this.commonService.addComment(this.item, this.newComment);
            this.newComment = null;
        } else {
            alert('Please type comment');
        }
    }
}
