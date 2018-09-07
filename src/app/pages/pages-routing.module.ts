import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { ProductsComponent } from './admin/products/products.component';
import { OrdersDetailComponent } from './admin/orders-detail/orders-detail.component';
import { BannersComponent } from './admin/banners/banners.component';
import { CategoryComponent } from './admin/category/category.component';
import { GroupcategoriesComponent } from './admin/groupcategories/groupcategories.component';
import { AddNewProductComponent } from './admin/products/add-new-product/add-new-product.component';
import { AddNewUserComponent } from './admin/users/add-new-user/add-new-user.component';
import { UsersComponent } from './admin/users/users.component';
import { AddNewComponent } from './admin/orders/add-new/add-new.component';
import { EditOrderComponent } from './admin/orders/edit-order/edit-order.component';
import { EditProductComponent } from './admin/products/edit-product/edit-product.component';
import { EditGcategoryComponent } from './admin/groupcategories/edit-gcategory/edit-gcategory.component';
import { AddNewGcategoryComponent } from './admin/groupcategories/add-new-gcategory/add-new-gcategory.component';
import { AddNewCategoryComponent } from './admin/category/add-new-category/add-new-category.component';
import { EidtCategoryComponent } from './admin/category/eidt-category/eidt-category.component';
import { AddOrderDetailComponent } from './admin/orders-detail/add-order-detail/add-order-detail.component';
import { EditOrderDetailComponent } from './admin/orders-detail/edit-order-detail/edit-order-detail.component';
import { EditUserComponent } from './admin/users/edit-user/edit-user.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: ECommerceComponent,
  }, {
    path: 'iot-dashboard',
    component: DashboardComponent,
  }, {
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  }, {
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule',
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule',
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule',
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  }, {
    path: 'miscellaneous',
    loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
  }, {
    path: 'products',
    loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
  }, {
    path: '',
    redirectTo: 'iot-dashboard',
    pathMatch: 'full',
  }, {
    path: 'user/select',
    component: UsersComponent
  }, {
    path: 'user/add-new',
    component: AddNewUserComponent
  }, {
    path: 'user/select/:id',
    component: EditUserComponent
  }, {
    path: 'order',
    component: AddNewComponent
  }, {
    path: 'orders/all',
    component: OrdersComponent
  }, {
    path: 'product/all',
    component: ProductsComponent
  }, {
    path: 'order/add-new',
    component: AddNewComponent
  }, {
    path: 'orders/edit/:id',
    component: EditOrderComponent
  }, {
    path: 'orders/all',
    component: OrdersComponent
  }, {
    path: 'order-detail',
    component: OrdersDetailComponent
  }, {
    path: 'order-detail/add-new',
    component: AddOrderDetailComponent
  }, {
    path: 'order-detail/edit/:id',
    component: EditOrderDetailComponent
  }, {
    path: 'product/add-new',
    component: AddNewProductComponent
  }, {
    path: 'product/edit/:id',
    component: EditProductComponent
  }, {
    path: 'group-category/all',
    component: GroupcategoriesComponent
  }, {
    path: 'group-category/edit/:id',
    component: EditGcategoryComponent
  }, {
    path: 'group-category/add-new',
    component: AddNewGcategoryComponent
  }, {
    path: 'order-detail',
    component: OrdersDetailComponent
  }, {
    path: 'banners',
    component: BannersComponent
  }, {
    path: 'category/all',
    component: CategoryComponent
  }, {
    path: 'category/add-new',
    component: AddNewCategoryComponent
  }, {
    path: 'category/edit/:id',
    component: EidtCategoryComponent
  }, {
    path: '**',
    component: NotFoundComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
