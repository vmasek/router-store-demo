import { Component } from '@angular/core';
import { RouteParamKey, RoutePath } from './types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly routePath = RoutePath;
  readonly comparisonData = {[RouteParamKey.ComparisonIds]: [1, 42, 99]};
  readonly comparisonData2 = {[RouteParamKey.ComparisonIds]: [12412125, 999999]};

  randomNumber = () => Math.floor(Math.random() * 1000);

  randomQuery() {
    this.router.navigate([], {queryParams: {foo: this.randomNumber()}});
  }

  constructor(private readonly router: Router) {}
}
