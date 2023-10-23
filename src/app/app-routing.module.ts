import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './common/auth.guard';
import { IntroComponent } from './components/intro/intro.component';

const routes: Routes = [
{ path: "home", component: HomeComponent },
{path:"",component: IntroComponent},
{path:"login",component: LoginComponent},
{ path: "cart", component: CartComponent, canActivate:[authGuard] },
{ path: "order", component: OrderComponent },
{ path: "register", component: RegisterComponent },
{ path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
