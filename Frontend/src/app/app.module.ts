import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { HomeLayoutComponent } from './home/home-layout.component';
import { ComponentsModule } from './components/components.module';
import { InvalidrouteComponent } from './invalidroute/invalidroute.component';
import { RestrictedrouteComponent } from './restrictedroute/restrictedroute.component';
import { FormsModule } from '@angular/forms';
import { ConfirmdialogComponent } from './components/dialogs/confirmdialog/confirmdialog.component';
import { FiledetaildialogComponent } from './components/dialogs/filedetaildialog/filedetaildialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeLayoutComponent,
    InvalidrouteComponent,
    RestrictedrouteComponent,
    ConfirmdialogComponent,
    FiledetaildialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    MatInputModule ,
    MatDialogModule,
    MatCardModule,
    ComponentsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
