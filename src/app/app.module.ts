import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { DateCountPipe } from './date-count.pipe';
import { QouteFormComponent } from './qoute-form/qoute-form.component';
import { UpvoteButtonComponent } from './upvote-button/upvote-button.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    DateCountPipe,
    QouteFormComponent,
    UpvoteButtonComponent
  ],
  imports: [
    BrowserModule
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
