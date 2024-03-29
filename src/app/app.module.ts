import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DisplayComponent } from './display/display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SprintComponent } from './sprint/sprint.component';
import { SprintDisplayComponent } from './sprint-display/sprint-display.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DisplayComponent,
    SprintComponent,
    SprintDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
