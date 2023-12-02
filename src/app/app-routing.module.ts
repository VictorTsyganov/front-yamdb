import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductionsPageComponent } from './pages/productions-page/productions-page.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { GenresPageComponent } from './pages/genres-page/genres-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  { path: '', component: ProductionsPageComponent },
  { path: 'categories', component: CategoriesPageComponent },
  { path: 'genres', component: GenresPageComponent },
  { path: 'create_user', component: RegistrationPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
