import { Module } from '@nestjs/common'
import { ActivitiesService } from './pulse/application/services/activities.service'
import { PulseRepo } from './pulse/infrastructure/database/pulse.repo'
import { PulseController } from './pulse/infrastructure/http/controllers/pulse.controller'
import { WakatimeController } from './pulse/infrastructure/http/controllers/wakatimeProxy.controller'
import { HealthController } from '../common/infrastructure/http/controllers/health.controller'
import { StartupController } from './startup/infrastructure/http/controllers/startup.controller'
import { StartupServiceFactory } from './startup/application/services/startupService.factory'
import { UnsupportedStartupService } from './startup/application/services/unsupportedStartup.service'
import { DarwinStartupService } from './startup/application/services/darwinStartup.service'

@Module({
  imports: [],
  controllers: [
    HealthController,
    PulseController,
    WakatimeController,
    StartupController,
  ],
  providers: [
    ActivitiesService,
    StartupServiceFactory,
    PulseRepo,
    UnsupportedStartupService,
    DarwinStartupService,
  ],
})
export class V1Module {}