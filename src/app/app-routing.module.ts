import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { SuccesslogComponent } from './successlog/successlog.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'login' , component: LoginComponent},
  { path: 'signup' , component: SignupComponent},
  { path: 'forgetpassword' , component: ForgetpassComponent},
  { path: 'success' , component: SuccesslogComponent},
  { path: 'profile/:id' , component: ProfileComponent},
  { path: '**' , component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
