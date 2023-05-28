// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

// Main data model schema
export const scheduleSchema = Type.Object(
  {
    id: Type.Number(),
    TeacherCode: Type.String(),
    TeacherName: Type.String(),
    LessonCode: Type.String(),
    LessonName: Type.String(),
    LessonType: Type.String(),
    LessonRoom: Type.String(),
    LessonDay: Type.String(),
    LessonTime: Type.String(),
    StudentCode: Type.String(),
    StudentFullName: Type.String(),
    YearCode: Type.String(),
    SemisterName: Type.String()
  },
  { $id: 'Schedule', additionalProperties: false }
)
export type Schedule = Static<typeof scheduleSchema>
export const scheduleValidator = getValidator(scheduleSchema, dataValidator)
export const scheduleResolver = resolve<Schedule, HookContext>({})

export const scheduleExternalResolver = resolve<Schedule, HookContext>({})

// Schema for creating new entries
export const scheduleDataSchema = Type.Pick(scheduleSchema, [
    "TeacherCode",
    "TeacherName",
    "LessonCode",
    "LessonName",
    "LessonType",
    "LessonRoom",
    "LessonDay",
    "LessonTime",
    "StudentCode",
    "StudentFullName",
    "YearCode",
    "SemisterName",
], {
  $id: 'ScheduleData'
})
export type ScheduleData = Static<typeof scheduleDataSchema>
export const scheduleDataValidator = getValidator(scheduleDataSchema, dataValidator)
export const scheduleDataResolver = resolve<Schedule, HookContext>({})

// Schema for updating existing entries
export const schedulePatchSchema = Type.Partial(scheduleSchema, {
  $id: 'SchedulePatch'
})
export type SchedulePatch = Static<typeof schedulePatchSchema>
export const schedulePatchValidator = getValidator(schedulePatchSchema, dataValidator)
export const schedulePatchResolver = resolve<Schedule, HookContext>({})

// Schema for allowed query properties
export const scheduleQueryProperties = Type.Pick(scheduleSchema, [
  'id',
  "TeacherCode",
  "TeacherName",
  "LessonCode",
  "LessonName",
  "LessonType",
  "LessonRoom",
  "LessonDay",
  "LessonTime",
  "StudentCode",
  "StudentFullName",
  "YearCode",
  "SemisterName",
])
export const scheduleQuerySchema = Type.Intersect(
  [
    querySyntax(scheduleQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type ScheduleQuery = Static<typeof scheduleQuerySchema>
export const scheduleQueryValidator = getValidator(scheduleQuerySchema, queryValidator)
export const scheduleQueryResolver = resolve<ScheduleQuery, HookContext>({})
