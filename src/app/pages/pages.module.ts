import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { UsersComponent } from './admin/users/users.component';
import { CategoryComponent } from './admin/category/category.component';
import { GroupcategoriesComponent } from './admin/groupcategories/groupcategories.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { OrdersDetailComponent } from './admin/orders-detail/orders-detail.component';
import { RolesComponent } from './admin/roles/roles.component';
import { BannersComponent } from './admin/banners/banners.component';
import { ProductsComponent } from './admin/products/products.component';
import { AddNewProductComponent } from './admin/products/add-new-product/add-new-product.component';
import { AddNewUserComponent } from './admin/users/add-new-user/add-new-user.component';
import { AddNewComponent } from './admin/orders/add-new/add-new.component';
import { EditComponent } from './admin/oders/edit/edit.component';
import { EditOrderComponent } from './admin/orders/edit-order/edit-order.component';
import { FormsModule } from '@angular/forms';
import { EditProductComponent } from './admin/products/edit-product/edit-product.component';
import { AddNewGcategoryComponent } from './admin/groupcategories/add-new-gcategory/add-new-gcategory.component';
import { EditGcategoryComponent } from './admin/groupcategories/edit-gcategory/edit-gcategory.component';
import { EidtCategoryComponent } from './admin/category/eidt-category/eidt-category.component';
import { AddNewCategoryComponent } from './admin/category/add-new-category/add-new-category.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddOrderDetailComponent } from './admin/orders-detail/add-order-detail/add-order-detail.component';
import { EditOrderDetailComponent } from './admin/orders-detail/edit-order-detail/edit-order-detail.component';
import { EditUserComponent } from './admin/users/edit-user/edit-user.component';



const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    FormsModule,
    NgxPaginationModule,
    
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    UsersComponent,
    EditUserComponent,
    CategoryComponent,
    GroupcategoriesComponent,
    OrdersComponent,
    OrdersDetailComponent,
    RolesComponent,
    BannersComponent,
    ProductsComponent,
    AddNewProductComponent,
    AddNewUserComponent,
    AddNewComponent,
    EditComponent,
    EditOrderComponent,
    EditProductComponent,
    AddOrderDetailComponent,
    EditOrderDetailComponent,
    AddNewGcategoryComponent,
    EditGcategoryComponent,
    EidtCategoryComponent,
    AddNewCategoryComponent,
  ],
  providers: []
})
export class PagesModule {
}
