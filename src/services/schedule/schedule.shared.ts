// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Schedule, ScheduleData, SchedulePatch, ScheduleQuery, ScheduleService } from './schedule.class'

export type { Schedule, ScheduleData, SchedulePatch, ScheduleQuery }

export type ScheduleClientService = Pick<
  ScheduleService<Params<ScheduleQuery>>,
  (typeof scheduleMethods)[number]
>

export const schedulePath = 'schedule'

export const scheduleMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export const scheduleClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(schedulePath, connection.service(schedulePath), {
    methods: scheduleMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [schedulePath]: ScheduleClientService
  }
}
