import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ItemsComponent } from './components/items/items.component';
import { CommentsComponent } from './components/comments/comments.component';

import { CommonService } from './services/common.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ItemsComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
