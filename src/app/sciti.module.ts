import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ScitiComponent } from './sciti.component';
import { routing, scitiRoutingProviders } from './sciti.routes';

@NgModule({
  declarations: [
    ScitiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [scitiRoutingProviders],
  bootstrap: [ScitiComponent]
})
export class ScitiModule { }
