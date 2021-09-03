import {NgModule} from '@angular/core';
import {environment} from "../environments/environment";
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {HeaderOptionComponent} from './header/header-option/header-option.component';
import {MatCardModule} from "@angular/material/card";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {MatChipsModule} from "@angular/material/chips";
import {AvatarComponent} from './shared/avatar/avatar.component';
import {FeedComponent} from './feed/feed.component';
import {FormsModule} from "@angular/forms";
import {InputOptionComponent} from './feed/input-option/input-option.component';
import {PostComponent} from './feed/post/post.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderOptionComponent,
    SidebarComponent,
    AvatarComponent,
    FeedComponent,
    InputOptionComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
