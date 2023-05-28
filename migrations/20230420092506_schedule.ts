// For more information about this file see https://dove.feathersjs.com/guides/cli/knexfile.html
import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('schedule', (table) => {
    table.increments('id')
    table.string('TeacherCode')
    table.string('TeacherName')
    table.string('LessonCode')
    table.string('LessonName')
    table.string('LessonType')
    table.string('LessonRoom')
    table.string('LessonDay')
    table.string('LessonTime')
    table.string('StudentCode')
    table.string('StudentFullName')
    table.string('YearCode')
    table.string('SemisterName')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('schedule')
}
