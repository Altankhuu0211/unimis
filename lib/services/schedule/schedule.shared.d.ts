import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { Schedule, ScheduleData, SchedulePatch, ScheduleQuery, ScheduleService } from './schedule.class';
export type { Schedule, ScheduleData, SchedulePatch, ScheduleQuery };
export type ScheduleClientService = Pick<ScheduleService<Params<ScheduleQuery>>, (typeof scheduleMethods)[number]>;
export declare const schedulePath = "schedule";
export declare const scheduleMethods: readonly ["find", "get", "create", "patch", "remove"];
export declare const scheduleClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [schedulePath]: ScheduleClientService;
    }
}
