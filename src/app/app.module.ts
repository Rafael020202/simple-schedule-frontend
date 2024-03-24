import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListScheduleComponent } from './components/schedule/list-schedule/list-schedule.component';
import { HeaderComponent } from './components/header/header.component';
import { AddToScheduleComponent } from './components/schedule/add-to-schedule/add-to-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    ListScheduleComponent,
    HeaderComponent,
    AddToScheduleComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
