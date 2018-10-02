import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppStateModel } from '../app.module';
import { select, Store } from '@ngrx/store';
import { $comparisonIds, $currentView, $detailItemId } from '../selectors';
import { RoutePath } from '../types';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataDisplayComponent {

  readonly routePath = RoutePath;

  readonly currentView$ = this.store.pipe(select($currentView));
  readonly comparisonIds$ = this.store.pipe(select($comparisonIds));
  readonly detailItemId$ = this.store.pipe(select($detailItemId));

  constructor(private readonly store: Store<AppStateModel>) {}

}
