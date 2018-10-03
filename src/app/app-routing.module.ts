import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataDisplayComponent } from './data-display/data-display.component';
import { RouteParamKey, RoutePath } from './types';
import { WrapperComponent } from './wrapper/wrapper.component';

const platformRoutes: Routes = [
  {path: RoutePath.Settings, component: DataDisplayComponent},
  {path: RoutePath.UserProfile, component: DataDisplayComponent},
  {path: `${RoutePath.ItemDetail}/:${RouteParamKey.ItemId}`, component: DataDisplayComponent},
  {path: RoutePath.Comparison, component: DataDisplayComponent},
  {path: '**', redirectTo: RoutePath.Platform}
];

const appRoutes: Routes = [
  {path: RoutePath.Landing, component: WrapperComponent},
  {
    path: RoutePath.Platform,
    component: WrapperComponent,
    children: platformRoutes
  },
  {path: '**', redirectTo: RoutePath.Landing}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
