export enum RoutePath {
  // superviews
  Landing = 'landing',
  Platform = 'platform',

  // views
  Comparison = 'comparison',
  Settings = 'settings',
  UserProfile = 'profile',
  ItemDetail = 'detail',
}

export enum RouteParamKey {
  ComparisonIds = 'comparisonIds',
  ItemId = 'itemId',
}

export type RouteParamMap = {
  [P in RouteParamKey]?: string;
};

export enum RouteQueryParamKey {
  Foo = 'foo',
}

export type RouteQueryParamMap = {
  [P in RouteQueryParamKey]?: string;
};
