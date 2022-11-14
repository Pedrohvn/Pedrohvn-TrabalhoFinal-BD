import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponentComponent } from './components/pages/login-component/login-component.component';
import { RegisterComponentComponent } from './components/pages/register-component/register-component.component';

const routes: Routes = [
  {'path': '', component: HomeComponent},
  {'path': 'about', component: AboutComponent},
  {'path': 'login', component: LoginComponentComponent},
  {'path': 'register', component: RegisterComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
