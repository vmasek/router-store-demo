import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Params, Router, RouterStateSnapshot } from '@angular/router';
import { routerReducer, RouterReducerState, RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DataDisplayComponent } from './data-display/data-display.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { RoutePath } from './types';


export interface RouteState {
  url: string;
  path: RoutePath[];
  params: Params; // RouteParamMap
  queryParams: Params;
}

export interface AppStateModel {
  route: RouterReducerState<RouteState>;
}

@Injectable()
export class CustomSerializer implements RouterStateSerializer<RouteState> {

  constructor(private readonly router: Router) {}

  serialize(routerState: RouterStateSnapshot): RouteState {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams },
    } = routerState;
    const { params } = route;

    const urlTree = this.router.parseUrl(url);
    const {segments} = urlTree.root.children.primary;

    console.log('query?', queryParams);

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return {
      url,
      params,
      queryParams,
      path: segments.map(segment => segment.path as RoutePath),
    };
  }
}

export const reducers: ActionReducerMap<AppStateModel> = {
  route: routerReducer,
};


@NgModule({
  declarations: [
    AppComponent,
    DataDisplayComponent,
    WrapperComponent
  ],
  imports: [
    BrowserModule,

    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 15, // Retains last 15 states
    }),

    AppRoutingModule,
  ],
  providers: [
    {provide: RouterStateSerializer, useClass: CustomSerializer},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
