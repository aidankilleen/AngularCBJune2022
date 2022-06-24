import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryPipe } from './summary.pipe';
import { FormatTextDirective } from './format-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    FormatTextDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
