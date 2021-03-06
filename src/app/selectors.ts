import { createSelector } from '@ngrx/store';
import { RouteParamKey, RouteParamMap, RoutePath, RouteQueryParamKey, RouteQueryParamMap } from './types';
import { AppStateModel, RouteState } from './app.module';

export const $route = ({route}: AppStateModel) => route.state;

export const $routeURL = createSelector(
  $route,
  (route: RouteState) => route.url
);

export const $routePath = createSelector(
  $route,
  (route: RouteState) => route.path
);

export const $routeParams = createSelector(
  $route,
  (route: RouteState) => route.params
);

export const $routeQueryParams = createSelector(
  $route,
  (route: RouteState) => route.queryParams
);

export const $isLanding = createSelector(
  $routePath,
  ([superView]: RoutePath[]) => superView === RoutePath.Landing
);

export const $isRoute = (route: RoutePath) => createSelector(
  $routePath,
  ([superView, view]: RoutePath[]) => superView === route || view === route
);

export const $currentSuperView = createSelector(
  $routePath,
  ([superView]: RoutePath[]) => superView
);

export const $currentView = createSelector(
  $routePath,
  ([superView, view]: RoutePath[]) => view
);

export const $comparisonIds = createSelector(
  $routeParams,
  (params: RouteParamMap) => params[RouteParamKey.ComparisonIds] || []
);

export const $detailItemId = createSelector(
  $routeParams,
  (params: RouteParamMap) => params[RouteParamKey.ItemId],
  // ([superView, view, id]: RoutePath[]) => id,
);

export const $fooQueryValue = createSelector(
  $routeQueryParams,
  (queryParams: RouteQueryParamMap) => Number(queryParams[RouteQueryParamKey.Foo]),
);
