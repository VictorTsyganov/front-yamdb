import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductionComponent } from './components/production/production.component';
import { ProductionsPageComponent } from './pages/productions-page/productions-page.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { PanelModule } from 'primeng/panel';
import { PaginatorModule } from 'primeng/paginator';
import { FilterByNamePipe } from './pipes/filter-by-name.pipe';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { LoadingComponent } from './components/loading/loading.component';
import { GenresPageComponent } from './pages/genres-page/genres-page.component';
import { InputTextModule } from 'primeng/inputtext';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LogoutComponent } from './components/logout/logout.component';
import { TableModule } from 'primeng/table';
import { ReviewComponent } from './components/review/review.component';
import { DialogModule } from 'primeng/dialog';
import { CreateReviewComponent } from './components/create-review/create-review.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductionComponent,
    ProductionsPageComponent,
    NavigationComponent,
    FilterByNamePipe,
    CategoriesPageComponent,
    LoadingComponent,
    GenresPageComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    LogoutComponent,
    ReviewComponent,
    CreateReviewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TabMenuModule,
    DataViewModule,
    RatingModule,
    PanelModule,
    PaginatorModule,
    InputTextModule,
    TableModule,
    DialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
