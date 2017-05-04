import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuoteDetailPage } from './quote-detail-page';

@NgModule({
  declarations: [
    QuoteDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(QuoteDetailPage),
  ],
  exports: [
    QuoteDetailPage
  ]
})
export class QuoteDetailPageModule {}
