import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";

const APP_ROUTES: Routes = [
  { path: '', component: AppComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, { useHash: false })
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRouterModule {}