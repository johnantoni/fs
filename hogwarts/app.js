const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/hogwarts"

mongoose
  .connect(uri)
  .then(() => {
    console.log(`Successfully connected to: ${uri}`)
  })
  .catch(err => console.log(err.message))

const Student = require('./models/student')

const createStudents = () => {
  const hermione = new Student({
    firstName: 'Hermione',
    lastName: 'Granger',
    birthday: new Date('Sept 19 1973'),
    house: 'Hogwarts',
    married: true,
    titles: [
      'Prefect',
      'Deputy Head of the Department of Magical Law Enforcement',
      'Leader of S.P.E.W',
      'Minister for Magic'
    ],
    height: 65
  })
  hermione
    .save()
    .then(doc => {
      console.log(doc)
    })
    .catch(err => {
      console.log(err)
    })
}

Student
  .remove({})
  .then(createStudents)
