import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsService } from './settings.service';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
