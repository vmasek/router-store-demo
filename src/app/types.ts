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
}

export type RouteParamMap = {
  [P in RouteParamKey]?: string;
};
