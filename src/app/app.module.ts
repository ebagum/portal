import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdToolbarModule,MdCardModule,MdSidenavModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftSideMenuComponent } from './left-side-menu/left-side-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftSideMenuComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,FlexLayoutModule,
    MdButtonModule, MdCheckboxModule, MdToolbarModule,MdCardModule,MdSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
