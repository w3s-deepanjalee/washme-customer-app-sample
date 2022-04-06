import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./cart/cart.module').then((m) => m.CartPageModule),
  },
  {
    path: 'login2',
    loadChildren: () => import('./login2/login2.module').then( m => m.Login2PageModule)
  },
  {
    path: 'quick-login',
    loadChildren: () => import('./quick-login/quick-login.module').then( m => m.QuickLoginPageModule)
  },
  {
    path: 'my-account',
    loadChildren: () => import('./my-account/my-account.module').then( m => m.MyAccountPageModule)
  },
  {
    path: 'order-type-select',
    loadChildren: () => import('./order-type-select/order-type-select.module').then( m => m.OrderTypeSelectPageModule)
  },
  {
    path: 'order-summery',
    loadChildren: () => import('./order-summery/order-summery.module').then( m => m.OrderSummeryPageModule)
  },
  {
    path: 'address-book',
    loadChildren: () => import('./address-book/address-book.module').then( m => m.AddressBookPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'sign-up-verification',
    loadChildren: () => import('./sign-up-verification/sign-up-verification.module').then( m => m.SignUpVerificationPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'quick-login-verification',
    loadChildren: () => import('./quick-login-verification/quick-login-verification.module').then( m => m.QuickLoginVerificationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
