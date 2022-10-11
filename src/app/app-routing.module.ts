import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { MenuePageComponent } from './menue-page/menue-page.component';

const routes: Routes = [
  {
    path:"", component: MenuePageComponent
  },
  {
    path:"cart", component: CartPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
