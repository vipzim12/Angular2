import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ClientComponent } from "./client.component";
import { NotFoundComponent } from "../pages/miscellaneous/not-found/not-found.component";
import { ProductComponent } from "./product/product.component";
import { LoginClientComponent } from "./login-client/login-client.component";
import { RegistorClientComponent } from "./registor-client/registor-client.component";
import { CartComponent } from "./cart/cart.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { CheckoutComponent } from "./checkout/checkout.component";

const routes: Routes = [{
    path: '',
    component: ClientComponent,
    children: [{
        path: 'home',
        component: HomeComponent
    },{
        path: 'product',
        component: ProductComponent
    },{
        path: 'product/group-category/:idGCategory',
        component: ProductComponent
    },{
        path: 'product/category/:idCategory',
        component: ProductComponent
    }, {
        path: 'product/detail/:id',
        component: ProductDetailComponent
    },{
        path: '',
        component: HomeComponent
    }, {
        path: 'login',
        component: LoginClientComponent
    }, {
        path: 'checkout',
        component: CheckoutComponent
    }, {
        path: 'registor',
        component: RegistorClientComponent
    }, {
        path: 'cart',
        component: CartComponent
    }, {
        path: '**',
        component: NotFoundComponent,
      }]
}]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ClientRoutingModule { }