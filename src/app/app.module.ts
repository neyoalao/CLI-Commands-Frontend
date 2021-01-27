import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {CommandDetailsService} from "./shared/command-details.service";
import {CommandsComponent} from "./commands/commands.component";
import {CommandComponent} from "./commands/command/command.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";

// @ts-ignore

@NgModule({
  declarations: [
    AppComponent,
    CommandsComponent,
    CommandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule

  ],
  providers: [CommandDetailsService],
  bootstrap: [AppComponent]
})
// @ts-ignore
export class AppModule { }
