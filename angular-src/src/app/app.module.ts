import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChatComponent } from './components/chat/chat.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';
import { ChatService } from './services/chat.service';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { NewadComponent } from './components/newad/newad.component';
import { TinymceModule } from 'angular2-tinymce';
import { NewworkoutComponent } from './components/newworkout/newworkout.component';
import { ExercisecustomizationComponent } from './components/exercisecustomization/exercisecustomization.component';

const appRoutes: Routes =  [
  {path: '', component: HomeComponent},
  {path: 'workouts', component: NewworkoutComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'chat', component: ChatComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    NewadComponent,
    ChatComponent,
    NewworkoutComponent,
    ExercisecustomizationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    TinymceModule.withConfig({})
  ],
  providers: [ValidateService, AuthService, ApiService, AuthGuard, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
