import { DatePipe } from '@angular/common';
import { inject, TestBed } from '@angular/core/testing';

import {
  ApplicationEnvVarsHelper,
} from '../../../../../cloud-foundry/src/features/applications/application/application-tabs-base/tabs/build-tab/application-env-vars.service';
import { generateTestApplicationServiceProvider } from '../../../../../core/test-framework/application-service-helper';
import { BaseTestModules } from '../../../../../core/test-framework/core-test.helper';
import { AppAutoscalerMetricChartListConfigService } from './app-autoscaler-metric-chart-list-config.service';

describe('AppAutoscalerMetricChartListConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppAutoscalerMetricChartListConfigService,
        generateTestApplicationServiceProvider('1', '1'),
        ApplicationEnvVarsHelper,
        DatePipe
      ],
      imports: [...BaseTestModules]
    });
  });

  it('should be created', inject([AppAutoscalerMetricChartListConfigService], (service: AppAutoscalerMetricChartListConfigService) => {
    expect(service).toBeTruthy();
  }));
});
