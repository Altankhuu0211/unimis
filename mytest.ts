const knex = require('knex')({
  client: 'pg',
  connection: 'postgres://postgres:password@172.17.0.2:5432/unimis'
})
const fs = require('fs')
const path = require('path')

const data = JSON.parse(fs.readFileSync(path.resolve('./') + '/example_data/SAexample-data.json').toString())
console.log('data:', data[0])
data.forEach((element) => {
  console.log('el=', element.TeacherCode)
  knex('schedule')
    .insert({
      TeacherCode: element.TeacherCode.toString(),
      TeacherName: element.TeacherName.toString(),
      LessonCode: element.LessonCode.toString(),
      LessonName: element.LessonName.toString(),
      LessonType: element.LessonType.toString(),
      LessonRoom: element.LessonRoom.toString(),
      LessonDay: element.LessonDay.toString(),
      LessonTime: element.LessonTime.toString(),
      StudentCode: element.StudentCode.toString(),
      StudentFullName: element.StudentFullName.toString(),
      YearCode: element.YearCode.toString(),
      SemisterName: element.SemisterName.toString()
    })
    .then(function (result) {
      console.log('success')
    })
    .catch((err) => {
      console.log('error:', err)
    })
})
