import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { HeaderOptionComponent } from './header/header-option/header-option.component';
import {MatCardModule} from "@angular/material/card";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {MatChipsModule} from "@angular/material/chips";
import { AvatarComponent } from './shared/avatar/avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderOptionComponent,
    SidebarComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
