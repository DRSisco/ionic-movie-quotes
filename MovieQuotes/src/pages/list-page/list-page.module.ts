import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPage } from './list-page';
import { ReversePipe } from "../../pipes/reverse-pipe";

@NgModule({
  declarations: [
    ListPage,
    ReversePipe
  ],
  imports: [
    IonicPageModule.forChild(ListPage),
  ],
  exports: [
    ListPage
  ]
})
export class ListPageModule {}
