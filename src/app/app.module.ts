import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryComponent } from './pages/category/category.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { RegisterComponent } from './pages/register/register.component';
import { ResetComponent } from './pages/reset/reset.component';

export const AppRoutes: any = [
  {
    path: "",
    component: MainComponent,
    children:[
      {path: "home", component: HomeComponent},
      {path: "category", component: CategoryComponent},
      {path: "transaction", component: TransactionComponent}
    ]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path:"register",
    component: RegisterComponent
  },
  {
    path: "reset",
    component: ResetComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HomeComponent,
    CategoryComponent,
    TransactionComponent,
    RegisterComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
