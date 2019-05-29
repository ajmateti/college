import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './home/images/images.component';
import { FacultyComponent } from './faculty/faculty.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
const appRoutes: Routes =
  [
    {
      path: '', component: HomeComponent
    },
    {
      path: 'faculty', component: FacultyComponent
    },
    {
      path: 'login', component: LoginFormComponent
    }
  ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ImagesComponent,
    FacultyComponent,
    LoginFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
