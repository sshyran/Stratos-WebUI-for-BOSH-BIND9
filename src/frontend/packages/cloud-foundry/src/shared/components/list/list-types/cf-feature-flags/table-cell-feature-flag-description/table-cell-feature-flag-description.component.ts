import { Component, Input } from '@angular/core';

import { TableCellCustomComponent } from '../../../../../../../../core/src/shared/components/list/list.types';
import { IFeatureFlag } from '../../../../../../cf-api.types';
import { FeatureFlagDescriptions } from '../cf-feature-flags-data-source';

@Component({
  selector: 'app-table-cell-feature-flag-description',
  templateUrl: './table-cell-feature-flag-description.component.html',
  styleUrls: ['./table-cell-feature-flag-description.component.scss']
})
export class TableCellFeatureFlagDescriptionComponent extends TableCellCustomComponent<IFeatureFlag> {

  description: string;

  @Input()
  set row(row: IFeatureFlag) {
    this.description = row ? FeatureFlagDescriptions[row.name] : null;
  }

}

