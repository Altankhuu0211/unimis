import type { Application } from '../../declarations';
import { ScheduleService } from './schedule.class';
import { schedulePath } from './schedule.shared';
export * from './schedule.class';
export * from './schedule.schema';
export declare const schedule: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [schedulePath]: ScheduleService;
    }
}
