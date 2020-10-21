import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /*{
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },*/
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'loan-details',
    loadChildren: () => import('./pages/loan-details/loan-details.module').then( m => m.LoanDetailsPageModule)
  },
  {
    path: 'edit-loans',
    loadChildren: () => import('./pages/edit-loans/edit-loans.module').then( m => m.EditLoansPageModule)
  },
  {
    path: 'new-loans',
    loadChildren: () => import('./pages/new-loans/new-loans.module').then( m => m.NewLoansPageModule)
  },
  {
    path: 'loan-requests',
    loadChildren: () => import('./pages/loan-requests/loan-requests.module').then( m => m.LoanRequestsPageModule)
  },
  {
    path: 'new-requests',
    loadChildren: () => import('./pages/new-requests/new-requests.module').then( m => m.NewRequestsPageModule)
  },
  {
    path: 'approved-requests',
    loadChildren: () => import('./pages/approved-requests/approved-requests.module').then( m => m.ApprovedRequestsPageModule)
  },
  {
    path: 'pending-requests',
    loadChildren: () => import('./pages/pending-requests/pending-requests.module').then( m => m.PendingRequestsPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then( m => m.PaymentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }