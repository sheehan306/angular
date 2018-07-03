import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { ECASignupFormComponent } from './ecasignup-form/ecasignup-form.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, NgForm} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    ECASignupFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpClientModule,],
  bootstrap: [AppComponent]
})

export class AppModule { }
