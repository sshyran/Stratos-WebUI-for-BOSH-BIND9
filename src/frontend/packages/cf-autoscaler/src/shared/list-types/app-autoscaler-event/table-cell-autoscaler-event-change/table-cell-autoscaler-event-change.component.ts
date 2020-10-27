import { Component } from '@angular/core';

import { TableCellCustomComponent } from '../../../../../../core/src/shared/components/list/list.types';

@Component({
  selector: 'app-table-cell-autoscaler-event-change',
  templateUrl: './table-cell-autoscaler-event-change.component.html',
  styleUrls: ['./table-cell-autoscaler-event-change.component.scss']
})
export class TableCellAutoscalerEventChangeComponent extends TableCellCustomComponent<any> { }
