import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { $routeURL } from '../selectors';
import { AppStateModel } from '../app.module';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent {

  readonly url$ = this.store.pipe(select($routeURL));

  constructor(private readonly store: Store<AppStateModel>) {}
}
